import React, { useState } from "react";

const AddTask = ({ onCreateTask }: { onCreateTask: (task: any) => void }) => {
  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskDay, setNewTaskDay] = useState("");
  const [newTaskReminder, setnewTaskReminder] = useState(false);

  const generateUniqueId = () => {
    const date = Date.now();
    const rand = Math.floor(Math.random() * 100000);
    return `${date}.${rand}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTaskDay || !newTaskText) {
      alert("Please fill all the fields");
      return;
    }

    const newTask = {
      id: generateUniqueId(),
      text: newTaskText,
      day: newTaskDay,
      reminder: newTaskReminder,
    };

    setnewTaskReminder(false);
    setNewTaskDay("");
    setNewTaskText("");

    onCreateTask(newTask);
  };

  return (
    <div className=" mt-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-md font-semibold mb-2" htmlFor="text">
            Task
          </label>
          <input
            className="p-2 border "
            type="text"
            id="text"
            placeholder="Enter text here"
            name="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-md font-semibold mb-2" htmlFor="">
            Day
          </label>
          <input
            className="p-2 border "
            type="day"
            id="day"
            placeholder="Enter day here"
            name="day"
            value={newTaskDay}
            onChange={(e) => setNewTaskDay(e.target.value)}
          />
        </div>
        <div className="flex gap-4 items-baseline ">
          <label className="text-md font-semibold my-2" htmlFor="reminder">
            Set Reminder:{" "}
          </label>
          <input
            className="h-full"
            type="checkbox"
            id="reminder"
            name="reminder"
            checked={newTaskReminder}
            onChange={(e) => setnewTaskReminder(e.target.checked)}
          />
        </div>
        <input
          type="submit"
          value={"Save Task"}
          className="cursor-pointer block w-full bg-black text-white rounded-sm font-semibold p-2"
        />
      </form>
    </div>
  );
};

export default AddTask;
