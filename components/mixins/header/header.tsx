import Link from "next/link";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "./header.module.scss";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>();
  useEffect(() => {
    const onScroll = () => {
      window.pageYOffset === 0
        ? (headerRef.current.style.backgroundColor = "transparent")
        : (headerRef.current.style.backgroundColor = "#1a1a1a");
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <header ref={headerRef} className={styles.container}>
      <div className={styles.wrap}>
        <Link href="/">
          <a className={styles.logo}>
            <FontAwesomeIcon className={styles.icon} icon={faFeatherAlt} />
            <span>jojiapp</span>
          </a>
        </Link>
        <Link href="#">
          <a className={styles.posts}>정리노트</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
