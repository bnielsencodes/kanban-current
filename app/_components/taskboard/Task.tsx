import clsx from "clsx";

export default function Task({
  task,
  darkMode,
  setShowViewTaskModal,
}: {
  task: {
    id: number;
    title: string;
    description: string;
    status: string;
    subtasks: {
      id: number;
      title: string;
      isCompleted: boolean;
    }[];
  };
  darkMode: boolean;
  setShowViewTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <li
      className={clsx(
        "group/task shadow-taskCard rounded-lg px-4 py-5 lg:hover:cursor-pointer",
        darkMode ? "bg-grey-dark" : "bg-white",
      )}
      onClick={() => {
        setShowViewTaskModal(true);
      }}
    >
      <p
        className={clsx(
          "mb-1 font-sans text-[15px] font-semibold tracking-[0.0125rem] lg:group-hover/task:text-primary",
          darkMode ? "text-white" : "text-black",
        )}
      >
        {task.title}
      </p>

      {/* subtasks completed quantity */}
      <p className="font-sans text-[12px] font-medium tracking-[0.0125rem] text-grey-medium">
        {task.subtasks.filter((item) => item.isCompleted === true).length} of{" "}
        {task.subtasks.length} subtasks
      </p>
    </li>
  );
}
