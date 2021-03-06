import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import styles from "./dir-item.module.scss";

interface IProps {
  filename: string;
  title: string;
}

const DirItem = ({ filename, title }: IProps) => {
  const router = useRouter();
  const [name, ext] = filename.split(".");
  return (
    <li>
      <Link href={`${router.asPath}/${name}`}>
        <a className={styles.link}>
          <FontAwesomeIcon
            icon={ext ? faMarkdown : faFolder}
            className={styles.icon}
          />
          <span className={styles.title}>
            {ext ? title : `${title.charAt(0).toUpperCase()}${title.slice(1)}`}
          </span>
        </a>
      </Link>
    </li>
  );
};

export default DirItem;
