import styles from "../UI/Button.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Link className={styles.button} to="/menu">
        Menu
      </Link>
    </div>
  );
};

export default Menu;
