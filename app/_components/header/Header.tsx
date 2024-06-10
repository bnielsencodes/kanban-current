import Logo from "./Logo";
import AddTaskButton from "./AddTaskButton";
import EditDeleteBoardButton from "./EditDeleteBoardButton";
import Image from "next/image";
import logoMobile from "/public/assets/logo-mobile.svg";

export default function Header({
  darkMode,
  showSidebar,
}: {
  darkMode: boolean;
  showSidebar: boolean;
}) {
  return (
    <header
      className={clsx(
        "relative flex h-16 items-center justify-between pl-4 md:h-[81px] md:pl-0 lg:h-[96px]",
        darkMode
          ? "bg-grey-dark md:border-lines-dark"
          : "bg-white md:border-lines-light",
        showSidebar ? "border-b-0" : "md:border-b-[1px]",
      )}
    >
      <Logo {...{ darkMode, showSidebar }} />

      <div
        className={clsx(
          "flex w-full items-center justify-between md:h-full md:pl-6 md:pr-1 lg:pb-2 lg:pr-3",
          darkMode
            ? "bg-grey-dark md:border-lines-dark"
            : "bg-white md:border-lines-light",
          showSidebar ? "md:border-b-[1px]" : "md:border-b-0",
        )}
      >
        <div className="flex items-center md:hidden">
          {/* mobile logo */}
          <Image
            className="mr-4 h-[25px] w-6"
            src={logoMobile}
            alt="Kanban site logo"
            width="0"
            height="0"
            sizes="100vw"
          />

        </div>
        {/* tablet/desktop board title */}
        <p
          className={clsx(
            "hidden items-center font-sans font-semibold tracking-wide group-hover:cursor-pointer md:block md:text-[20px] lg:text-[24px]",
            darkMode ? "text-white" : "text-black",
          )}
        >
          {currentBoardData.name}
        </p>

        <div className="flex items-center">
          <AddTaskButton {...{ setShowAddTaskModal, numOfColumns }} />
          <EditDeleteBoardButton {...{ setShowEditDeleteBoardModal }} />
        </div>
      </div>
    </header>
  );
}
