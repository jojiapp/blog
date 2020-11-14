import MyHead from "../components/mixins/my-head/my-head";
import Top from "../components/mixins/top";
import About from "../components/about";
import Portfolio from "../components/portfolio";

const Home = () => (
  <>
    <MyHead seoTitle="웹 프로그래머 준비생의 개인블로그" title="Home" />
    <Top title="Simple is Best" description="일차적으로는 완성" />
    <About />
    <Portfolio />
  </>
);

export default Home;
