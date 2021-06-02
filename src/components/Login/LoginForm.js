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
    console.log(typeof users);
    const userFound = users.map(
      (user) => user.password === enteredPassword && user.email === enteredEmail
    );
    console.log(userFound);
    if (userFound) {
      setValidCredentials(true);
      props.onHideLogin();
    }
  };

  return (
    <Modal onClose={props.onHideLogin}>
      <Card className={styles.login}>
        <form onSubmit={submitLoginHandler}>
          <div className={styles.control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" onChange={emailHandler} />
          </div>
          <div className={styles.control}>
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
