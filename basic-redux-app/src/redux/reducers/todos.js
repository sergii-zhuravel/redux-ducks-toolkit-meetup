// import { addTodo, deleteTodo, updateTodo } from "../actions/todos";
import { todosStateMock } from "../store/mock";
import {
  TODOS_ADD_TODO,
  TODOS_DELETE_TODO,
  TODOS_UPDATE_TODO,
} from "../types/todos";

const initialState = todosStateMock;
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_ADD_TODO:
      return [...state, action.payload];
      break;
    case TODOS_UPDATE_TODO:
      const todoIdx = state.findIndex((todo) => todo.id === action.payload.id);
      const newState = [...state];
      newState.splice(todoIdx, 1, action.payload);
      return newState;
      break;
    case TODOS_DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
