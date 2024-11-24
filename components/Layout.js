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
        <title>Codegral | Software Content & Development Platform</title>
      </Head>
      <section className="">
        <Header />
        <Navbar />
      </section>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
