import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
function App() {
  const [toggleAddTask, setToggleAddTask] = useState(true);

  return (
    <>
      <div className="md:flex md:justify-center md:items-center md:h-screen md:w-[550px] mx-auto ">
        <div className="container overflow-hidden border rounded-md h-screen md:h-[calc(100vh-4rem)] p-8 my-0 mx-auto relative shadow-gray-400 shadow-lg">
          <Header
            toggleAddTask={toggleAddTask}
            setToggleAddTask={setToggleAddTask}
          />

          <Tasks toggleAddTask={toggleAddTask} />
        </div>
      </div>
    </>
  );
}

export default App;
