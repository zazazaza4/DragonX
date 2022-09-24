import { Authenticator, Flex, Text, useTheme } from "@aws-amplify/ui-react";
import { FC } from "react";
import { Announcement } from "../../components";
import { withLayout } from "../../layout/Layout";

const Profile: FC = () => {
  const { tokens } = useTheme();

  return (
    <main className="main">
      <div className="container">
        <Announcement>Profile</Announcement>

        <Flex marginTop="40px" justifyContent="center">
          <Authenticator>
            {({ signOut, user }) => {
              return (
                <Flex
                  direction="column"
                  border="1px solid black"
                  alignItems="center"
                  justifyContent="center"
                  padding="20px"
                >
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
                </Flex>
              );
            }}
          </Authenticator>
        </Flex>
      </div>
    </main>
  );
};
export default withLayout(Profile);
