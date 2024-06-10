import Image from "next/image";
import logoDark from "/public/assets/logo-dark.svg";
import logoLight from "/public/assets/logo-light.svg";
import clsx from "clsx";

export default function Logo({
  darkMode,
  showSidebar,
}: {
  darkMode: boolean;
  showSidebar: boolean;
}) {
  return (
    <div
      className={clsx(
        "hidden md:flex md:h-full md:items-center md:border-r-[1px]",
        darkMode ? "border-lines-dark" : "border-lines-light",
        showSidebar
          ? "md:min-w-[261px] lg:min-w-[300px]"
          : "md:min-w-[202px] lg:min-w-[211px]",
      )}
    >
      <Image
        className={clsx("md:ml-6 lg:ml-8", darkMode ? "hidden" : "")}
        src={logoDark}
        alt="Kanban site logo"
        width="153"
        height="26"
        sizes="100vw"
      />
      <Image
        className={clsx("md:ml-6 lg:ml-8", darkMode ? "" : "hidden")}
        src={logoLight}
        alt="Kanban site logo"
        width="153"
        height="26"
        sizes="100vw"
      />
    </div>
  );
}
