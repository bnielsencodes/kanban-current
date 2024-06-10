import Image from "next/image";
import iconChevronUp from "/public/assets/icon-chevron-up.svg";
import iconChevronDown from "/public/assets/icon-chevron-down.svg";

export default function BoardSelectDropdown({
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
  showBoardsModal: boolean;
  setShowBoardsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAddBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
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
  showSidebar: boolean;
}) {
  return (
    <div className="group relative flex cursor-pointer items-center md:hidden">
      <input
        className="hidden appearance-none focus-visible:outline-none"
        id="board-select-btn"
        onChange={handleChange}
        type="checkbox"
        name="board-select"
      />
      <label
        className={clsx(
          "flex select-none items-center gap-4 pr-[19px] font-sans text-[18px] font-medium leading-[23px] group-hover:cursor-pointer",
          darkMode ? "text-white" : "text-black",
        )}
        htmlFor="board-select-btn"
      >
        {currentBoardData.name}
      </label>

      {!showBoardsModal ? (
        <Image
          className="pointer-events-none absolute right-0 top-[7px]"
          src={iconChevronDown}
          alt="chevron down icon"
          width="0"
          height="0"
          sizes="100vw"
        />
      ) : (
        <Image
          className="pointer-events-none absolute right-0 top-[7px]"
          src={iconChevronUp}
          alt="chevron up icon"
          width="0"
          height="0"
          sizes="100vw"
        />
      )}
    </div>
  );
}
