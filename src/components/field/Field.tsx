import { FC } from "react";
import { IFieldProps } from "./Field.props";

import styles from "./Field.module.css";

const Field: FC<IFieldProps> = ({
  type,
  label = "",
  value,
  className,
  ...props
}) => {
  return (
    <div className={`${styles.txt_field} ${className}`} {...props}>
      <input type={type} required value={value} />
      <span></span>
      <label>{label}</label>
    </div>
  );
};

export default Field;
