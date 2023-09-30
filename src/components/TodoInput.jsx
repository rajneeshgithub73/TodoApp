import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { useState } from "react";

function TodoInput() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <div className="w-full h-full">
      <form
        className="w-full flex flex-col justify-center items-cente"
        onSubmit={formHandler}
      >
        <input
          type="text"
          placeholder="Type Todo"
          className="w-full text-left p-2 border-x border-y border-b-stone-900 "
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button
          type="submit"
          className="my-5 w-full p-3 text-2xl text-white border-white border"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
