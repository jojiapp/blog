import styles from "./top.module.scss";

const Top = () => (
  <section className={styles.container}>
    <h2 className={styles.hide}>최상단</h2>
    <div className={styles.back} />
    <div className={styles.front}></div>
  </section>
);

export default Top;
