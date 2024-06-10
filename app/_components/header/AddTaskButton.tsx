import Image from "next/image";
import iconAdd from "/public/assets/icon-add-task-mobile.svg";
import clsx from "clsx";

export default function AddTaskButton({
  numOfColumns,
  setShowAddTaskModal,
}: {
  numOfColumns: number;
  setShowAddTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      {/* mobile */}
      <button
        className={clsx(
          "flex h-8 w-12 items-center justify-center rounded-2xl border-0 bg-primary md:hidden",
          numOfColumns > 0 ? "opacity-100" : "opacity-25",
        )}
        onClick={(e) => {
          setShowAddTaskModal(true);
        }}
        disabled={numOfColumns > 0 ? false : true}
      >
        <Image
          src={iconAdd}
          alt="add task icon"
          width="0"
          height="0"
          sizes="100vw"
        />
      </button>

      {/* tablet/desktop */}
      <button
        className={clsx(
          "hidden h-12 w-[164px] rounded-3xl bg-primary text-[15px] font-medium leading-[15.5px] text-white transition-colors md:block",
          numOfColumns > 0
            ? "opacity-100 lg:hover:bg-primary-hover"
            : "opacity-25",
        )}
        onClick={(e) => {
          setShowAddTaskModal(true);
        }}
        disabled={numOfColumns > 0 ? false : true}
      >
        + Add New Task
      </button>
    </>
  );
}
