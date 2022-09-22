import { ReactNode } from "react";

export interface ITitleProps {
  tag: "h1" | "h2" | "h3";
  className?: string;
  children: ReactNode;
}
