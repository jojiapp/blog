import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons/faEyeSlash";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faJava,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./programming-item.module.scss";
import { useCallback } from "react";

interface IProps {
  lang: string;
}

const ProgrammingItem = ({ lang }: IProps) => {
  const getIcon = useCallback((lang): Array<IconProp | string> => {
    switch (lang) {
      case "HTML":
        return [faHtml5, "#f6ad55"];
      case "CSS":
        return [faCss3Alt, "#4299e1"];
      case "Javascript":
        return [faJsSquare, "#f6e05e"];
      case "React":
        return [faReact, "#90cdf4"];
      case "Java":
        return [faJava, "#805ad5"];
      case "Python":
        return [faPython, "#f6e05e"];
      default:
        return [faEyeSlash, "#1a1a1a"];
    }
  }, []);

  const [icon, iconColor] = getIcon(lang);

  return (
    <li className={styles.container}>
      <FontAwesomeIcon
        icon={icon as IconProp}
        className={styles.icon}
        style={{ color: iconColor as string }}
      />

      <span className={styles.lang}>{lang}</span>
    </li>
  );
};

export default ProgrammingItem;
