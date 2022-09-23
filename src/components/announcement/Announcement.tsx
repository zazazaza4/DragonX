import { FC } from "react";
import { Flex, useTheme } from "@aws-amplify/ui-react";
import { AnnouncementProps } from "./Announcement.props";

const Announcement: FC<AnnouncementProps> = ({ children }) => {
  const { tokens } = useTheme();

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="12rem"
      backgroundColor={tokens.colors.green[20]}
      borderRadius={tokens.radii.small}
      fontSize={tokens.fontSizes.xxxxl}
      textAlign="center"
    >
      <Flex>{children}</Flex>
    </Flex>
  );
};

export default Announcement;
