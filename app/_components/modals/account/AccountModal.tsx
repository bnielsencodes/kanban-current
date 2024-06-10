import React, { FC, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import clsx from "clsx";

interface AccountModalProps {
  session: any;
  darkMode: boolean;
  showAccountModal: boolean;
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccountModal: FC<AccountModalProps> = ({
  session,
  darkMode,
  showAccountModal,
  setShowAccountModal,
}) => {
  const supabase = createClient();
  const [loading, setLoading] = useState<boolean>(true);
  const [full_name, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);

  return (
    <div
      className={clsx(
        "absolute left-0 top-16 h-screen w-screen cursor-default select-none",
        showAccountModal ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <div
        className="absolute -top-[83px] bottom-0 left-0 right-0 bg-overlay"
      ></div>

      <div
        className={clsx(
          "absolute left-1/2 top-1/2 mx-auto w-[calc(100%-32px)] max-w-[352px] -translate-x-1/2 -translate-y-1/2 rounded-md p-6 md:max-w-[480px] md:p-8",
          darkMode ? "bg-grey-dark text-white" : "bg-white text-grey-dark",
        )}
      >
      </div>
    </div>
  );
};

export default AccountModal;
