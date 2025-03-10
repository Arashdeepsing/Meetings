import { Metadata } from "next";
import { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/SideLinks";

export const metadata: Metadata = {
  title: "Meetings",
  description: "A workspace for your team, powered by Stream Chat and Clerk.",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="relative home-page-layout min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <section className="flex flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
