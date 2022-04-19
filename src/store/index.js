import { configureStore } from '@reduxjs/toolkit';
import markdownSlice from './slices/markdownSlice';

export const store = configureStore({
    reducer:{
        markdown: markdownSlice
    }
})