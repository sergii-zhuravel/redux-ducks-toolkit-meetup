import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todos";
import { v1 as uuid } from "uuid";

function TodoInput() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const onAddClick = () => {
    dispatch(addTodo({ id: uuid(), name }));
    setName("");
  };
  return (
    <div>
      <div className="row m-2">
        <input
          value={name}
          type="text"
          className="col form-control"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary mx-2" onClick={onAddClick}>
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
