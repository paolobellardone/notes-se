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

import java.net.InetAddress;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.UnknownHostException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;
import java.util.concurrent.CompletionException;
import java.util.logging.Level;
import java.util.logging.Logger;

import io.helidon.config.Config;
import io.helidon.dbclient.DbClient;
import io.helidon.http.Status;
import io.helidon.webserver.http.Handler;
import io.helidon.webserver.http.HttpRules;
import io.helidon.webserver.http.HttpService;
import io.helidon.webserver.http.ServerRequest;
import io.helidon.webserver.http.ServerResponse;

/**
 * This class implements REST endpoints to interact with notes.
 * The following operations are supported:
 *
 * <ul>
 * <li>GET /notes: List all notes</li>
 * <li>GET /notes/{id}: Retrieve single note by id</li>
 * <li>POST /notes: Create a new note</li>
 * <li>PUT /notes/{id}: Update a note by id</li>
 * <li>DELETE /notes/{id}: Delete a note by id</li>
 * </ul>
 *
 * @version 1.3 21 May 2024
 * @author PaoloB
 */
public class NotesService implements HttpService {

    private static final Logger LOGGER = Logger.getLogger(NotesService.class.getName());

    private final DbClient dbClient;


    /**
     * Default constructor.
     *
     * @param dbClient DB client configuration to be used to connect to database service
     */
    NotesService(DbClient dbClient) {
        this.dbClient = dbClient;
    }

    /**
     * Updates the routing configuration.
     *
     * @param rules the rules set to be updated
     */
    @Override
    public void routing(HttpRules rules) {
        rules.get("/", this::listNotes)
             .get("/{id}", this::getNoteById)
             .post("/", Handler.create(Note.class, this::insertNote))
             .put("/{id}", Handler.create(Note.class, this::updateNote))
             .delete("/{id}", this::deleteNoteById);
    }

    /**
     * Get all the notes.
     * GET /notes
     *
     * @param request HTTP request
     * @param response HTTP response
     */
    private void listNotes(ServerRequest request, ServerResponse response) {
        LOGGER.fine("Getting all Notes from the database.");
        List<Note> notes = dbClient.execute().namedQuery("select-all-notes")
                                             .map(row -> row.as(Note.class))
                                             .toList();
        if (notes != null) {
            response.status(Status.OK_200).send(notes);
            LOGGER.fine("Got all notes.");
        } else {
            sendError(new Throwable("Could not read notes from the database"), response);
            LOGGER.severe(() -> "Could not read notes from the database " + response.toString());
        }
    }

    /**
     * Get the note with id as identifier.
     * GET /notes/{id}
     *
     * @param request HTTP request
     * @param response HTTP response
     */
    private void getNoteById(ServerRequest request, ServerResponse response) {
        try {
            int id = Integer.parseInt(request.path().pathParameters().get("id"));
            LOGGER.fine(() -> "Getting note with id [" + id + "] from the database.");
            dbClient.execute()
                    .namedGet("select-note-by-id", id)
                    .ifPresentOrElse(
                        row -> {
                            LOGGER.fine(() -> "Got note with id [" + id + "] from the database.");
                            response.status(Status.OK_200).send(row.as(Note.class));
                        },
                        () -> {
                            LOGGER.warning(() -> "Note with id [" + id + "] not found in the database.");
                            response.status(Status.NOT_FOUND_404).send();
                        });
        } catch (NumberFormatException e) {
            sendError(e, response);
            LOGGER.severe(() -> "Could not read note from the database");
        }
    }

