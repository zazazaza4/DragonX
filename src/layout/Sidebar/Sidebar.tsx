import { SidebarProps } from "./Sidebar.props";

import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import {
  Authenticator,
  Button,
  Flex,
  Heading,
  View,
} from "@aws-amplify/ui-react";

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  return (
    <View className={className}>
      <Flex
        position="sticky"
        top="0"
        left="0"
        backgroundColor="blue.40"
        padding="20px"
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        height="100vh"
      >
        <Heading level={3} className={styles.icon}>
          DragonSpaceX
        </Heading>
        <nav className={styles.menu}>
          <ul>
            <li className={styles.item}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
              <Link to="/me">Profile</Link>
            </li>
          </ul>
        </nav>

        <Authenticator>
          {({ signOut }) => <Button onClick={signOut}>Sign out</Button>}
        </Authenticator>
      </Flex>
    </View>
  );
};
