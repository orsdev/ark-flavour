import { Navbar } from "@/components/navbar";
import { FC, ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => (
  <div className="relative h-full min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <footer className="w-full bg-yellow-50 h-[60px] flex items-center mt-12 py-2 justify-center flex-col pt-3">
      <img className="w-[30px]" src="/images/logo.png" alt="logo" />
      <h3 className="text-lg text-red-500 cursive mt-1">Ark's Flavour</h3>
    </footer>
  </div>
);
