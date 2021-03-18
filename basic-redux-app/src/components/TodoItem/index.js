import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { todoActions } from "../../redux/ducks/todo";
import { deleteTodo, updateTodo } from "../../redux/slices/todo";

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [udpatedTodo, setUpdatedTodo] = useState(todo);
  const dispatch = useDispatch();

  const onEditClick = () => {
    if (!editable) {
      setEditable(true);
    } else {
      dispatch(updateTodo(udpatedTodo));
      setEditable(false);
    }
  };
  const onDeleteClick = () => {
    dispatch(deleteTodo(todo.id));
  };

  const onInputChange = (e) => {
    const newTodo = { ...todo };
    newTodo.name = e.target.value;
    setUpdatedTodo(newTodo);
  };
  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
        <div className="col">
          {editable ? (
            <input
              type="text"
              placeholder={todo.name}
              onChange={onInputChange}
            />
          ) : (
            todo.name
          )}
        </div>
        <button className="btn btn-primary m-2" onClick={onEditClick}>
          {editable ? "Save" : "Edit"}
        </button>
        <button className="btn btn-danger m-2" onClick={onDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
