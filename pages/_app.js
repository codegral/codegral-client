import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Provider } from "react-redux";
import store from "@/store/index.store";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
