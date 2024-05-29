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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import io.helidon.dbclient.DbColumn;
import io.helidon.dbclient.DbMapper;
import io.helidon.dbclient.DbRow;

/**
 * Maps database types to and from {@link io.helidon.demo.notes.Note} class.
 *
 * @version 1.3 21 May 2024
 * @author PaoloB
 */
public class NoteMapper implements DbMapper<Note> {

    /**
     * Read a row of the table.
     *
     * @param row the row of the table
     * @return Note the row mapped to a note object
     */
    @Override
    public Note read(DbRow row) {
        DbColumn id = row.column("ID");
        DbColumn name = row.column("NAME");
        DbColumn contents = row.column("CONTENTS");
        return new Note(id.get(BigDecimal.class), name.get(String.class), contents.get(String.class));
    }

    /**
     * Map a row of the table to named values.
     *
     * @param value the note object
     * @return Map the note object mapped to named values in a Map
     */
    @Override
    public Map<String, Object> toNamedParameters(Note value) {
        Map<String, Object> map = new HashMap<>(3);
        map.put("id", value.getId());
        map.put("name", value.getName());
        map.put("contents", value.getContents());
        return map;
    }

    /**
     * Map a row of the table to indexed values.
     *
     * @param value the note object
     * @return List the note object mapped to indexed values in a List
     */
    @Override
    public List<Object> toIndexedParameters(Note value) {
        List<Object> list = new ArrayList<>(3);
        list.add(value.getId());
        list.add(value.getName());
        list.add(value.getContents());
        return list;
    }

}
