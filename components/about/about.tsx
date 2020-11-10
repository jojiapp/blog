import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./about.module.scss";
import ProgrammingItem from "./programming-item";
import { useCallback, useState } from "react";

const programmingList: Map<string, Array<any>> = new Map<
  string,
  Array<string>
>();

programmingList.set("front-end", [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "NextJS",
]);
programmingList.set("back-end", ["Java", "Python"]);

const About = () => {
  const [currentContentTitle, setCurrentContentTitle] = useState("Back-end");
  const [currentProgrammingList, setCurrentProgrammingList] = useState(
    programmingList.get("back-end")
  );

  const onClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const { innerText } = e.target as HTMLElement;
    setCurrentContentTitle(innerText);
    const currentList = programmingList.get(innerText.toLowerCase());
    setCurrentProgrammingList(currentList);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.front}>
        <div className={styles.info}>
          <h2 className={styles.title}>About</h2>
          <p className={styles.description}>
            일단 여기에 나를 소개하긴 할건데. 그게 아직은 아니야
          </p>
        </div>
        <div className={styles.programming}>
          <ul className={styles.menuList}>
            <li>
              <button onClick={onClick}>Front-end</button>
            </li>
            <li>
              <button onClick={onClick}>Back-end</button>
            </li>
          </ul>
          <h3 className={styles.title}>{currentContentTitle}</h3>
          <ul className={styles.programmingList}>
            {currentProgrammingList.map((lang) => (
              <ProgrammingItem key={uuidv4()} lang={lang} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
