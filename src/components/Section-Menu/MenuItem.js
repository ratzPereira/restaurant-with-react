import styles from "./MenuItem.module.css";
import Modal from "../UI/Modal";

const MenuItem = (props) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${props.imageUrl})`,
          }}
        />
        <div className={styles.description}>Available on {props.day}</div>
        <div className={styles.price}>For just {props.price}$</div>
      </div>
    </li>
  );
};
export default MenuItem;
