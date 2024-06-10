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

  useEffect(() => {
    let ignore = false;
    async function getProfile() {
      setLoading(true);
      const { user } = session;

      const { data, error } = await supabase
        .from("profiles")
        .select(`full_name, username, avatar_url`)
        .eq("id", user.id)
        .single();

      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          setFullname(data.full_name);
          setUsername(data.username);
          setAvatarUrl(data.avatar_url);
        }
      }

      setLoading(false);
    }

    getProfile();

    return () => {
      ignore = true;
    };
  }, [session]);

  async function updateProfile(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FormEvent<HTMLFormElement>,
    avatarUrl: string,
  ) {
    event.preventDefault();

    setLoading(true);
    const { user } = session;

    const updates = {
      id: user.id,
      full_name,
      username,
      avatar_url: avatarUrl,
      updated_at: new Date(),
    };

    const { error } = await supabase.from("profiles").upsert(updates);

    if (error) {
      alert(error.message);
    } else {
      setAvatarUrl(avatarUrl);
    }
    setLoading(false);
  }

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