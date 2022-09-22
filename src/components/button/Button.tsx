import { FC } from "react";
import { IButtonProps } from "./Button.props";

import styles from "./Button.module.css";

const Button: FC<IButtonProps> = ({
  children = "Send",
  type = "button",
  appearance = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[appearance]} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
