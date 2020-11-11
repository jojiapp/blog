import { GetStaticProps } from "next";
import Post from "../../services/post";

interface IProps {
  fileList: Array<string[]>;
}

const Index = ({ fileList }: IProps) => {
  return <div>posts</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  const post: Post = new Post();
  const fileList = post.getOneDirFile();

  return {
    props: { fileList },
  };
};

export default Index;
