export default function NoBoards({
  setShowAddBoardModal,
}: {
  setShowAddBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="lg:pt-[369px mx-auto flex h-full w-[343px] flex-col items-center pt-[211px] text-center md:w-[350px] md:pt-[333px] xl:w-[475px]">
      <p className="text-[18px] font-medium text-grey-medium">
        There are no boards. Create a new board to get started.
      </p>
      <button
        className="mt-[25px] h-12 w-[174px] cursor-pointer rounded-3xl border-0 bg-primary font-bold leading-[19px] text-white transition-colors lg:hover:bg-primary-hover"
        onClick={() => {
          setShowAddBoardModal(true);
        }}
      >
        <p className="text-[15px] font-medium">+ Add New Board</p>
      </button>
    </div>
  );
}
