import MyHead from "../components/mixins/my-head";
import Top from "../components/mixins/top";
import About from "../components/about";
import Portfolio from "../components/portfolio";

const Home = () => (
  <>
    <MyHead title="Home" />
    <Top />
    <About />
    <Portfolio />
  </>
);

export default Home;

// TODO: add Custom markdown and markdown UI

// TODO: update Top component
// TODO: markdown 파일 내에서 뒤로가기 및 최상단 가기 버튼 만들기 fixed
