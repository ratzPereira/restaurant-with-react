import { plates } from "../../assets/Data";
import MenuItem from "./MenuItem";
import Card from "../UI/Card/Card";
import styles from "./SectionMenu.module.css";
import Modal from "../UI/Modal";

const plateList = plates.map((item) => (
  <MenuItem
    key={`${item.Name}${item.Price}`}
    name={item.Name}
    imageUrl={item.img}
    day={item.Day}
    price={item.Price}
    type={item.Type}
  />
));

const SectionMenu = (props) => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{plateList}</ul>
      </Card>
    </section>
  );
};

export default SectionMenu;
