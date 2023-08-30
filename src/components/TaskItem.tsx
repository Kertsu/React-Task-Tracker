import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Task } from "../models/Task";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
interface taskItemProps {
  task: Task;
  onToggleReminder: (id: number) => void;
  onDeleteTask: (task: Task) => void;
}
const TaskItem = ({ task, onToggleReminder, onDeleteTask }: taskItemProps) => {
  const { id, text, day, reminder } = task;
  return (
    <>
      <div
        onDoubleClick={() => onToggleReminder(id)}
        className={`p-2 bg-gray-200 mb-1 cursor-pointer hover:bg-gray-300 ${
          reminder ? "border-l-4 border-green-800" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-black text-xl">{text}</h1>
          <FontAwesomeIcon
            icon={faTimes}
            className="text-red-600 cursor-pointer"
            onClick={() => onDeleteTask(task)}
          />
        </div>
        <div>
          <p className="text-gray-500">{day}</p>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
