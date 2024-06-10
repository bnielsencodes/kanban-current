import React, { FC } from "react";
import Image from "next/image";
import iconLight from "/public/assets/icon-light-theme.svg";
import iconDark from "/public/assets/icon-dark-theme.svg";
import ThemeToggle from "./ThemeToggle";
import AvatarButton from "./AvatarButton";
import clsx from "clsx";

interface ProfileControlsProps {
  session: any;
  darkMode: boolean;
  handleToggleTheme: () => void;
  setShowBoardsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
  showSidebar: boolean;
}

const ProfileControls: FC<ProfileControlsProps> = ({
  session,
  darkMode,
  handleToggleTheme,
  setShowBoardsModal,
  setShowAccountModal,
  showSidebar,
}) => {
  return (
    <div
      className={clsx(
        "mx-auto mt-auto flex h-12 w-[235px] items-center justify-center rounded-md lg:w-[251px]",
        darkMode ? "bg-background-dark" : "bg-background-light",
      )}
    >
      <div
        className={clsx(
          "flex h-full w-[calc(100%-50px)] items-center justify-center border-r-2",
          darkMode ? "border-grey-dark" : "border-white",
        )}
      >
        <Image
          src={iconLight}
          alt="sun icon"
          width="19"
          height="19"
          sizes="100vw"
        />
        <ThemeToggle
          {...{
            darkMode,
            handleToggleTheme,
          }}
        />
        <Image
          src={iconDark}
          alt="moon and star icon"
          width="15"
          height="15"
          sizes="100vw"
        />
      </div>
      <AvatarButton {...{ session, setShowBoardsModal, setShowAccountModal }} />
    </div>
  );
};

export default ProfileControls;
