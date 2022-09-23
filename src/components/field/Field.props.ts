import { ReactNode } from "react";

export interface FieldProps {
  value?: string;
  label?: ReactNode;
  type?: "text" | "password" | "email";
  className?: string;
}
