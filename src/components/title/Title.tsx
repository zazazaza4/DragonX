import { FC } from "react";
import { ITitleProps } from "./Title.props";

import styles from "./Title.module.css";

const Title: FC<ITitleProps> = ({
  tag,
  children,
  className = "",
  ...props
}) => {
  const classForTitle = `${styles[tag]} ${className}`;
  switch (tag) {
    case "h1":
      return (
        <h1 className={classForTitle} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={classForTitle} {...props}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={classForTitle} {...props}>
          {children}
        </h3>
      );
    default:
      return <></>;
  }
};

export default Title;
