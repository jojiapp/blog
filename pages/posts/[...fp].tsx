import { GetStaticPaths, GetStaticProps } from "next";
import Post from "../../services/post";

interface IProps {
  mdFile: string;
  fileList: string[];
}

const Posts = ({ mdFile, fileList }: IProps) => {
  return <div>fp</div>;
};

export const getStaticProps: GetStaticProps = async ({ params: { fp } }) => {
  const post: Post = new Post();
  let mdFile: string = "";
  let fileList: Array<string[]> = [];

  try {
    mdFile = post.getOneMdFile(fp as string[]);
  } catch {
    fileList = post.getOneDirFile(fp as string[]);
  }
  return {
    props: {
      mdFile,
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
