export default function EmptyBoard({
  setShowEditBoardModal,
}: {
  setShowEditBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="mx-auto flex h-full w-[343px] flex-col items-center pt-[211px] text-center md:w-[350px] md:pt-[333px] lg:pt-[369px] xl:w-[475px]">
      <p className="text-[18px] font-medium text-grey-medium">
        This board is empty. Create a new column to get started.
      </p>

      <button
        className="mt-[25px] h-12 w-[174px] cursor-pointer rounded-3xl border-0 bg-primary font-bold leading-[19px] text-white transition-colors lg:hover:bg-primary-hover"
        onClick={() => {
          setShowEditBoardModal(true);
        }}
      >
        <p className="text-[15px] font-medium">+ Add New Column</p>
      </button>
    </div>
  );
}
