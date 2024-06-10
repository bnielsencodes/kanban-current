import HideSidebarSvg from "./HideSidebarSvg";
import clsx from "clsx";

export default function HideSidebarButton({
  darkMode,
  handleToggleSidebar,
  showSidebar,
}: {
  darkMode: boolean;
  handleToggleSidebar: () => void;
  showSidebar: boolean;
}) {
  return (
    <div
      className={clsx(
        "group/btn transition-colors md:flex md:h-12 md:w-[248px] md:items-center md:justify-start md:gap-[10px] md:rounded-r-3xl md:pl-8 lg:w-[276px] lg:hover:cursor-pointer",
        darkMode
          ? "md:bg-grey-dark lg:hover:bg-white"
          : "lg:hover:bg-secondary md:bg-white",
      )}
      onClick={handleToggleSidebar}
    >
      <HideSidebarSvg />

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
