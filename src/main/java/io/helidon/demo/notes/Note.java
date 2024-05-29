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

import java.math.BigDecimal;

/**
 * POJO representing a note.
 *
 * @version 1.3 21 May 2024
 * @author PaoloB
 */
public class Note {

    private BigDecimal id;
    private String name;
    private String contents;

    /**
     * Default constructor.
     */
    public Note() {
        // JSON-B
    }

    /**
     * Create a note with name and contents.
     *
     * @param id id of the note
     * @param name name of the note
     * @param contents contents of the note
     */
    public Note(BigDecimal id, String name, String contents) {
        this.id = id;
        this.name = name;
        this.contents = contents;
    }

    /**
     * Get the id of a note.
     *
     * @return id id of the note
     */
    public BigDecimal getId() {
        return id;
    }

    /**
     * Set the id of a note.
     *
     * @param id id of the note
     */
    public void setId(BigDecimal id) {
        this.id = id;
    }

    /**
     * Get the name of a note.
     *
     * @return name name of the note
     */
    public String getName() {
        return name;
    }

    /**
     * Set the name of a note.
     *
     * @param name name of the note
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Get the contents of a note.
     *
     * @return contents contents of the note
     */
    public String getContents() {
        return contents;
    }

    /**
     * Set the contents of a note.
     *
     * @param contents contents of the note
     */
    public void setContents(String contents) {
        this.contents = contents;
    }

}
