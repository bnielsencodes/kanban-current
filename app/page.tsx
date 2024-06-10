"use client";
import React, { FC, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import ViewTaskModal from "./_components/modals/view-task/ViewTaskModal";

interface Session {
  user: {
    id: string;
  };
}

const App: FC = () => {
  const supabase = createClient();
  const [session, setSession] = useState<Session | null>(null);

  // get supabase session
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }: any) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event: any, session: Session | null) => {
      setSession(session);
    });
  }, []);



      </div>
  return (
    <div
      className={clsx(
        "h-screen w-screen",
        darkMode ? "bg-background-dark" : "bg-background-light",
      )}
    >

          >
    </div>
  );
};

export default App;
