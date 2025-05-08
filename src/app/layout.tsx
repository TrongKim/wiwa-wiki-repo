import type React from "react";
import type { Metadata } from "next/types";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer";
import { ScrollTopIcon } from "@/components/scroll-top-icon";

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

            <main className="flex-1 transition-all duration-300 ease-in-out max-w-[1100px]">
              <div className="max-[1440px]:ml-16 max-[601px]:ml-0 p-4 max-[1230px]:pr-17 max-[1230px]:pl-17 max-[421px]:pr-2 max-[421px]:pl-2 max-[421px]:box-border mt-[52px]">
                {children}
              </div>
              <Footer />
            </main>
          </div>
          <ScrollTopIcon />
        </ThemeProvider>
      </body>
    </html>
  );
}
