import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import { Task } from "./models/Task";
function App() {
  const [toggleAddTask, setToggleAddTask] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTasksFromLS = localStorage.getItem("tasks");

      if (fetchedTasksFromLS) {
        setTasks(JSON.parse(fetchedTasksFromLS));
      }
    };

    fetchData();
  }, []);

  const toggleReminder = async (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );

    setTasks(updatedTasks);

    const toggledTask = tasks.find((task) => task.id == id);

    if (toggledTask) {
      try {
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      } catch (error) {
        console.log("Failed to update reminder on the server: ", error);
      }
    }
  };

  const deleteTask = async (task: Task) => {
    console.log(task);
    const updatedTasks = tasks.filter((t) => {
      return t.id !== task.id;
    });
    setTasks(updatedTasks);

    try {
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } catch (error) {
      console.log("Failed to delete task from the server:", error);
    }
  };

  const createTask = async (newTask: Task) => {
    try {
      const tasksCopy = tasks;

      localStorage.setItem("tasks", JSON.stringify([...tasksCopy, newTask]));

      const fetchedTasksFromLS = localStorage.getItem("tasks");
      if (fetchedTasksFromLS) {
        setTasks(JSON.parse(fetchedTasksFromLS));
      }
    } catch (error) {
      alert("Failed to create task on the server");
    }
  };

  return (
    <>
      <div className="md:flex md:justify-center md:items-center md:h-screen md:w-[550px] mx-auto ">
        <div className="container overflow-hidden border rounded-md h-screen md:h-[calc(100vh-4rem)] p-8 my-0 mx-auto relative shadow-gray-400 shadow-lg">
          <Header
            tasks={tasks}
            toggleAddTask={toggleAddTask}
            setToggleAddTask={setToggleAddTask}
          />

          <Tasks
            toggleAddTask={toggleAddTask}
            createTask={createTask}
            tasks={tasks}
            toggleReminder={toggleReminder}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
