import { useRouter } from "next/router";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DirItem from "./dir-item";
import styles from "./dir-list.module.scss";
import itemStyles from "./dir-item/dir-item.module.scss";

interface IProps {
  fileList: Array<string[]>;
}

const DirList = ({ fileList }: IProps) => {
  const router = useRouter();
  const backPath = router.asPath.split("/");
  backPath.pop();
  const backTitle = backPath[backPath.length - 1];
  return (
    <ul className={styles.container}>
      <li>
        <Link href={backPath.join("/") ? backPath.join("/") : "/"}>
          <a className={itemStyles.link}>
            <FontAwesomeIcon icon={faFolderOpen} className={itemStyles.icon} />
            <span className={itemStyles.title}>
              {backTitle ? backTitle : "Home"}
            </span>
          </a>
        </Link>
      </li>
      {fileList.map(([filename, title]) => (
        <DirItem key={uuidv4()} filename={filename} title={title} />
      ))}
    </ul>
  );
};
export default DirList;
