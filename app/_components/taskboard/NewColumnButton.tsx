import clsx from "clsx";

export default function NewColumnButton({
  darkMode,
  setShowEditBoardModal,
}: {
  darkMode: boolean;
  setShowEditBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="h-full min-w-[280px] pt-10">
      <div
        className={clsx(
          "flex h-full w-full items-center justify-center rounded-md bg-gradient-to-b from-0% to-100%",
          darkMode
            ? "from-[rgba(43,44,55,0.25)] to-[rgba(43,44,55,0.125)]"
            : "from-[rgba(233,239,250,1)] to-[rgba(233,239,250,0.75)]",
        )}
      >
        <p
          className="text-[24px] font-medium text-grey-medium text-opacity-100 lg:hover:cursor-pointer lg:hover:text-primary"
          onClick={() => {
            setShowEditBoardModal(true);
          }}
        >
          + New Column
        </p>
      </div>
    </div>
  );
}
