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

const Header = () => {
  const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [currentTheme, setCurrentTheme] = useState(null);

  const { theme } = themeState;

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
    <header className="bg-white dark:bg-black py-4 mb-2">
      <Container className={"grid grid-cols-12 items-center"}>
        <section className="col-span-1 flex items-center justify-end lg:hidden">
          <Image
            src={
              currentTheme === "dark"
                ? "/icons/menu_light.png"
                : "/icons/menu_dark.png"
            }
            width={96}
            height={96}
            className="w-10"
            alt="Menu Icon"
          />
        </section>
        <section className="col-span-10 text-center lg:col-span-3">
          <Link href={"/"}>
            <Image
              src={"/brand.png"}
              width={4055}
              height={1052}
              className="w-28 mx-auto"
              alt="Codegral Brand"
              priority
            />
          </Link>
        </section>
        <section className="col-span-6 hidden lg:block">
          <SearchInput />
        </section>
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
        <section className="col-span-1 lg:hidden">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </section>
      </Container>
    </header>
  );
};

export default Header;
