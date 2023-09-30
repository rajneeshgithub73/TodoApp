import TodoItems from "./components/TodoItems";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-stone-800 flex flex-col justify-start items-center">
        <div className="w-full h-auto flex justify-center items-center">
          <h1 className="font-thin text-7xl p-4 text-white">Todo App</h1>
        </div>
        <div className="w-full h-full bg-slate-700 flex justify-center items-center p-3">
          <div className="h-full w-1/2 border-r p-2">
            <Outlet />
          </div>
          <div className="h-full w-1/2 border-l p-2 flex flex-col justify-start items-center">
            <TodoItems />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
