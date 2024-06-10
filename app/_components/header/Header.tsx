import Logo from "./Logo";
export default function Header({
  darkMode,
  showSidebar,
}: {
  darkMode: boolean;
  showSidebar: boolean;
}) {
  return (
    <header
      className={clsx(
        "relative flex h-16 items-center justify-between pl-4 md:h-[81px] md:pl-0 lg:h-[96px]",
        darkMode
          ? "bg-grey-dark md:border-lines-dark"
          : "bg-white md:border-lines-light",
        showSidebar ? "border-b-0" : "md:border-b-[1px]",
      )}
    >
      <Logo {...{ darkMode, showSidebar }} />
    </header>
  );
}
