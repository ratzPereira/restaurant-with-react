import Header from "./components/layout/Header";
import SectionAbout from "./components/Section-About/SectionAbout";
import { useState } from "react";
import LoginForm from "./components/Login/LoginForm";
import RegisterForm from "./components/Registration/RegisterForm";
import SectionMenu from "./components/Section-Menu/SectionMenu";
import { Route } from "react-router-dom";

function App() {
  const [loginIsShown, setLoginIsShown] = useState(false);
  const [registerIsShown, setRegisterIsShown] = useState(false);
  const [registeredUsers, setRegisterUser] = useState([
    { email: "dummy@data.com", name: "joao", password: "a123" },
  ]);

  localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  const usersInStorage = localStorage.getItem("registeredUsers");

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };

  const showLoginHandler = () => {
    setLoginIsShown(true);
  };

  const showRegisterFormHandler = () => {
    setRegisterIsShown(true);
  };

  const hideRegisterFormHandler = () => {
    setRegisterIsShown(false);
  };

  const registerHandler = (email, name, password) => {
    setRegisterUser((prevRegisteredUsers) => {
      return [
        ...prevRegisteredUsers,
        { email: email, name: name, password: password },
      ];
    });
  };

  return (
    <>
      <Header
        onShowLoggin={showLoginHandler}
        onShowRegister={showRegisterFormHandler}
      />
      {loginIsShown && <LoginForm onHideLogin={hideLoginHandler} />}
      {registerIsShown && (
        <RegisterForm
          onHideRegister={hideRegisterFormHandler}
          onRegister={registerHandler}
        />
      )}
      <main>
        <Route exact path="/about" component={SectionAbout} />
        <Route exact path="/menu" component={SectionMenu} />
      </main>
    </>
  );
}

export default App;
