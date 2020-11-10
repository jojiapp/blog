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

// TODO: posts 어떻게 할지 생각
// TODO: Home에 nav 달지 말지 고민
