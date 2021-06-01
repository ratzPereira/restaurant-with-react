import styles from "./Login.module.css";
import Button from "../UI/Button";

const Login = (props) => {
  return (
    <div>
      <Button onClick={props.onClick}>Login</Button>
    </div>
  );
};

export default Login;
