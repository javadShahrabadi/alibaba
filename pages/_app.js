import "../styles/globals.css";
import "antd/dist/antd.css";
import { NavContextProvider } from "store/nav-select-context";

function MyApp({ Component, pageProps }) {
  return (
    <NavContextProvider>
      <Component {...pageProps} />
    </NavContextProvider>
  );
}

export default MyApp;
