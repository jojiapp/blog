import { AppProps } from "next/app";
import "../static/styles/_reset.scss";
import Header from "../components/mixins/header";
import Footer from "../components/mixins/footer";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
