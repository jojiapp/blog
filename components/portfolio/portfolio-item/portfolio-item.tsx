import * as React from "react";
import styles from "./portfolio-item.module.scss";

interface IProps {
  title: string;

  onClick(e: React.MouseEvent<HTMLElement>): void;
}

const PortfolioItem = ({ title, onClick }: IProps) => (
  <li className={styles.portfolioItem}>
    <button onClick={onClick}>{title}</button>
  </li>
);

export default PortfolioItem;
