import Head from "next/head";
import Header from "./ui/Header";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Codegral | Software Content & Development Platform</title>
    </Head>
    <Header />
    <main>{children}</main>
    <footer></footer>
  </>
);

export default Layout;
