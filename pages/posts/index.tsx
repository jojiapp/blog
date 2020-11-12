import { GetStaticProps } from "next";
import Post from "../../services/post";
import DirList from "../../components/dir-list";
import Top from "../../components/mixins/top";
import styles from "../../static/styles/pages/posts.module.scss";
import MyHead from "../../components/mixins/my-head";

interface IProps {
  fileList: Array<string[]>;
}

const Index = ({ fileList }: IProps) => {
  return (
    <>
      <MyHead title="정리노트" />
      <Top />
      <section className={styles.container}>
        <div className={styles.front}>
          <h2 className={styles.title}>정리노트</h2>
          <DirList fileList={fileList} />
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const post: Post = new Post();
  const fileList = post.getOneDirFile();

  return {
    props: { fileList },
  };
};

export default Index;
