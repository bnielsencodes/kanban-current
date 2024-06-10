import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import logoLight from "../../../public/assets/logo-light.svg";
import logoDark from "../../../public/assets/logo-dark.svg";

export default function Auth({ darkMode }: { darkMode: boolean }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (event: any) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert(error.message);
    } else {
      alert("Check your email for the login link!");
    }
    setLoading(false);
  };

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
