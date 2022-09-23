import { FC } from "react";
import { FieldProps } from "./Field.props";

import styles from "./Field.module.css";

const Field: FC<FieldProps> = ({
  type,
  label = "",
  value,
  className,
  ...props
}) => {
  return (
    <div className={`${styles.txt_field} ${className}`}>
      <input type={type} required value={value} {...props} />
      <span></span>
      <label>{label}</label>
    </div>
  );
};

export default Field;
