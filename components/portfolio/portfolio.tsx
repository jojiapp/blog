import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import PortfolioItem from "./portfolio-item";
import styles from "./portfolio.module.scss";

interface IPortfolioList {
  title: string;
  description: string;
  githubUrl: string;
  siteUrl: string;
}

const portfolioList = new Map<string, IPortfolioList>();

portfolioList.set("Blog", {
  title: "Blog",
  description:
    "개인 블로그입니다. Typescript와 React를 공부하며 간단하게 적용시켜 보고 포트폴리오와 공부한 것들을 정리하여 올리기 위해 만들었습니다.",
  githubUrl: "https://github.com/jojiapp/blog",
  siteUrl: "#",
});

portfolioList.set("Sixuniverse", {
  title: "Sixuniverse",
  description:
    "‘sixuniverse’ 프로젝트는 방을 빌리는 손님과 주인 사이를 중개해주고 수수료를 떼어가는 시스템입니다. 따라서 sixuniverse의 이용자는 손님인 ‘게스트’와 주인인 ‘호스트’로 이원화 되어있으며, 각각의 니즈에 맞는 정보와 편의성을 제공하는 것이 목표입니다.",
  githubUrl: "https://github.com/yts8/sixuniverse",
  siteUrl: "https://sixuniverse.herokuapp.com/",
});

portfolioList.set("M", {
  title: "M",
  description: "여기에 M 프로젝트 설명이 들어가겠지",
  githubUrl: "#",
  siteUrl: "#",
});

portfolioList.set("O", {
  title: "O",
  description: "여기에 O의 프로젝트 설명이 들어가겠지",
  githubUrl: "#",
  siteUrl: "#",
});

const Portfolio = () => {
  const [currentPortfolio, setCurrentPortfolio] = useState(
    portfolioList.get("Sixuniverse")
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
              <a
                href={currentPortfolio.siteUrl}
                target="_blank"
                className={styles.site}
              >
                <span>Go to {currentPortfolio.title}</span>
              </a>
              <a
                href={currentPortfolio.githubUrl}
                target="_blank"
                className={styles.github}
              >
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
