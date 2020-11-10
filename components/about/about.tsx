import styles from "./about-me.module.scss";

const AboutMe = () => (
  <section className={styles.container}>
    <div className={styles.front}>
      <div className={styles.info}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.description}>
          일단 여기에 나를 소개하긴 할건데. 그게 아직은 아니야
        </p>
      </div>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li>
            <button>Front-end</button>
          </li>
          <li>
            <button>Back-end</button>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default AboutMe;
