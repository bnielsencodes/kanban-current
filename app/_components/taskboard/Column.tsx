import Task from "./Task";
import clsx from "clsx";

export default function Column({
  column,
  darkMode,
  setShowViewTaskModal,
}: {
  column: {
    id: number;
    name: string;
    tasks: {
      id: number;
      title: string;
      description: string;
      status: string;
      subtasks: {
        id: number;
        title: string;
        isCompleted: boolean;
      }[];
    }[];
  };
  darkMode: boolean;
  setShowViewTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const colorIndex = Math.floor(Math.random() * 10) + 1;
  const dotColor =
    colorIndex >= 1 && colorIndex < 1.9
      ? "bg-columnDot-100"
      : colorIndex >= 1.9 && colorIndex < 2.8
        ? "bg-columnDot-200"
        : colorIndex >= 2.8 && colorIndex < 3.7
          ? "bg-columnDot-300"
          : colorIndex >= 3.7 && colorIndex < 4.6
            ? "bg-columnDot-400"
            : colorIndex >= 4.6 && colorIndex < 5.5
              ? "bg-columnDot-500"
              : colorIndex >= 5.5 && colorIndex < 6.4
                ? "bg-columnDot-600"
                : colorIndex >= 6.4 && colorIndex < 7.3
                  ? "bg-columnDot-700"
                  : colorIndex >= 7.3 && colorIndex < 8.2
                    ? "bg-columnDot-800"
                    : colorIndex >= 8.2 && colorIndex < 9.1
                      ? "bg-columnDot-900"
                      : "bg-columnDot-1000";

  return (
    <div className="w-[280px]">
      {/* column title */}
      <p className="flex items-center gap-3 font-sans text-[12px] font-medium uppercase tracking-[2.4px] text-grey-medium">
        <span className={clsx("h-4 w-4 rounded-full", dotColor)}></span>
        {column.name}
        <span className="lowercase text-grey-medium">
          <span className="text-grey-medium">&#x28;</span>
          {column.tasks.length}
          <span className="text-grey-medium">&#x29;</span>
        </span>
      </p>

      {/* tasklist */}
      {column.tasks.map((task) => {
        return (
          <ul className="flex flex-col gap-y-5 pt-[22px]">
            <Task key={task.id} {...{ task, darkMode, setShowViewTaskModal }} />
          </ul>
        );
      })}
    </div>
  );
}
