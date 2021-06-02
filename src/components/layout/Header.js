import React from "react";
import styles from "./Header.module.css";
import backgroundImage from "../../assets/meals.jpg";
import About from "./About";
import Menu from "./Menu";
import Login from "../Login/Login";
import Register from "../Registration/Register";
import Panel from "../UI/panel/Panel";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>My Restaurant</h1>
        <Menu />
        <About />
        <Register
          onClick={props.onShowRegister}
          isLoggedIn={props.isLoggedIn}
          onLogout={props.onLogout}
        />
        <Login
          onClick={props.onShowLoggin}
          isLoggedIn={props.isLoggedIn}
          onLogout={props.onLogout}
        />
        <Panel isLoggedIn={props.isLoggedIn} onLogout={props.onLogout} />
      </header>
      <div className={styles["main-image"]}>
        <img src={backgroundImage} alt="image" />
      </div>
    </>
  );
};

export default Header;
