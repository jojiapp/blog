import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import Post from "../../services/post";
import DirList from "../../components/dir-list";
import Top from "../../components/mixins/top";
import { useRouter } from "next/router";
import MyHead from "../../components/mixins/my-head";
import CustomMarkdown from "../../components/custom-markdown";
import folderStyles from "../../static/styles/pages/folder.module.scss";
import markdownStyles from "../../components/custom-markdown/custom-markdown.module.scss";

interface IProps {
  mdFile: string;
  headTitle: string;
  fileList: Array<string[]>;
}

const Posts = ({ mdFile, headTitle, fileList }: IProps) => {
  const customMarkdown: CustomMarkdown = new CustomMarkdown();
  const router = useRouter();
  const backPath = router.asPath.split("/");
  const currentFolder = backPath.pop();
  const backTitle = backPath[backPath.length - 1];
  return mdFile ? (
    <>
      <MyHead title={headTitle} />
      <Top />
      <ReactMarkdown
        plugins={[gfm]}
        renderers={customMarkdown.style()}
        className={markdownStyles.container}
        children={mdFile}
      />
    </>
  ) : (
    <>
      <MyHead title={currentFolder} />
      <Top />
      <section className={folderStyles.container}>
        <div className={folderStyles.front}>
          <h2 className={folderStyles.title}>{currentFolder.toUpperCase()}</h2>
          <DirList
            fileList={fileList}
            backPath={backPath.join("/")}
            backTitle={backTitle}
          />
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
