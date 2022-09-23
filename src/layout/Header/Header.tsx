import { Link } from "react-router-dom";
import { Authenticator, Text } from "@aws-amplify/ui-react";
import { Flex, Heading, View } from "@aws-amplify/ui-react";
import { HeaderProps } from "./Header.props";

export const Header = ({ className }: HeaderProps): JSX.Element => {
  return (
    <View as="header" padding="10px 20px" className={className}>
      <Flex justifyContent="space-between" width="100%" alignItems="center">
        <Heading level={5} textAlign="center">
          DragonX
        </Heading>

        <Flex alignItems="center">
          <Link to="/">Home</Link>

          <Link to="/me">Profile</Link>

          <Authenticator>
            {({ signOut }) => (
              <View>
                <Text border="none" textAlign="center" onClick={signOut}>
                  Sign out
                </Text>
              </View>
            )}
          </Authenticator>
        </Flex>
      </Flex>
    </View>
  );
};
