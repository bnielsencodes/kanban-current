import Logo from "./Logo";
import BoardSelectDropdown from "./BoardSelectDropdown";
import AddTaskButton from "./AddTaskButton";
import EditDeleteBoardButton from "./EditDeleteBoardButton";
import Image from "next/image";
import logoMobile from "/public/assets/logo-mobile.svg";

export default function Header({
  session,
  darkMode,
  handleToggleTheme,
  placeholderData,
  setPlaceholderData,
  currentBoardData,
  setCurrentBoardData,
  showBoardsModal,
  setShowBoardsModal,
  setShowAddBoardModal,
  showEditBoardModal,
  setShowEditBoardModal,
  showDeleteBoardModal,
  setShowDeleteBoardModal,
  setShowAccountModal,
  setShowAddTaskModal,
  showSidebar,
}: {
  session: any;
  darkMode: boolean;
  handleToggleTheme: () => void;
  placeholderData: {
    id: number;
    name: string;
    columns: {
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
    }[];
  }[];
  setPlaceholderData: React.Dispatch<React.SetStateAction<any>>;
  currentBoardData: {
    id: number;
    name: string;
    columns: {
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
    }[];
  };
  setCurrentBoardData: React.Dispatch<React.SetStateAction<any>>;
  showBoardsModal: boolean;
  setShowBoardsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAddBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  showEditBoardModal: boolean;
  setShowEditBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  showDeleteBoardModal: boolean;
  setShowDeleteBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAddTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
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

          <BoardSelectDropdown
            {...{
              session,
              darkMode,
              handleToggleTheme,
              placeholderData,
              setPlaceholderData,
              showBoardsModal,
              setShowBoardsModal,
              setShowAddBoardModal,
              setShowAccountModal,
              currentBoardData,
              setCurrentBoardData,
              showSidebar,
            }}
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
