import axios from "axios";
import { Task } from "../models/Task";

const baseUrl = "http://localhost:5000/tasks";

export const getTasks = async () => {
  let tasks: Task[] = [];

  try {
    const response = await axios.get(baseUrl);
    tasks = response.data;
  } catch (error) {
    alert("Could not fetch from the server");
  }

  return tasks;
};

export const updateReminder = async (task: Task) => {
  const url = `${baseUrl}/${task.id}`;

  try {
    await axios.put(
      url,
      { ...task, reminder: !task.reminder },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("updated");
  } catch (err) {
    console.log("Failed", err);
  }
};

export const deleteTaskOnTheServer = async (task: Task) => {
  const url = `${baseUrl}/${task.id}`;

  try {
    await axios.delete(url);
    console.log("deleted");
  } catch (error) {
    console.log("Could not delete: ", error);
  }
};

export const postTask = async (task: Task) => {
  try {
    await axios.post(baseUrl, task, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("Failed to create a task:", error);
  }
};
