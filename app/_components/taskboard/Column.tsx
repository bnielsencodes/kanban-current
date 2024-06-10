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
  return (
    <div className="w-[280px]">
      {/* column title */}
      <p className="flex items-center gap-3 font-sans text-[12px] font-medium uppercase tracking-[2.4px] text-grey-medium">
        {column.name}
        <span className="lowercase text-grey-medium">
          <span className="text-grey-medium">&#x28;</span>
          {column.tasks.length}
          <span className="text-grey-medium">&#x29;</span>
        </span>
      </p>
  );
}
