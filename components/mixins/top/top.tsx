import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./top.module.scss";

interface IProps {
  title: string;
  description?: string;
}

const Top = ({ title, description }: IProps) => (
  <section className={styles.container}>
    <h2 className={styles.hide}>최상단</h2>
    <div className={styles.back} />
    <div className={styles.front}>
      <div className={styles.infoContainer}>
        <span className={styles.title}>{title}</span>
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.githubContainer}>
        <div className={styles.githubWrap}>
          <a
            href="https://github.com/jojiapp"
            target="_blank"
            className={styles.githubLink}
          >
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            <span className={styles.text}>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Top;
