import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meetings",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/meetings-logo.svg",
          },
          variables: {
            colorText: "#FFFFFF",
            colorPrimary: "#4285F4",
            colorBackground: "#000000",
            colorInputBackground: "#333333",
            colorInputText: "#FFFFFF",
          },
        }}
      >
        <body className={`${inter.className} bg-animation text-white`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
