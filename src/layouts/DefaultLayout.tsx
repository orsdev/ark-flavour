import { Navbar } from "@/components/navbar";
import { FC, ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);
