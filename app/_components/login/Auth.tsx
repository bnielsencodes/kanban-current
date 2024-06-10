import Image from "next/image";
import logoLight from "../../../public/assets/logo-light.svg";
import logoDark from "../../../public/assets/logo-dark.svg";

export default function Auth({ darkMode }: { darkMode: boolean }) {
  return (
    <div
      className={clsx(
        "absolute left-1/2 top-1/2 mx-auto w-[calc(100%-32px)] max-w-[352px] -translate-x-1/2 -translate-y-1/2 lg:max-w-[416px]",
        darkMode ? "text-white" : "text-grey-dark",
      )}
    >
      <Image
        src={darkMode ? logoLight : logoDark}
        alt="Kanban site logo"
        width={153}
        height={26}
      />
    </div>
  );
}