    /**
     * Create a new note.
     * POST /notes
     *
     * @param request HTTP request
     * @param response HTTP response
     * @param note the note to be created and persisted
     */
    private void insertNote(Note note, ServerResponse response) {
        long count = dbClient.execute().createNamedInsert("insert-note")
                                       .indexedParam(note)
                                       .execute();
        if (count == 1 ) {
            try {
                LOGGER.fine(() -> "Creating note with id [" + note.getId() + "] in the database.");
                response.headers()
                    .location(new URI("http://" +
                                      InetAddress.getLocalHost().getCanonicalHostName() +
                                      ":" +
                                      Config.global().get("server.port").asInt().get() +
                                      "/notes/" +
                                      note.getId()));
            } catch (URISyntaxException | UnknownHostException e) {
                sendError(e, response);
                LOGGER.severe(() -> "Coudl not get the URI of the created note" + e.getMessage());
            }
            LOGGER.fine(() -> "Created note with id [" + note.getId() + "] in the database.");
            response.status(Status.CREATED_201).send(note);    
        } else {
            sendError(new Throwable("Could not write note in the database"), response);
            LOGGER.severe(() -> "Could not write note in the database");
        }

    }

    /**
     * Update the note with id as identifier.
     * PUT /notes/{id}
     *
     * @param request HTTP request
     * @param response HTTP response
     * @param note the note to be updated and persisted
     */
    private void updateNote(Note note, ServerResponse response) {
        try {
            LOGGER.fine("Updating note with id [" + note.getId() + "] in the database.");
            long count = dbClient.execute()
                                 .createNamedUpdate("update-note-by-id")
                                 .addParam("name", note.getName())
                                 .addParam("contents", note.getContents())
                                 .addParam("id", note.getId()) // This is for the where condition
                                 .execute();
            if (count == 0) {
                LOGGER.warning("Note with id [" + note.getId() + "] not found in the database.");
                response.status(Status.NOT_FOUND_404).send();
            }
            else {
                LOGGER.fine("Updated note with id [" + note.getId() + "].");
                response.status(Status.OK_200).send(note.getId());
            }
        } catch (NumberFormatException e) {
            sendError(e, response);
            LOGGER.severe(() -> "Could not update note in the database");
        }
    }

    /**
     * Delete the note with id as identifier.
     * DELETE /notes/{id}
     *
     * @param request
     * @param response
     */
    private void deleteNoteById(ServerRequest request, ServerResponse response) {
        try {
            int id = Integer.parseInt(request.path().pathParameters().get("id"));
            LOGGER.fine(() -> "Deleting note with id [" + id + "] in the database.");
            long count = dbClient.execute()
                                 .createNamedDelete("delete-note-by-id")
                                 .addParam("id", id)
                                 .execute();
                        if (count == 0) {
                            LOGGER.warning(() -> "Note with id [" + id + "] not found in the database.");
                            response.status(Status.NOT_FOUND_404).send();
                        }
                        else {
                            LOGGER.fine(() -> "Deleted note with id [" + id + "].");
                            response.status(Status.OK_200).send(id);
                        }
        } catch (NumberFormatException e) {
            sendError(e, response);
            LOGGER.severe(() -> "Could not delete note from the database");
        }
    }

    /**
     * Send a 500 response code and a few details.
     *
     * @param throwable throwable that caused the issue
     * @param response server response
     * @param <T> type of expected response, will be always {@code null}
     * @return {@code Void} so this method can be registered as a lambda
     * with {@link java.util.concurrent.CompletionStage#exceptionally(java.util.function.Function)}
     */
    private <T> T sendError(Throwable throwable, ServerResponse response) {
        Throwable realCause = throwable;

        if (throwable instanceof CompletionException) {
            realCause = throwable.getCause();
        }

        if (realCause.getClass() == SQLIntegrityConstraintViolationException.class) {
            LOGGER.log(Level.SEVERE, "Unique constraint violated.");
            response.status(Status.CONFLICT_409);
            response.send();
        }
        else {
            LOGGER.log(Level.WARNING, "Failed to process request", throwable);
            response.status(Status.INTERNAL_SERVER_ERROR_500);
            response.send("Failed to process request: " + realCause.getClass().getName() + "(" + realCause.getMessage() + ")");
        }

        return null;
    }

}
