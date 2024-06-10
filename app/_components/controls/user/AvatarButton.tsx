import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface AccountPage {
  session: any;
  setShowBoardsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AvatarButton: FC<AccountPage> = ({
  setShowBoardsModal,
  setShowAccountModal,
}) => {
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl2] = useState<string | null>(null);

  return (
    <div
      className="group/button lg:hover:bg-secondary flex h-full w-[50px] items-center justify-center gap-6 rounded-r-md transition-colors hover:cursor-pointer"
    >
      {avatarUrl ? (
        <Image
          className="rounded-full transition-opacity group-hover/button:opacity-80"
          src={avatarUrl}
          alt="Avatar"
          width="32"
          height="32"
        />
      ) : (
        <div className="avatar no-image h-[30px] w-[30px] rounded-full" />
      )}
    </div>
  );
};

export default AvatarButton;
