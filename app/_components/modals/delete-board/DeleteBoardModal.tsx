export default function DeleteBoardModal({
  darkMode,
  currentBoardData,
  setShowDeleteBoardModal,
  handleRemoveBoard,
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
  setShowDeleteBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleRemoveBoard: (id: number) => void;
}) {
  return (
    <div className="absolute left-0 top-0 z-10 h-[calc(100vh+64px)] w-screen select-none md:h-[calc(100vh+81px)] lg:h-[calc(100vh+96px)]">
      {/* bg overlay */}
      <div className="absolute left-0 top-0 h-full w-full bg-overlay"></div>

      <div
        className={`absolute left-1/2 top-[calc(50%+64px)] z-20 w-[343px] -translate-x-1/2 -translate-y-1/2 rounded-md p-6 ${
          darkMode ? "bg-grey-dark" : "bg-white"
        } select-none`}
      >
        <p className="mb-[22px] text-lg font-bold leading-[23px] text-warning">
          Delete this board?
        </p>

        <p className="mb-[22px] pr-1 text-[13px] leading-[23px] text-grey-medium">
          Are you sure you want to delete the ‘{currentBoardData.name}’ board?
          This action will remove all columns and tasks and cannot be reversed.
        </p>

        <div className="flex flex-col gap-4">
          <button
            className={`h-[40px] cursor-pointer rounded-[20px] bg-warning text-[13px] font-semibold leading-[13px] text-white lg:hover:bg-warning-hover`}
            onClick={() => handleRemoveBoard(currentBoardData.id)}
          >
            Delete
          </button>

          <button
            className="h-[40px] cursor-pointer rounded-[20px] bg-white text-[13px] font-semibold leading-[13px] text-primary lg:hover:bg-opacity-80"
            onClick={(e) => {
              setShowDeleteBoardModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
