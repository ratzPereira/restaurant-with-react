import Modal from "../UI/Modal";
import Button from "../UI/Button";
import Card from "../UI/Card/Card";
import styles from "../Login/LoginForm.module.css";
import { useState } from "react";

const RegisterForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();

  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState();

  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const validateNameHandler = () => {
    setNameIsValid(enteredName.trim().length > 1);
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitRegisterHandler = (event) => {
    event.preventDefault();
    console.log("WQ");
    if (nameIsValid && passwordIsValid && emailIsValid) {
      props.onRegister(enteredEmail, enteredName, enteredPassword);
      props.onHideRegister();
      console.log("WQ");
    }
  };

  return (
    <Modal onClose={props.onHideRegister}>
      <Card className={styles.login}>
        <form onSubmit={submitRegisterHandler}>
          <div
            className={`${styles.control} ${
              emailIsValid === false ? styles.invalid : ""
            }`}
          >
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              onChange={emailHandler}
              value={enteredEmail}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${styles.control} ${
              nameIsValid === false ? styles.invalid : ""
            }`}
          >
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              onChange={nameHandler}
              value={enteredName}
              onBlur={validateNameHandler}
            />
          </div>
          <div
            className={`${styles.control} ${
              passwordIsValid === false ? styles.invalid : ""
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={passwordHandler}
              value={enteredPassword}
              onBlur={validatePasswordHandler}
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
