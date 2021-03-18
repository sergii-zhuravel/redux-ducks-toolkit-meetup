import {
  TODOS_REQUEST,
  TODOS_ADD_TODO,
  TODOS_DELETE_TODO,
  TODOS_UPDATE_TODO,
} from "../types/todos";

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
