import styles from "./Carousel.module.css";

function Carousel({ children }) {
  return <div className={styles.itens_content}>{children}</div>;
}

export default Carousel;
