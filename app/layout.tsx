import { ReactNode } from "react";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { orbitron, exo2 } from "./fonts";

interface LaoutProps {
  children: ReactNode;
}
export const metadata = {
  title: { default: "Tirana Gaming", template: "%s | Tirana Gaming" },
};

export default function RootLayout({ children }: LaoutProps) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-slate-500 text-xs ">
          Game data and images courtesy of
          <a
            className="text-orange-800 hover:un"
            href="https://rawg.io/"
            target="_blank"
          >
            &nbsp;RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
