import styles from "./LoginForm.module.css";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import Card from "../UI/Card/Card";

const LoginForm = (props) => {
  return (
    <Modal onClose={props.onHideLogin}>
      <Card className={styles.login}>
        <form>
          <div className={styles.control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input type="password" />
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
