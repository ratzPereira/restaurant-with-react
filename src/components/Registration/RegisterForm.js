import Modal from "../UI/Modal";
import Button from "../UI/Button";
import Card from "../UI/Card/Card";
import styles from "../Login/LoginForm.module.css";
import { useState } from "react";

const RegisterForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitRegisterHandler = (event) => {
    event.preventDefault();
    props.onRegister(enteredEmail, enteredName, enteredPassword);
  };

  return (
    <Modal onClose={props.onHideRegister}>
      <Card className={styles.login}>
        <form onSubmit={submitRegisterHandler}>
          <div className={styles.control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" onChange={emailHandler} value={enteredEmail} />
          </div>
          <div className={styles.control}>
            <label htmlFor="userName">Name</label>
            <input type="text" onChange={nameHandler} value={enteredName} />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={passwordHandler}
              value={enteredPassword}
            />
          </div>
          <div>
            <Button type="submit">Register</Button>
          </div>
        </form>
      </Card>
    </Modal>
  );
};

export default RegisterForm;
