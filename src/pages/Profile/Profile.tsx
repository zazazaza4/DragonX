import {
  Authenticator,
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  useTheme,
  View,
} from "@aws-amplify/ui-react";
import { FC, useState } from "react";
import { Announcement, ChangePassword } from "../../components";
import { withLayout } from "../../layout/Layout";

const Profile: FC = () => {
  const { tokens } = useTheme();
  const [isChangePassword, setIsChangePassword] = useState(false);

  return (
    <View as="main" data-testid="proflie">
      <Announcement>Profile</Announcement>

      <Heading padding="20px 20px 0 20px" textAlign="center" level={2}>
        Setting
      </Heading>

      <Flex marginTop="10px" marginBottom="40px" justifyContent="center">
        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
          padding="20px"
        >
          {isChangePassword ? (
            <ChangePassword />
          ) : (
            <Authenticator>
              {({ signOut, user }) => {
                return (
                  <>
                    <TextField
                      value={user?.attributes?.email}
                      placeholder="Email"
                      label="Email"
                      errorMessage="There is an error"
                    />

                    <Text fontSize="1rem" color="#304050">
                      Email Verified:{" "}
                      <Text
                        color={
                          user?.attributes?.email_verified
                            ? tokens.colors.green[60]
                            : tokens.colors.red[100]
                        }
                        fontSize="1.5rem"
                        as="span"
                      >
                        {user?.attributes?.email_verified ? "✓" : "✖️"}
                      </Text>
                    </Text>
                  </>
                );
              }}
            </Authenticator>
          )}
          <Button onClick={() => setIsChangePassword(() => !isChangePassword)}>
            {isChangePassword ? "Back to Setting" : "Change password"}
          </Button>
        </Flex>
      </Flex>
    </View>
  );
};
export default withLayout(Profile);
