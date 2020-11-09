import CustomHead from "../components/mixins/custom-head";
import Top from "../components/mixins/top";
import AboutMe from "../components/about-me";
import Portfolio from "../components/portfolio";

const Home = () => (
  <>
    <CustomHead title="Home" />
    <Top />
    <AboutMe />
    <Portfolio />
  </>
);

export default Home;

// TODO: about me 작업
// TODO: 포트폴리오는 위치만 잡아놓기
// TODO: posts 구상
