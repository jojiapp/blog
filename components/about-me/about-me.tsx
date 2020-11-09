import styles from "./about-me.module.scss";

const AboutMe = () => (
  <section className={styles.container}>
    <div className={styles.front}>
      <div className={styles.left}>
        <h2>About Me</h2>
        <p>가나다라마바사아자차카</p>
      </div>
      <div className={styles.right}>
        <p>여기도 일단 뭔가 들어갈거</p>
      </div>
    </div>
  </section>
);

export default AboutMe;
