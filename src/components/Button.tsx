import { useState } from "react";

const Button = ({ setToggleAddTask, toggleAddTask }: any) => {
  return (
    <>
      <button
        onClick={() => setToggleAddTask((prevToggle: any) => !prevToggle)}
        className={`rounded-md text-lg text-white px-4 py-2 ${
          toggleAddTask ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {toggleAddTask ? "Close" : "Add"}
      </button>
    </>
  );
};

export default Button;
