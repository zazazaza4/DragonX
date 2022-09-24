import { Link } from "react-router-dom";
import { Authenticator, Text } from "@aws-amplify/ui-react";
import { Flex, View } from "@aws-amplify/ui-react";
import { HeaderProps } from "./Header.props";

import styles from "../../styles/global.module.css";

export const Header = ({ className }: HeaderProps): JSX.Element => {
  return (
    <View
      backgroundColor="neutral.100"
      as="header"
      padding="10px 20px"
      className={className}
    >
      <Flex justifyContent="space-between" width="100%" alignItems="center">
        <Link to="/">
          <Text
            fontWeight="600"
            fontSize="1.5rem"
            className={styles.link_scale}
            color="white"
          >
            DragonX
          </Text>
        </Link>

        <Flex alignItems="center">
          <Link to="/">
            <Text className={styles.link} color="white">
              Home
            </Text>
          </Link>

          <Link to="/me">
            <Text className={styles.link} color="white">
              Profile
            </Text>
          </Link>

          <Authenticator>
            {({ signOut }) => (
              <Text className={styles.link} onClick={signOut} color="white">
                Sign out
              </Text>
            )}
          </Authenticator>
        </Flex>
      </Flex>
    </View>
  );
};
