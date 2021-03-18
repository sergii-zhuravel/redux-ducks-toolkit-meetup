import types from "./types";
import { todosStateMock } from "./mock";

const initialState = todosStateMock;

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TODOS_ADD_TODO:
      return [...state, action.payload];
    case types.TODOS_UPDATE_TODO:
      const todoIdx = state.findIndex((todo) => todo.id === action.payload.id);
      const newState = [...state];
      newState.splice(todoIdx, 1, action.payload);
      return newState;
    case types.TODOS_DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
