import { AppProps } from "next/app";
import "../static/styles/_reset.scss";
import Header from "../components/mixins/header";
import Footer from "../components/mixins/footer";
import { prefix, PrefixContext } from "../components/context/prefix-context";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <PrefixContext.Provider value={prefix}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </PrefixContext.Provider>
  );
};

export default App;
