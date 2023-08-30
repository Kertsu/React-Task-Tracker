const Button = ({ setToggleAddTask, toggleAddTask, tasks }: any) => {
  return (
    <>
      {!(tasks.length == 0) && (
        <button
          disabled={tasks.length == 0 ? true : false}
          onClick={() => setToggleAddTask((prevToggle: any) => !prevToggle)}
          className={`rounded-md text-lg text-white px-4 py-2 disabled:cursor-not-allowed ${
            toggleAddTask ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {toggleAddTask ? "Close" : "Add"}
        </button>
      )}
    </>
  );
};

export default Button;
