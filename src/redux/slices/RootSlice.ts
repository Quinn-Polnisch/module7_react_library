import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice ({
    name: "root",
    initialState: {
        isbn: "ISBN",
        title: "Title",
        author: "Author",
        publisher: "Publisher",
        length: "Length",
    },
    reducers: {
        chooseISBN: (state, action) => {state.isbn = action.payload},
        chooseTitle: (state, action) => {state.title = action.payload},
        chooseAuthor: (state, action) => {state.author = action.payload},
        choosePublisher: (state, action) => {state.publisher = action.payload},
        chooseLength: (state, action) => {state.length = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseISBN, chooseTitle, chooseAuthor, choosePublisher, chooseLength } = rootSlice.actions;