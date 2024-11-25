import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Image from "next/image";

const Offcanvas = ({ show, children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [display, setDisplay] = useState("none");

  useEffect(
    function () {
      if (show) document.body.style.overflow = "hidden";
      if (!show) document.body.style.overflow = "auto";
    },
    [show]
  );

  useEffect(
    function () {
      const identifier = setTimeout(function () {
        if (!show) setDisplay("none");
      }, 300);

      if (show) setDisplay("block");

      return () => clearTimeout(identifier);
    },
    [show]
  );

  useEffect(function () {
    if (typeof document !== "undefined") setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;

  return createPortal(
    <section
      id="offcanvas-overlay"
      className="offcanvas fixed w-screen h-[100svh] top-0 left-0"
      style={{ display }}
    >
      <motion.section
        initial={{ translateX: "-100%" }}
        animate={{ translateX: show ? "0%" : "-100%" }}
        transition={{ ease: "easeOut", duration: 0.15, delay: 0.15 }}
        className="w-full h-full bg-white dark:bg-black shadow-xl p-4"
      >
        {children}
      </motion.section>
    </section>,
    document.getElementById("offcanvas-backdrop")
  );
};

const OffcanvasHeader = ({ className, handleCloseOffcanvas, children }) => {
  const themeState = useSelector((state) => state.theme);
  const [currentTheme, setCurrentTheme] = useState(null);

  const { theme } = themeState;

  useEffect(
    function () {
      setCurrentTheme(theme);
    },
    [theme]
  );

  return (
    <section className="offcanvas-header flex items-center justify-between">
      <section>
        <Image
          src={"/brand.png"}
          width={4055}
          height={1052}
          className="w-28 mx-auto"
          alt="Codegral Brand"
          priority
        />
      </section>
      <section>
        <Image
          src={
            currentTheme === "dark"
              ? "/icons/ui/times_light.png"
              : "/icons/ui/times_dark.png"
          }
          width={96}
          height={96}
          className="w-6 active:opacity-50"
          onClick={handleCloseOffcanvas}
          alt="Close Icon"
        />
      </section>
    </section>
  );
};

const OffcanvasBody = ({ className, children }) => {};

const OffcanvasFooter = ({ className, children }) => {};

Offcanvas.Header = OffcanvasHeader;
Offcanvas.Body = OffcanvasBody;
Offcanvas.Footer = OffcanvasFooter;

export default Offcanvas;
