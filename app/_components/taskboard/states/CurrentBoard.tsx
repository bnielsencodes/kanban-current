import data from "../../../data";
import Column from "../Column";
import NewColumnButton from "../NewColumnButton";
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
        <div className="flex h-full w-full items-start justify-start gap-x-4 overflow-y-scroll p-4 md:gap-x-6 md:p-6">
          <div className="flex items-start justify-start gap-x-4 md:gap-x-6">
            {currentBoardData.columns.map((column) => {
              return (
                <Column
                  key={column.id}
                  {...{ column, darkMode, setShowViewTaskModal }}
                />
              );
            })}
          </div>

          <NewColumnButton {...{ darkMode, setShowEditBoardModal }} />
        </div>
      ) : (
        <EmptyBoard {...{ setShowEditBoardModal }} />
      )}
    </>
  );
}
