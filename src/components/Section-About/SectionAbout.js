import styles from "./SectionAbout.module.css";

const SectionAbout = () => {
  return (
    <section className={styles.summary}>
      <h1>About us</h1>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default SectionAbout;
