import Head from "next/head";
import Navbar from "./ui/Navbar";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Codegral</title>
    </Head>
    <Navbar />
    <main>{children}</main>
    <footer></footer>
  </>
);

export default Layout;
