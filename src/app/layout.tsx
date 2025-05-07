import type React from "react";
import type { Metadata } from "next/types";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resonator Dashboard",
  description: "Game guide and dashboard for Resonator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[#002147] text-white antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen justify-center">
            <div className="max-[600px]:hidden">
              <Sidebar />
            </div>
            <main className="flex-1 ml-16 p-4 transition-all duration-300 ease-in-out max-w-[1388px] max-[600px]:ml-0">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
