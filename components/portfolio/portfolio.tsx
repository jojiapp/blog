import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./portfolio.module.scss";
import { useCallback, useState } from "react";
import PortfolioItem from "./portfolio-item";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface IPortfolioList {
  title: string;
  description: string;
  githubUrl: string;
  siteUrl: string;
}

const portfolioList = new Map<string, IPortfolioList>();

portfolioList.set("Youtube", {
  title: "Youtube",
  description:
    "테스트글자니까 일단 뭐라도 한거처럼 글자를 적어서 길게 만들어 보자",
  githubUrl: "#",
  siteUrl: "#",
});

portfolioList.set("Facebook", {
  title: "facebook",
  description:
    "테스트글자니까 일단 뭐라도 한거처럼 글자를 적어서 길게 만들어 보자",
  githubUrl: "#",
  siteUrl: "#",
});

portfolioList.set("Naver", {
  title: "Naver",
  description:
    "테스트글자니까 일단 뭐라도 한거처럼 글자를 적어서 길게 만들어 보자",
  githubUrl: "#",
  siteUrl: "#",
});

portfolioList.set("Google", {
  title: "Google",
  description:
    "테스트글자니까 일단 뭐라도 한거처럼 글자를 적어서 길게 만들어 보자",
  githubUrl: "#",
  siteUrl: "#",
});

const Portfolio = () => {
  const [currentPortfolio, setCurrentPortfolio] = useState(
    portfolioList.get("Youtube")
  );

  const onClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const { innerText } = e.target as HTMLElement;
    setCurrentPortfolio(portfolioList.get(innerText));
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.front}>
        <div className={styles.portfolioListInfo}>
          <h2 className={styles.title}>Portfolio</h2>
          <ul className={styles.portfolioList}>
            {Array.from(portfolioList.keys()).map((key) => (
              <PortfolioItem key={uuidv4()} title={key} onClick={onClick} />
            ))}
          </ul>
        </div>
        <div className={styles.portfolio}>
          <div className={styles.info}>
            <h3 className={styles.title}>{currentPortfolio.title}</h3>
            <p className={styles.description}>{currentPortfolio.description}</p>
          </div>
          <div className={styles.linkWrap}>
            <div className={styles.linkBox}>
              <a href={currentPortfolio.siteUrl} className={styles.site}>
                <span>Go to {currentPortfolio.title}</span>
              </a>
              <a href={currentPortfolio.githubUrl} className={styles.github}>
                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
