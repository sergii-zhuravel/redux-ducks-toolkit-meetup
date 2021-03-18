import { todosStateMock } from "./mock";

// Actions or action types
const TODOS_REQUEST = "todos/request";
const TODOS_REQUEST_SUCCESS = "todos/request/success";
const TODOS_ADD_TODO = "todos/add/todo";
const TODOS_UPDATE_TODO = "todos/update/todo";
const TODOS_DELETE_TODO = "todos/delete/todo";

// Action creators
export const getTodos = () => ({
  type: TODOS_REQUEST,
});

export const addTodo = (todo) => ({
  type: TODOS_ADD_TODO,
  payload: todo,
});

export const deleteTodo = (todoId) => ({
  type: TODOS_DELETE_TODO,
  payload: todoId,
});

export const updateTodo = (todo) => ({
  type: TODOS_UPDATE_TODO,
  payload: todo,
});

// reducer
const reducer = (state = todosStateMock, action) => {
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

export default reducer;
