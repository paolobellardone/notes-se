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

import java.util.logging.Logger;

import io.helidon.logging.common.LogConfig;
import io.helidon.common.context.Contexts;
import io.helidon.config.Config;
import io.helidon.cors.CrossOriginConfig;
import io.helidon.dbclient.DbClient;
import io.helidon.dbclient.health.DbClientHealthCheck;
import io.helidon.webserver.WebServer;
import io.helidon.webserver.WebServerConfig;
import io.helidon.webserver.cors.CorsSupport;
import io.helidon.webserver.observe.ObserveFeature;
import io.helidon.webserver.observe.health.HealthObserver;
import io.helidon.webserver.staticcontent.StaticContentService;

/**
 * Main class that starts up server and registers Notes services.
 *
 * @version 1.3 21 May 2024
 * @author PaoloB
 */
public final class Main {

    private static final Logger LOGGER = Logger.getLogger(Main.class.getName());

    private static boolean initDB = false;

    private static Config config;

    /**
     * Cannot be instantiated.
     */
    private Main() {
        throw new UnsupportedOperationException("Instances of Main utility class are not allowed");
    }

    /**
     * Application main entry point.
     *
     * @param args command line arguments
     */
    public static void main(final String[] args) {

        // Use --init ot -i to create and populate the demo database
        if (args.length > 0 && (
            args[0].equals("--init") ||
            args[0].equals("-i"))) {
                initDB = true;
            }

        startServer();
    }

    /**
     * Start the server.
     */
    static WebServer startServer() {
        // Load logging configuration
        LogConfig.configureRuntime();

        // By default this will pick up application.yaml from the classpath
        config = Config.create();
        Config.global(config);

        // Prepare routing and build server
        WebServer server = setupServer(WebServer.builder());

        // Start web server
        server.start();
        if (server.isRunning()) {
            LOGGER.info(() -> "WEB server is up! http://localhost:" + server.port() + "/notes");
            return server;
        }
        else {
            LOGGER.severe("Web server startup failed");
            return null;
        }
    }

    /**
     * Creates new {@link io.helidon.webserver.WebServer}.
     * 
     * @param builder builder object used to configure the server
     * @return a server instance configured with cors, health-checks, metrics and routing for static content and services
     */
    static WebServer setupServer(WebServerConfig.Builder builder) {
        Config dbConfig = config.get("db");
        // Added to remove Oracle JDBC behaviour to connect to ONS by default
        System.setProperty("oracle.jdbc.fanEnabled", "false");
        DbClient dbClient = DbClient.create(dbConfig);
        Contexts.globalContext().register(dbClient);

        ObserveFeature observe = ObserveFeature.builder()
                                               .config(config.get("server.features.observe"))
                                               .addObserver(HealthObserver.builder()
                                                                          .useSystemServices(true)
                                                                          .details(true)
                                                                          .addCheck(DbClientHealthCheck.create(dbClient,
                                                                                                               dbConfig.get("health-check")))
                                                                          .build())
                                               .build();

        CorsSupport corsSupport = CorsSupport.builder()
                                             .addCrossOrigin(CrossOriginConfig.builder()
                                                                              .exposeHeaders("*")
                                                                              .allowHeaders("*")
                                                                              .allowMethods("*")
                                                                              .allowOrigins("*")
                                                                              .allowCredentials(true)
                                                                              .build())
                                             .build();

        // Initialize database schema
        if (initDB)
            InitializeDb.init(dbClient);

        return builder
                      .config(config.get("server"))
                      .addFeature(observe)
                      .routing(routing -> routing.register("/", StaticContentService.builder("WEB")
                                                 .welcomeFileName("index.html")
                                                 .build())                                                         // UI at "/"
                                                 .register("/notes", corsSupport, new NotesService(dbClient)) // API at "/notes"
                      )
                      .build();

        // Other paths:
        // Health check at "/observe/health"
        // Metrics at "/observe/metrics"
    }

}
