import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { Auth } from "aws-amplify";
import { PasswordField, Button } from "@aws-amplify/ui-react";

const ChangePassword: FC = () => {
  const nav = useNavigate();
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChanging, setIsChanging] = useState(false);

  async function handleChangeClick(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsChanging(true);

    console.log("adad");
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      console.log(currentUser);
      await Auth.changePassword(currentUser, oldPassword, password);

      nav("/");
      setPassword("");
      setOldPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log(error);

      setIsChanging(false);
    }
  }
  return (
    <div>
      <form onSubmit={handleChangeClick}>
        <PasswordField
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setOldPassword(() => e.target.value)
          }
          value={oldPassword}
          label="Current password"
          name="current_password"
          autoComplete="current-password"
        />
        <PasswordField
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(() => e.target.value)
          }
          value={password}
          label="New password"
          name="new_password"
          autoComplete="new-password"
        />
        <PasswordField
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(() => e.target.value)
          }
          value={confirmPassword}
          label="Confirm password"
          name="confirm_password"
          autoComplete="new-password"
        />
        <Button marginTop="20px" isLoading={isChanging} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
