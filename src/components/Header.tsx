import Button from "./Button";

const Header = ({ setToggleAddTask, toggleAddTask, tasks }: any) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-3xl">Task Tracker</h1>
      <Button
        tasks={tasks}
        toggleAddTask={toggleAddTask}
        setToggleAddTask={setToggleAddTask}
      />
    </div>
  );
};

export default Header;
