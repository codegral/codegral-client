import Head from "next/head";
import Header from "./ui/Header";
import Navbar from "./ui/Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const themeState = useSelector((state) => state.theme);
  const { theme } = themeState;

  useEffect(
    function () {
      if (typeof window !== "undefined") localStorage.setItem("theme", theme);

      const [html, body] = [
        document.querySelector("html"),
        document.querySelector("body"),
      ];

      if (theme === "dark") {
        html.classList.add("dark");
        body.className = "bg-black text-white transition-all";
      }

      if (theme === "light") {
        html.classList.remove("dark");
        body.className = "bg-white text-dark transition-all";
      }
    },
    [theme]
  );

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Codegral | Software Development & Content Platform"
        />
        <title>Codegral | Software Development & Content Platform</title>
      </Head>
      <Header />
      <Navbar />
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
