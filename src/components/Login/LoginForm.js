import styles from "./LoginForm.module.css";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import Card from "../UI/Card/Card";
import { useState } from "react";

const LoginForm = (props) => {
  const [validCredentials, setValidCredentials] = useState();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitLoginHandler = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("registeredUsers"));

    const userFound = users.find(
      (user) => user.password === enteredPassword && user.email === enteredEmail
    );

    if (userFound) {
      setValidCredentials(true);
      props.isLogged(userFound);
      props.onHideLogin();
      setValidCredentials(true);
    } else {
      setValidCredentials(false);
    }
  };

  return (
    <Modal onClose={props.onHideLogin}>
      <Card className={styles.login}>
        <form onSubmit={submitLoginHandler}>
          <div
            className={`${styles.control} ${
              validCredentials === false ? styles.invalid : ""
            }`}
          >
            <label htmlFor="email">E-mail</label>
            <input type="email" onChange={emailHandler} />
          </div>
          <div
            className={`${styles.control} ${
              validCredentials === false ? styles.invalid : ""
            }`}
          >
            <label htmlFor="password">Password</label>
            <input type="password" onChange={passwordHandler} />
          </div>
          <div>
            <Button type="submit" className={styles.btn}>
              Login
            </Button>
          </div>
        </form>
      </Card>
    </Modal>
  );
};

export default LoginForm;
