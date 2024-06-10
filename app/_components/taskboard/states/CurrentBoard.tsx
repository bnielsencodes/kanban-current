import EmptyBoard from "./EmptyBoard";

export default function CurrentBoard({
  darkMode,
  currentBoardData,
  setShowEditBoardModal,
  setShowViewTaskModal,
}: {
  darkMode: boolean;
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
  setShowEditBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowViewTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      {currentBoardData.columns.length > 0 ? (
      ) : (
        <EmptyBoard {...{ setShowEditBoardModal }} />
      )}
    </>
  );
}
