import { createSlice } from "@reduxjs/toolkit";
import { todosStateMock } from "../ducks/todo/mock";

const initialState = todosStateMock;

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      // ✅ This "mutating" code is okay inside of createSlice!
      state.push(action.payload);
    },
    deleteTodo(state, action) {
        debugger;
      const todoIdx = state.findIndex((todo) => todo.id === action.payload);
      state.splice(todoIdx, 1);
    },
    updateTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      todo.name = action.payload.name;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
