import Image from "next/image";
import Container from "../Container";
import Link from "next/link";

const Navbar = () => (
  <nav className="py-3">
    <Container className={"grid grid-cols-12 items-center"}>
      <section className="col-span-2">
        <Link href={"/"}>
          <Image
            src={"/brand.png"}
            width={4055}
            height={1052}
            className="w-28"
            alt="Codegral Brand"
            priority
          />
        </Link>
      </section>
      <section className="col-span-8">
        <ul className="flex items-center justify-center gap-4">
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
        </ul>
      </section>

      <section className="col-span-2"></section>
    </Container>
  </nav>
);

export default Navbar;
