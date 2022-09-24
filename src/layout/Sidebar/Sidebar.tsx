import { SidebarProps } from "./Sidebar.props";
import { Link } from "react-router-dom";
import {
  Authenticator,
  Flex,
  View,
  Divider,
  Text,
} from "@aws-amplify/ui-react";

import styles from "../../styles/global.module.css";

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  return (
    <View className={className}>
      <Flex
        backgroundColor="neutral.100"
        position="sticky"
        top="0"
        left="0"
        direction="column"
        alignItems="flex-end"
        padding="30px"
        justifyContent="flex-start"
        height="100vh"
      >
        <Link className={styles.link_scale} to="/">
          <Text fontSize="3.8rem" color="white">
            DragonX
          </Text>
        </Link>

        <Divider />

        <Link to="/">
          <Text fontSize="1.2rem" className={styles.link} color="white">
            Home
          </Text>
        </Link>

        <Link to="/me">
          <Text fontSize="1.2rem" className={styles.link} color="white">
            Profile
          </Text>
        </Link>

        <Authenticator>
          {({ signOut }) => (
            <Text
              marginTop="40px"
              fontSize="1.8rem"
              className={styles.link}
              color="white"
              onClick={signOut}
            >
              Sign out
            </Text>
          )}
        </Authenticator>
      </Flex>
    </View>
  );
};
