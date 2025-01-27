"use client";

function Main({ children }: { children: React.ReactNode }) {
  return <main className="flex-1 overflow-auto scrollbar-hidden">{children}</main>;
}

export default Main;
