import { GetStaticPaths, GetStaticProps } from "next";
import Post from "../../services/post";
import DirList from "../../components/dir-list";
import Top from "../../components/mixins/top";
import postsStyles from "../../static/styles/pages/posts.module.scss";
import { useRouter } from "next/router";
import MyHead from "../../components/mixins/my-head";

interface IProps {
  mdFile: string;
  headTitle: string;
  fileList: Array<string[]>;
}

const Posts = ({ mdFile, headTitle, fileList }: IProps) => {
  const router = useRouter();
  const currentFolder = router.asPath.split("/").pop();
  return mdFile ? (
    <>
      <div>{headTitle}</div>
    </>
  ) : (
    <>
      <MyHead title={currentFolder} />
      <Top />
      <section className={postsStyles.container}>
        <div className={postsStyles.front}>
          <h2 className={postsStyles.title}>{currentFolder.toUpperCase()}</h2>
          <DirList fileList={fileList} />
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params: { fp } }) => {
  const post: Post = new Post();
  let mdFile: string = "";
  let headTitle = "";
  let fileList: Array<string[]> = [];
  try {
    mdFile = post.getOneMdFile(fp as string[]);
    headTitle = post.getHeadTitle(fp as string[]);
  } catch {
    fileList = post.getOneDirFile(fp as string[]);
  }
  return {
    props: {
      mdFile,
      headTitle,
      fileList,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const post: Post = new Post();
  const paths = [];

  post.getAllFp().forEach((fp) => paths.push({ params: { fp } }));
  return {
    paths,
    fallback: false,
  };
};
export default Posts;
