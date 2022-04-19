import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mark:''
}

export const markdownSlice = createSlice({
    name: 'markdown',
    initialState,
    reducers: {
        changeMark: (state, action) => {
            state.mark = action.payload
        }
    }
});

export const {changeMark} = markdownSlice.actions;

export default markdownSlice.reducer;