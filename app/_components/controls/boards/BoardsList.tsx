export default function BoardsList({
  darkMode,
  placeholderData,
  currentBoardData,
  setCurrentBoardData,
}: {
  darkMode: boolean;
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
}) {
  return (
    <div>
      <p className="pl-6 text-xs font-semibold uppercase leading-[15px] tracking-[2.4px] text-grey-medium">
        All Boards ({placeholderData.length})
      </p>
    </div>
  );
}
