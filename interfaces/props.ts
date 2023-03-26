import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface ActiveLinkProps {
  text: string;
  href: string;
}