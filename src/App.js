import Header from "./components/layout/Header";
import SectionAbout from "./components/Section-About/SectionAbout";
import { useState } from "react";
import LoginForm from "./components/Login/LoginForm";
import RegisterForm from "./components/Registration/RegisterForm";

function App() {
  const [loginIsShown, setLoginIsShown] = useState(true);
  const [registerIsShown, setRegisterIsShown] = useState(false);

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

  return (
    <>
      <Header
        onShowLoggin={showLoginHandler}
        onShowRegister={showRegisterFormHandler}
      />
      {loginIsShown && <LoginForm onHideLogin={hideLoginHandler} />}
      {registerIsShown && (
        <RegisterForm onHideRegister={hideRegisterFormHandler} />
      )}
      <main>
        <SectionAbout />
      </main>
    </>
  );
}

export default App;
