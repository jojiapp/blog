import styles from "./portfolio-item.module.scss";
import * as React from "react";

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
