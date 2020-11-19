import MyHead from "../components/mixins/my-head/my-head";
import Top from "../components/mixins/top";
import About from "../components/about";
import Portfolio from "../components/portfolio";

const Home = () => (
  <>
    <MyHead seoTitle="웹 프로그래머 준비생의 개인블로그" title="Home" />
    <Top
      title="Simple is Best"
      description="신이 있는지 없는지는 알 수 없지만, 신이 없다고 믿는 사람에게 신이 없는 것은 확실하다."
    />
    <About />
    <Portfolio />
  </>
);

export default Home;
