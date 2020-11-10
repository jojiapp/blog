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

// TODO: git ci -m "add about content"
// TODO: portfolio content 어떻게 뿌릴지 생각
// TODO: posts 어떻게 할지 생각
