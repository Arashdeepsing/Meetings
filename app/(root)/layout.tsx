import { ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamClientProvider";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="bg-gray-light min-h-screen">
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
