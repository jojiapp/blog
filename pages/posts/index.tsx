import { GetStaticProps } from "next";
import Post from "../../services/post";
import Top from "../../components/mixins/top";
import MyHead from "../../components/mixins/my-head/my-head";
import DirSection from "../../components/dir-section";

interface IProps {
  fileList: Array<string[]>;
}

const Index = ({ fileList }: IProps) => (
  <>
    <MyHead seoTitle="개인적인 정리노트" title="정리노트" />
    <Top title="정리노트" description="공부한 것들 정리한 폴더" />
    <DirSection
      title="정리노트"
      fileList={fileList}
      backPath="/"
      backTitle="Home"
    />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const post: Post = new Post();
  const fileList = post.getOneDirFile();

  return {
    props: { fileList },
  };
};

export default Index;
