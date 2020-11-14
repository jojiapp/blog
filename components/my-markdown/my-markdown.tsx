import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import CustomMarkdown from "./custom-markdown";
import styles from "./custom-markdown/custom-markdown.module.scss";

interface IProps {
  customMarkdown: CustomMarkdown;
  mdFile: string;
  backPath: string;
}

const MyMarkdown = ({ customMarkdown, mdFile, backPath }: IProps) => (
  <div className={styles.container}>
    <ReactMarkdown
      plugins={[gfm]}
      renderers={customMarkdown.style()}
      className={styles.markdownContainer}
      children={mdFile}
    />
    <Link href={backPath}>
      <a className={styles.backLink}>
        <FontAwesomeIcon icon={faArrowCircleLeft} className={styles.icon} />
      </a>
    </Link>
  </div>
);

export default MyMarkdown;
