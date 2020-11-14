import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Post from "../../services/post";
import Top from "../../components/mixins/top";
import MyHead from "../../components/mixins/my-head/my-head";
import CustomMarkdown from "../../components/my-markdown/custom-markdown";
import MyMarkdown from "../../components/my-markdown";
import DirSection from "../../components/dir-section";

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
      <MyHead seoTitle={`${headTitle} 정리`} title={headTitle} />
      <Top title={headTitle} />
      <MyMarkdown
        customMarkdown={customMarkdown}
        mdFile={mdFile}
        backPath={backPath.join("/")}
      />
    </>
  ) : (
    <>
      <MyHead seoTitle={`${currentFolder} 폴더`} title={currentFolder} />
      <Top
        title={currentFolder.toUpperCase()}
        description={`${currentFolder} 정리 폴더`}
      />
      <DirSection
        title={`${currentFolder}내의 파일`}
        fileList={fileList}
        backPath={backPath.join("/")}
        backTitle={backTitle}
      />
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
