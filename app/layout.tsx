import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kanban | Brandon Nielsen",
  description: "Kanban, a task manager",
  authors: [{ name: "Brandon Nielsen" }],
  creator: "Brandon Nielsen",
  publisher: "Brandon Nielsen",
  keywords: [
    "web developer",
    "code",
    "web development",
    "next.js",
    "nextjs",
    "react",
    "javascript",
    "oregon",
    "small businesses",
    "frontend",
    "front-end",
    "software engineer",
    "programmer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body
      >
        {children}
      </body>
    </html>
  );
}
