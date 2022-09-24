import { SidebarProps } from "./Sidebar.props";
import { Link } from "react-router-dom";
import {
  Authenticator,
  Flex,
  View,
  Link as UILink,
  Divider,
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
          <UILink fontSize="3.8rem" color="white">
            DragonX
          </UILink>
        </Link>

        <Divider />

        <Link to="/">
          <UILink fontSize="1.2rem" className={styles.link} color="white">
            Home
          </UILink>
        </Link>

        <Link to="/me">
          <UILink fontSize="1.2rem" className={styles.link} color="white">
            Profile
          </UILink>
        </Link>

        <Authenticator>
          {({ signOut }) => (
            <UILink
              marginTop="40px"
              fontSize="1.8rem"
              className={styles.link}
              color="white"
              onClick={signOut}
            >
              Sign out
            </UILink>
          )}
        </Authenticator>
      </Flex>
    </View>
  );
};
