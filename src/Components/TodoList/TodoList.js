import React from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos?.map((item, i) => {
        return <Todo {...item} key={i} />;
      })}
    </div>
  );
};

export default TodoList;
