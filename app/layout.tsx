import UiProvider from "@/providers/uiProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainNavbar from "@/components/mainNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imagy",
  description: "Ai image correction app using Next JS",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UiProvider>
          <nav>
            <MainNavbar />
          </nav>
          <section>{children}</section>
          <footer></footer>
        </UiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
