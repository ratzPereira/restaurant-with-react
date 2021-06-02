import styles from "../UI/Button.module.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <Link className={styles.button} to="/about">
        About
      </Link>
    </div>
  );
};

export default About;
