import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../store/todoSlice";

function TodoItems() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((todo) => {
        return (
          <div
            className="w-full h-12 flex justify-around items-center border p-1 mb-2"
            key={todo.id}
          >
            <h1 className="w-3/4 font text-lg text-white">{todo.title}</h1>
            <Link to={`updatetodo/${todo.id}`} className="text-lg text-white">
              U
            </Link>
            <button
              className="text-lg text-white"
              onClick={() => {
                dispatch(deleteTodo(todo.id));
              }}
            >
              D
            </button>
          </div>
        );
      })}
    </>
  );
}

export default TodoItems;
