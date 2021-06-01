import Modal from "../UI/Modal";
import Button from "../UI/Button";
import Card from "../UI/Card/Card";
import styles from "../Login/LoginForm.module.css";

const RegisterForm = (props) => {
  return (
    <Modal onClose={props.onHideRegister}>
      <Card className={styles.login}>
        <form>
          <div className={styles.control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" />
          </div>
          <div className={styles.control}>
            <label htmlFor="userName">Name</label>
            <input type="text" />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input type="password" />
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
