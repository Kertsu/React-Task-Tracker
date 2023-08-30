import AddTask from "./AddTask";
import TaskItem from "./TaskItem";
const Tasks = ({
  toggleAddTask,
  createTask,
  tasks,
  toggleReminder,
  deleteTask,
}: any) => {
  return (
    <>
      {toggleAddTask && <AddTask onCreateTask={createTask} />}

      <div
        className={`absolute overflow-auto w-[calc(100%-4rem)] mt-4 ${
          toggleAddTask ? "h-1/2" : "h-[80%] "
        }`}
      >
        {tasks.map((task: any) => (
          <TaskItem
            task={task}
            key={task}
            onToggleReminder={toggleReminder}
            onDeleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
};

export default Tasks;
