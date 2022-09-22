import { FooterProps } from "./Footer.props";

import styles from "./Footer.module.css";

export const Footer = ({
  className = "",
  ...props
}: FooterProps): JSX.Element => {
  return (
    <footer className={`${className} ${styles.footer}`} {...props}>
      <div>DragonSpaceX © 2020 - {new Date().getFullYear()}</div>
      <a href="#" target="_blank">
        GitHub
      </a>
      <a href="#" target="_blank">
        Email
      </a>
    </footer>
  );
};
