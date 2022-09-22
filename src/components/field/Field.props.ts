import { ReactNode } from "react";

export interface IFieldProps {
  value?: string;
  label?: ReactNode;
  type?: "text" | "password";
  className?: string;
}
