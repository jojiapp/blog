import { AppProps } from "next/app";
import "../static/styles/_reset.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default App;
