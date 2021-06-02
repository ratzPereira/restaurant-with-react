import Button from "../UI/Button";

const Login = (props) => {
  console.log(props.isLoggedIn);
  return (
    <div>
      {!props.isLoggedIn && <Button onClick={props.onClick}>Login</Button>}
    </div>
  );
};

export default Login;
