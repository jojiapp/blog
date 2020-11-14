import styles from "./dir-section.module.scss";
import DirList from "./dir-list";

interface IProps {
  title: string;
  fileList: Array<string[]>;
  backPath: string;
  backTitle: string;
}

const DirSection = ({ title, fileList, backPath, backTitle }: IProps) => (
  <section className={styles.container}>
    <div className={styles.front}>
      <h2 className={styles.hide}>{title}</h2>
      <DirList fileList={fileList} backPath={backPath} backTitle={backTitle} />
    </div>
  </section>
);

export default DirSection;
