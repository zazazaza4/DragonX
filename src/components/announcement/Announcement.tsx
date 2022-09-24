import { FC } from "react";
import { Flex, Heading, useTheme } from "@aws-amplify/ui-react";
import { AnnouncementProps } from "./Announcement.props";

import styles from "../../styles/global.module.css";

const Announcement: FC<AnnouncementProps> = ({ children }) => {
  const { tokens } = useTheme();

  return (
    <Flex
      position="relative"
      alignItems="center"
      justifyContent="center"
      height="50vh"
      width="100%"
      className={styles.background__img}
      fontSize={tokens.fontSizes.xxxxl}
      textAlign="center"
      overflow="hidden"
    >
      <Heading
        fontSize="12rem"
        color={tokens.colors.white}
        fontWeight="900"
        level={2}
      >
        {children}
      </Heading>
    </Flex>
  );
};

export default Announcement;
