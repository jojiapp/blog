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

// TODO: git ci -m "add folder UI"
// TODO: Markdown 화면 작업
