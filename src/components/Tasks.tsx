import { Task } from "../models/Task";
import {
  getTasks,
  updateReminder,
  deleteTaskOnTheServer,
  postTask,
} from "../web/webRequest";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";
import { useState, useEffect } from "react";
const Tasks = ({ toggleAddTask }: any) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTasks = await getTasks();

      // const fetchTasksFromLS = await localStorage.getItem("tasks");

      // if (fetchTasksFromLS) {
      //   setTasks(JSON.parse(fetchTasksFromLS));
      // }
      setTasks(fetchedTasks);
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
        await updateReminder(toggledTask);
      } catch (error) {
        console.log("Failed to update reminder on the server: ", error);
      }
    }
  };

  const deleteTask = async (task: Task) => {
    const updatedTasks = tasks.filter((t) => {
      return t.id !== task.id;
    });
    setTasks(updatedTasks);

    const deletedTask = tasks.find((t) => t.id == task.id);

    if (deletedTask) {
      try {
        await deleteTaskOnTheServer(deletedTask);
      } catch (error) {
        console.log("Failed to delete task from the server:", error);
      }
    }
  };

  const createTask = async (newTask: Task) => {
    try {
      await postTask(newTask);

      const fetchTasks = await getTasks();
      setTasks(fetchTasks);
    } catch (error) {
      alert("Failed to create task on the server");
    }
  };

  return (
    <>
      {toggleAddTask && <AddTask onCreateTask={createTask} />}

      <div
        className={`absolute overflow-auto w-[calc(100%-4rem)] mt-4 ${
          toggleAddTask ? "h-1/2" : "h-[80%] "
        }`}
      >
        {tasks.map((task) => (
          <TaskItem
            task={task}
            key={task.id}
            onToggleReminder={toggleReminder}
            onDeleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
};

export default Tasks;
