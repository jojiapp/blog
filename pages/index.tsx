import CustomHead from "../components/mixins/custom-head";
import Top from "../components/mixins/top";
import About from "../components/about";
import Portfolio from "../components/portfolio";

const Home = () => (
  <>
    <CustomHead title="Home" />
    <Top />
    <About />
    <Portfolio />
  </>
);

export default Home;

// TODO: git ci -m "add services post and data setting to posts"

// TODO: 폴더 목록 화면 작업
// TODO: Markdown 화면 작업
