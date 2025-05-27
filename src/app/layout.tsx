import type React from "react";
import type { Metadata } from "next/types";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resonator Dashboard",
  description: "Game guide and dashboard for Resonator",
  icons: {
    icon: "/artboard.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[#0d0d0d] text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen justify-center">
          <Sidebar>
            <main className="flex-1 transition-all duration-300 ease-in-out flex flex-col items-center">
              <div className="max-w-[1100px] w-full">
                <div className="max-[601px]:ml-0 p-4 max-[1230px]:pr-17 max-[1230px]:pl-17 max-[421px]:pr-2 max-[421px]:pl-2 max-[421px]:box-border mt-[52px] max-[301px]:w-full">
                  {children}
                </div>
              </div>
              <Footer />
            </main>
          </Sidebar>
        </div>
      </body>
    </html>
  );
}
