import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import SearchInput from "./inputs/SearchInput";
import Button from "./Button";

const Header = () => (
  <header className="py-4 dark:bg-black">
    <Container className={"grid grid-cols-12 items-center"}>
      <section className="col-span-11 lg:col-span-3">
        <Link href={"/"}>
          <Image
            src={"/brand.png"}
            width={4055}
            height={1052}
            className="w-32"
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
              src={"/icons/themes/theme_dark.png"}
              width={96}
              height={96}
              className="w-full h-full object-cover hover:bg-light rounded cursor-pointer transition-all p-1.5"
              alt="Theme Icon"
            />
          </div>
        </section>
        <section>
          <Button type={"button"} variant={"primary"}>
            Login
          </Button>
        </section>
      </section>
      <section className="col-span-1 flex items-center justify-end lg:hidden">
        <Image
          src={"/icons/menu.png"}
          width={96}
          height={96}
          className="w-10"
          alt="Menu Icon"
        />
      </section>
    </Container>
  </header>
);

export default Header;

{
  /* <ul className="flex items-center justify-center gap-4">
<li>
  <Link href={"/"}>Software</Link>
</li>
<li>
  <Link href={"/"}>Tech</Link>
</li>
<li>
  <Link href={"/"}>Development</Link>
</li>
<li>
  <Link href={"/"}>Programming Languages</Link>
</li>
<li>
  <Link href={"/"}>Frameworks & Libraries</Link>
</li>
<li>
  <Link href={"/"}>Operating Systems</Link>
</li>
<li>
  <Link href={"/"}>Artificial Intelligence</Link>
</li>
<li>
  <Link href={"/"}>Database</Link>
</li>
<li>
  <Link href={"/"}>Cyber Security</Link>
</li>
<li>
  <Link href={"/"}>Mobile</Link>
</li>
<li>
  <Link href={"/"}>Design</Link>
</li>
</ul> */
}
