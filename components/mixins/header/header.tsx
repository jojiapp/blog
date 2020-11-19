import Link from "next/link";
import { useContext, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.scss";
import { PrefixContext } from "../../context/prefix-context";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>();
  const prefix = useContext(PrefixContext);
  useEffect(() => {
    const onHeaderScroll = () => {
      window.pageYOffset === 0
        ? (headerRef.current.style.backgroundColor = "transparent")
        : (headerRef.current.style.backgroundColor = "#1a1a1a");
    };
    window.addEventListener("scroll", onHeaderScroll);
    return () => {
      window.removeEventListener("scroll", onHeaderScroll);
    };
  }, []);
  return (
    <header ref={headerRef} className={styles.container}>
      <div className={styles.wrap}>
        <Link href={prefix}>
          <a className={styles.logo}>
            <FontAwesomeIcon icon={faFeatherAlt} className={styles.icon} />
            <span>jojiapp</span>
          </a>
        </Link>
        <Link href={`${prefix}/posts`}>
          <a className={styles.posts}>정리노트</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
