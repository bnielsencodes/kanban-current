import Image from "next/image";
import iconChevronUp from "/public/assets/icon-chevron-up.svg";
import iconChevronDown from "/public/assets/icon-chevron-down.svg";

export default function BoardSelectDropdown({
}: {
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
