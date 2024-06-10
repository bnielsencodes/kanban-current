"use client";
import React, { FC, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import Auth from "./_components/login/Auth";
import Header from "./_components/header/Header";
import ViewTaskModal from "./_components/modals/view-task/ViewTaskModal";

interface Session {
  user: {
    id: string;
  };
}

const App: FC = () => {
  const supabase = createClient();
  const [session, setSession] = useState<Session | null>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showBoardsModal, setShowBoardsModal] = useState(false);
  const [showAddBoardModal, setShowAddBoardModal] = useState(false);
  const [showEditBoardModal, setShowEditBoardModal] = useState(false);
  const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showViewTaskModal, setShowViewTaskModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);

  // get supabase session
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }: any) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event: any, session: Session | null) => {
      setSession(session);
    });
  }, []);


  // toggle dark mode
  const handleToggleTheme = () => setDarkMode((prevMode) => !prevMode);

  // toggle sidebar
  const handleToggleSidebar = () => setShowSidebar((prevMode) => !prevMode);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={clsx(
          "flex h-screen w-screen items-center justify-center",
          darkMode ? "bg-background-dark" : "bg-background-light",
        )}
      >
        {/* loader */}
        <span className="loader relative h-12 w-12 overflow-hidden rounded-full bg-primary shadow-[0_5px_12px_rgba(0,0,0,.15),inset_0_0_30px_4px_rgba(0,0,0,.15)] before:absolute before:top-[-40%] before:h-full before:w-full before:animate-wave before:rounded-[30%] before:bg-grey-medium before:content-[''] after:absolute after:top-[-40%] after:h-full after:w-full after:animate-wave after:rounded-[45%] after:bg-lines-light after:content-[''] lg:h-16 lg:w-16"></span>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "h-screen w-screen",
        darkMode ? "bg-background-dark" : "bg-background-light",
      )}
    >
      {!session ? (
        <Auth {...{ darkMode }} />
      ) : (
        <>
          <Header
            {...{
              session,
              darkMode,
              handleToggleTheme,
              placeholderData,
              setPlaceholderData,
              currentBoardData,
              setCurrentBoardData,
              showBoardsModal,
              setShowBoardsModal,
              setShowAddBoardModal,
              showEditBoardModal,
              setShowEditBoardModal,
              showDeleteBoardModal,
              setShowDeleteBoardModal,
              setShowAccountModal,
              setShowAddTaskModal,
              showSidebar,
              handleSaveBoard,
              handleRemoveBoard,
            }}
          />

          <main
            className={`main h-full w-full md:flex md:items-start md:justify-center ${
              darkMode ? "bg-background-dark" : "bg-background-light"
            }`}
          >
          </main>
        </>
      )}
    </div>
  );
};

export default App;
