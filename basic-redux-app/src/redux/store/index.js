import { configureStore } from '@reduxjs/toolkit'
import reducer from "../slices/todo";

export const store = configureStore({
    reducer
});
