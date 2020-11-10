import styles from "./portfolio.module.scss";

const Portfolio = () => (
  <section className={styles.container}>
    <div className={styles.front}>
      <div className={styles.info}>
        <h2 className={styles.infoTitle}>Portfolio</h2>
        <p className={styles.description}>
          포트폴리오 리스트들. 클릭 시 좌측에 설명 등장
        </p>
      </div>
      <div className={styles.content}>
        <p>설명 및 Github 주소 넣을 곳</p>
      </div>
    </div>
  </section>
);

export default Portfolio;
