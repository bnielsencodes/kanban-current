import BoardsList from "../controls/boards/BoardsList";
import CreateBoardButton from "../controls/boards/CreateBoardButton";
import clsx from "clsx";

export default function Sidebar({
  session,
  darkMode,
  showSidebar,
  handleToggleTheme,
  handleToggleSidebar,
  placeholderData,
  setPlaceholderData,
  currentBoardData,
  setCurrentBoardData,
  setShowBoardsModal,
  setShowAddBoardModal,
  setShowAccountModal,
}: {
  session: any;
  darkMode: boolean;
  showSidebar: boolean;
  handleToggleTheme: () => void;
  handleToggleSidebar: () => void;
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
  setShowBoardsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAddBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={clsx(
        "hidden h-full flex-col justify-between border-r-[1px] pt-[26px] transition-[margin] duration-300 md:flex md:min-w-[261px] lg:min-w-[300px]",
        darkMode
          ? "border-lines-dark bg-grey-dark"
          : "border-lines-light bg-white",
        showSidebar
          ? "ml-0 opacity-100"
          : "opacity-0 md:ml-[-261px] lg:ml-[-300px]",
      )}
    >
      <div>
        <BoardsList
          {...{
            darkMode,
            placeholderData,
            setPlaceholderData,
            currentBoardData,
            setCurrentBoardData,
          }}
        />
        <CreateBoardButton
          {...{
            setShowBoardsModal,
            setShowAddBoardModal,
          }}
        />
      </div>
    </div>
  );
}
