import React, { FC } from "react";
import clsx from "clsx";

const BoardsModal = ({
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
}) => {
  return (
    <div
      className={clsx(
        "absolute left-[-56px] top-16 h-screen w-screen cursor-default select-none",
        showBoardsModal ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <div
        className="absolute -top-[85px] bottom-0 left-0 right-0 bg-overlay"
      ></div>

      <div
        className={clsx(
          "boards-modal relative mx-auto flex w-[264px] select-none flex-col rounded-lg py-4 pt-[17px] shadow-boardsModal",
          darkMode ? "bg-grey-dark" : "bg-white",
          showBoardsModal
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2/4 opacity-0",
        )}
      >
      </div>
    </div>
  );
};

export default BoardsModal;
