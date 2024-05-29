/*
 * MIT License
 *
 *  Copyright (c) 2022, 2024 PaoloB
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

package io.helidon.demo.notes;

import java.util.concurrent.ExecutionException;
import java.util.logging.Logger;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;
import jakarta.json.JsonValue;

import io.helidon.dbclient.DbClient;
import io.helidon.dbclient.DbExecute;
import io.helidon.dbclient.DbTransaction;

/**
 * Initialize JDBC database schema and populate it with sample data.
 *
 * @version 1.3 21 May 2024
 * @author PaoloB
 */
public class InitializeDb {

    private static final Logger LOGGER = Logger.getLogger(InitializeDb.class.getName());

    /**
     * Notes source file.
     */
    private static final String NOTES = "/Notes.json";

     /**
     * Cannot be instantiated.
     */
    private InitializeDb() {
        throw new UnsupportedOperationException("Instances of InitializeDb utility class are not allowed");
    }

    /**
     * Initialize JDBC database schema and populate it with sample data.
     *
     * @param dbClient database client
     */
    static void init(DbClient dbClient) {
        DbTransaction tx = dbClient.transaction();
        LOGGER.info("Initializing database.");
        initSchema(dbClient);
        try {
            initData(tx);
            tx.commit();
        } catch (Exception e) {
            tx.rollback();
            LOGGER.severe(() -> "Could not initialize database" + e.getMessage());
        }
        LOGGER.info("Database initialized.");
    }

    /**
     * Initializes database schema.
     *
     * @param dbClient database client
     */
    private static void initSchema(DbClient dbClient) {
        DbExecute exec = dbClient.execute();
        try {
            exec.namedDml("drop-notes");
        } catch (Exception e) {
            LOGGER.warning(() -> "Could not delete table" + e.getCause() != null ? e.getCause().getMessage() : e.getMessage());
        }
        try {
            exec.namedDml("create-notes");
        } catch (Exception e) {
            LOGGER.warning(() -> "Could not create table" + e.getCause() != null ? e.getCause().getMessage() : e.getMessage());
        }
    }

    /**
     * Initialize database content.
     *
     * @param exec database transaction
     * @throws ExecutionException when database query failed
     * @throws InterruptedException if the current thread was interrupted
     */
    private static void initData(DbExecute exec) {
        try (JsonReader reader = Json.createReader(InitializeDb.class.getResourceAsStream(NOTES))) {
            JsonArray notes = reader.readArray();
            for (JsonValue noteValue : notes) {
                JsonObject note = noteValue.asJsonObject();
                exec.namedInsert("insert-note",
                                               note.getInt("id"),
                                               note.getString("name"),
                                               note.getString("contents"));
            }
        }
    }

}
