import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../store/todoSlice";
import { useParams } from "react-router-dom";

function TodoUpdateInput() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [newtitle, setNewTitle] = useState("new title");
    const todos = useSelector(state => state.todos);

    useEffect(() => {
        todos.forEach((todo) => {
            if (todo.id === id) {
                setNewTitle(todo.title);
            }
        });
    }, []);

    const formHandler = (e) => {
        e.preventDefault();
        dispatch(updateTodo({ id, newtitle }));
        navigate("/");
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
                    value={newtitle}
                    onChange={(e) => { setNewTitle(e.target.value) }}
                />
                <button
                    type="submit"
                    className="my-5 w-full p-3 text-2xl text-white border-white border"
                >
                    Update Todo
                </button>
            </form>
        </div>
    );
}

export default TodoUpdateInput;
