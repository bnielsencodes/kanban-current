import Image from "next/image";
import showSidebarIcon from "/public/assets/icon-show-sidebar.svg";
import clsx from "clsx";

export default function ShowSidebarButton({
  handleToggleSidebar,
  showSidebar,
}: {
  handleToggleSidebar: () => void;
  showSidebar: boolean;
}) {
  return (
    <div
      className={clsx(
        "group/btn hidden md:absolute md:bottom-8 md:left-0 md:flex md:h-12 md:w-[56px] md:items-center md:justify-start md:rounded-r-3xl md:bg-primary md:pl-[18px] lg:hover:cursor-pointer lg:hover:bg-primary-hover",
      )}
      onClick={handleToggleSidebar}
    >
      <Image
        src={showSidebarIcon}
        alt="open eye icon"
        width="16"
        height="18"
        sizes="100vw"
      />

      <p
        className={clsx(
          showSidebar
            ? "text-grey-medium lg:group-hover/btn:text-primary"
            : "hidden",
        )}
      >
        Hide Sidebar
      </p>
    </div>
  );
}
