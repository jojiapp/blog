import styles from "./portfolio.module.scss";

const Portfolio = () => (
  <section className={styles.container}>
    <div className={styles.front}>
      <div className={styles.left}>
        <h2>포트폴리오</h2>
        <p>가나다라마바사아자차카</p>
      </div>
      <div className={styles.right}>
        <p>여기도 일단 뭔가 들어갈거</p>
      </div>
    </div>
  </section>
);

export default Portfolio;
