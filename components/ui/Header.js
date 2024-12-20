import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import SearchInput from "./inputs/SearchInput";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { themeSliceActions } from "@/store/theme/theme.slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Offcanvas from "./Offcanvas";

const Header = () => {
  const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [currentTheme, setCurrentTheme] = useState(null);
  const [offcanvas, setOffcanvas] = useState(false);

  const { theme } = themeState;

  const handleOpenOffcanvas = () => setOffcanvas(true);
  const handleCloseOffcanvas = () => setOffcanvas(false);

  const handleSwitchTheme = () =>
    dispatch(
      themeSliceActions.switchTheme(currentTheme == "dark" ? "light" : "dark")
    );

  useEffect(
    function () {
      setCurrentTheme(theme);
    },
    [theme]
  );

  return (
    <>
      <header className="bg-white dark:bg-black py-4 shadow-sm dark:shadow-darker lg:shadow-none">
        <Container className={"grid grid-cols-12 items-center"}>
          {/* Only Mobile */}
          <section className="col-span-1 flex items-center justify-end lg:hidden">
            <Image
              src={
                currentTheme === "dark"
                  ? "/icons/ui/menu_light.png"
                  : "/icons/ui/menu_dark.png"
              }
              // src={"/icons/ui/menu.png"}
              width={96}
              height={96}
              className="w-10 active:opacity-50"
              onClick={handleOpenOffcanvas}
              alt="Menu Icon"
            />
          </section>

          {/* Both */}
          <section className="col-span-10  lg:col-span-3">
            <Link href={"/"}>
              <Image
                src={"/brand.png"}
                width={4055}
                height={1052}
                className="w-28 mx-auto lg:mx-0"
                alt="Codegral Brand"
                priority
              />
            </Link>
          </section>

          {/* Only Desktop */}
          <section className="col-span-6 hidden lg:block">
            <SearchInput />
          </section>

          {/* Only Desktop */}
          <section className="col-span-3 lg:flex items-center justify-end gap-3 hidden">
            <section>
              <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
                <Image
                  src={
                    currentTheme === "dark"
                      ? "/icons/themes/theme_light.png"
                      : "/icons/themes/theme_dark.png"
                  }
                  width={96}
                  height={96}
                  className="w-full h-full object-cover hover:bg-light hover:dark:bg-dark rounded cursor-pointer transition-all p-2"
                  alt="Theme Icon"
                  onClick={handleSwitchTheme}
                />
              </div>
            </section>
            <section>
              <Button type={"button"} variant={"primary"}>
                Login
              </Button>
            </section>
          </section>

          {/* Only Mobile */}
          <section className="col-span-1 lg:hidden">
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              className="active:opacity-50 transition-all"
            />
          </section>
        </Container>
      </header>
      <Offcanvas show={offcanvas}>
        <Offcanvas.Header
          handleCloseOffcanvas={handleCloseOffcanvas}
        ></Offcanvas.Header>
      </Offcanvas>
    </>
  );
};

export default Header;
