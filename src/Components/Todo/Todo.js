import React from "react";
import "./Todo.css";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../redux/actions/actions";

const Todo = ({ task, description, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-container">
      <div>
        <h4 className="task-name">{task}</h4>
        <p className="task-description">{description}</p>
      </div>
      <div>
        <button
          className="btn btn-complete"
          onClick={() => dispatch(completeTodo(id))}
        >
          Complete
        </button>
        <button
          className="btn btn-delete"
          onClick={() => dispatch(deleteTodo(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
