import Button from "../UI/Button";

const Register = (props) => {
  return (
    <div>
      {" "}
      {!props.isLoggedIn && <Button onClick={props.onClick}>Register</Button>}
    </div>
  );
};

export default Register;
