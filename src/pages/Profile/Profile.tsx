import {
  Authenticator,
  Flex,
  Text,
  useTheme,
  View,
} from "@aws-amplify/ui-react";
import { FC } from "react";
import { Announcement } from "../../components";
import { withLayout } from "../../layout/Layout";

const Profile: FC = () => {
  const { tokens } = useTheme();

  return (
    <main className="main">
      <div className="container">
        <Announcement>Profile</Announcement>

        <Flex justifyContent="center">
          <Authenticator>
            {({ signOut, user }) => {
              console.log(user);
              return (
                <View>
                  <Text fontSize="1.5rem">
                    Email:{" "}
                    <Text color={tokens.colors.blue[60]} as="span">
                      {user?.attributes?.email}
                    </Text>
                  </Text>
                  <Text fontSize="1.5rem">
                    Email Verified:{" "}
                    <Text color={tokens.colors.blue[60]} as="span">
                      {user?.attributes?.email_verified ? "Yes" : "No"}
                    </Text>
                  </Text>
                </View>
              );
            }}
          </Authenticator>
        </Flex>
      </div>
    </main>
  );
};
export default withLayout(Profile);
