import { Link } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import { Flex, Heading, View, Link as UILink } from "@aws-amplify/ui-react";
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
        <Heading color="white" level={5} textAlign="center">
          DragonX
        </Heading>

        <Flex alignItems="center">
          <Link to="/">
            <UILink className={styles.link} color="white">
              Home
            </UILink>
          </Link>

          <Link to="/me">
            <UILink color="white">Profile</UILink>
          </Link>

          <Authenticator>
            {({ signOut }) => (
              <UILink onClick={signOut} color="white">
                Sign out
              </UILink>
            )}
          </Authenticator>
        </Flex>
      </Flex>
    </View>
  );
};
