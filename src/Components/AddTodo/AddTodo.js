import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/actions";
import "./AddTodo.css";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="add_todo">
      <div>
        <label>Name</label>
        <input type={"text"} value={task} onChange={handleTask} />
      </div>

      <div>
        <label>Description</label>
        <input type={"text"} value={description} onChange={handleDescription} />
      </div>

      <div>
        <button onClick={() => dispatch(addTodo({ task, description }))}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
