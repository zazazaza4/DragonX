import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Field } from "../../components";

import styles from "./Login.module.css";

const Login: FC = () => {
  return (
    <main className={styles.login}>
      <div className={styles.center}>
        <h1>Login</h1>
        <form method={styles.post}>
          <Field type="text" label="Username" />
          <Field type="password" label="Password" />
          <div className={styles.pass}>Forgot Password?</div>
          <Button className={styles.btn} type="submit">
            Login
          </Button>
          <div className={styles.signup_link}>
            Not a member? <Link to="/register">Signup</Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
