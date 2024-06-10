import EllipsisSvg from "./EllipsisSvg";

export default function EditDeleteBoardButton({
  setShowEditDeleteBoardModal,
}: {
  setShowEditDeleteBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      className="group/btn h-10 cursor-pointer pl-4 pr-5 md:ml-2"
      onClick={() => {
        setShowEditDeleteBoardModal(true);
      }}
    >
      <EllipsisSvg />
    </button>
  );
}
