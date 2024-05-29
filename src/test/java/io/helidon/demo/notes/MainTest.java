/*
 * MIT License
 *
 *  Copyright (c) 2022 PaoloB
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

import java.util.Collections;
import java.util.Random;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonBuilderFactory;
import jakarta.json.JsonObject;
import io.helidon.http.Status;
import io.helidon.http.media.jsonp.JsonpSupport;
import io.helidon.webclient.api.ClientResponseTyped;
import io.helidon.webclient.api.HttpClientResponse;
import io.helidon.webclient.api.WebClient;
import io.helidon.webserver.WebServer;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@DisplayNameGeneration(DisplayNameGenerator.Simple.class)
public class MainTest {
    private static final JsonBuilderFactory JSON_BUILDER = Json.createBuilderFactory(Collections.emptyMap());

    private static WebServer webServer;
    private static WebClient webClient;

    @BeforeAll
    public static void startTheServer() throws Exception {
        webServer = Main.startServer();

        long timeout = 2000;
        long now = System.currentTimeMillis();

        while (!webServer.isRunning()) {
            if ((System.currentTimeMillis() - now) > timeout) {
                Assertions.fail("Failed to start webserver");
            }
        }

        webClient = WebClient.builder()
                             .baseUri("http://localhost:" + webServer.port())
                             .addMediaSupport(JsonpSupport.create())
                             .build();
    }

    @AfterAll
    public static void stopServer() throws Exception {
        if (webServer != null) {
            webServer.stop();
        }
    }

    @Test
    void testNotesGetAllEndpoint() throws Exception {
        /** 1. Test to search for all notes */
        assertThat(getNotesCount(), is(4));
    }

    @Test
    void testNotesGetByIdEndpoint() throws Exception {
        /** 2. Test to search for a specific note by Id */
        assertThat(
                webClient.get()
                         .path("/notes/999")
                         .request(JsonObject.class)
                         .entity()
                         .getString("name"),
                is("test note 1")
        );
    }

    @Test
    void testNotesGetANonExistingNote() throws Exception {
        /** 3. Test to search for a non existing note using a random Id */
        Random rnd = new Random();
        Integer noteId = rnd.nextInt(50000);
        assertThat(
                webClient.get()
                         .path("/notes/" + noteId)
                         .request()
                         .status(),
                is(Status.NOT_FOUND_404)
        );
    }

    @Test
    void testNotesPublishEndPoint() throws Exception {
        /** 4. Test to publish a new note using random data and then delete it */

        // This is needed to interact with variables inside lambda expressions
        final String[] path = { null };

        // Create the note...
        JsonObject json = JSON_BUILDER.createObjectBuilder()
                                      .add("id", 1111)
                                      .add("name", "Test")
                                      .add("contents", "This is a test")
                                      .build();
        
        HttpClientResponse response = webClient.post()
                                               .path("/notes")
                                               .submit(json);

        assertThat(response.status(), is(Status.CREATED_201));
        assertThat(getNotesCount(), is(5));

        path[0] = response.headers().location().orElseThrow().getPath();

        // ... check that the note is successfully created...
        assertThat(
                webClient.get()
                         .path(path[0])
                         .request(JsonObject.class)
                         .entity()
                         .getString("name"),
                is("Test")
        );

        // ... then remove the note
        assertThat(
                webClient.delete()
                         .path(path[0])
                         .request()
                         .status(),
                is(Status.OK_200)
        );


        assertThat(getNotesCount(), is(4));
    }

    @Test
    void testNotesUpdateEndpoint() throws Exception {
        /** 5. Test to publish a new note and update it using random data and then delete it */
        Random rnd = new Random();
        Integer noteId = rnd.nextInt(9999);
        String noteName = "Note " + noteId.toString();
        String noteContents = "This is note number " + noteId.toString();

        // This is needed to interact with variables inside lambda expressions
        final String[] path = { null };

        // Create the note...
        JsonObject json = JSON_BUILDER.createObjectBuilder()
                                      .add("id", noteId)
                                      .add("name", noteName)
                                      .add("contents", noteContents)
                                      .build();

        HttpClientResponse response1 = webClient.post()
                                                .path("/notes")
                                                .submit(json);
        assertThat(response1.status(), is(Status.CREATED_201));
        assertThat(getNotesCount(), is(5));
        path[0] = response1.headers().location().orElseThrow().getPath();

        // ... then update the note...
        json = JSON_BUILDER.createObjectBuilder()
                           .add("id", noteId)
                           .add("name", "Updated Test")
                           .add("contents", "Updated Contents")
                           .build();

        assertThat(
            webClient.put()
                     .path(path[0])
                     .submit(json)
                     .status(),
            is(Status.OK_200)
        );

        // ... check for the updated values are successfully written...
        ClientResponseTyped<JsonObject> response2 = webClient.get()
                                                             .path(path[0])
                                                             .request(JsonObject.class);

        assertThat(response2.entity().getString("name"), is("Updated Test"));
        assertThat(response2.entity().getString("contents"), is("Updated Contents"));

        // ... then finally remove the note
        assertThat(
            webClient.delete()
                     .path(path[0])
                     .request()
                     .status(),
            is(Status.OK_200));
        // The notes now should be 4
        assertThat(getNotesCount(), is(4));
    }

    @Test
    void testNotesDeleteANonExistingNote() throws Exception {
        /** 6. Test to delete a non existing note */
        Random rnd = new Random();
        Integer noteId = rnd.nextInt(9999);
        assertThat(
                webClient.delete()
                         .path("/notes/" + noteId.toString())
                         .request()
                         .status(),
                is(Status.NOT_FOUND_404)
        );
        // The notes should still be 4
        assertThat(getNotesCount(), is(4));
    }

    @Test
    void testNotesHealthAndMetricsEndPoints() throws Exception {
        /** 7. Test the health and metrics endpoints */
        assertThat(
                webClient.get()
                         .path("/observe/health")
                         .request()
                         .status(),
                is(Status.OK_200)
        );

        assertThat(
                webClient.get()
                         .path("/observe/metrics")
                         .request()
                         .status(),
                is(Status.OK_200)
        );
    }

    private int getNotesCount() throws Exception {
        /** Utility method to count notes in the table */
        return webClient.get()
                        .path("/notes")
                        .request(JsonArray.class)
                        .entity()
                        .size();
    }

}
