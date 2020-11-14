import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DirItem from "./dir-item";
import styles from "./dir-list.module.scss";
import itemStyles from "./dir-item/dir-item.module.scss";

interface IProps {
  fileList: Array<string[]>;
  backPath: string;
  backTitle: string;
}

const DirList = ({ fileList, backPath, backTitle }: IProps) => (
  <ul className={styles.container}>
    <li>
      <Link href={backPath}>
        <a className={itemStyles.link}>
          <FontAwesomeIcon icon={faFolderOpen} className={itemStyles.icon} />
          <span className={itemStyles.title}>{backTitle}</span>
        </a>
      </Link>
    </li>
    {fileList.map(([filename, title]) => (
      <DirItem key={uuidv4()} filename={filename} title={title} />
    ))}
  </ul>
);

export default DirList;
