import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Field } from "../../components";

import styles from "./Register.module.css";

const Register: FC = () => {
  const onSubmit = () => {};

  return (
    <main className={styles.register}>
      <div className={styles.center}>
        <h1>Register</h1>
        <form method={styles.post}>
          <Field type="text" label="Username" />
          <Field type="text" label="Email" />
          <Field type="password" label="Password" />
          <Field type="password" label="Confirm Password" />
          <Button onClick={onSubmit} className={styles.btn} type="submit">
            Register
          </Button>
          <div className={styles.signup_link}>
            A member? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
