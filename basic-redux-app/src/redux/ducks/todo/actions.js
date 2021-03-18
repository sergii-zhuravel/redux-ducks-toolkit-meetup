import types from "./types";

// Action creators
const getTodos = () => ({
  type: types.TODOS_REQUEST,
});

const addTodo = (todo) => ({
  type: types.TODOS_ADD_TODO,
  payload: todo,
});

const deleteTodo = (todoId) => ({
  type: types.TODOS_DELETE_TODO,
  payload: todoId,
});

const updateTodo = (todo) => ({
  type: types.TODOS_UPDATE_TODO,
  payload: todo,
});

export default {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
};
