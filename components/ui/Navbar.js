import Link from "next/link";

const Navbar = () => (
  <nav className="bg-light dark:bg-dark">
    <ul
      id="navbar-ul"
      className="flex items-center snap-mandatory snap-x overflow-x-scroll"
    >
      <li className="snap-center">
        <Link
          href={"/"}
          className="text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-2"
        >
          Software
        </Link>
      </li>
      <li className="snap-center">
        <Link
          href={"/"}
          className="text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-2"
        >
          Tech
        </Link>
      </li>
      <li className="snap-center">
        <Link
          href={"/"}
          className="text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-2"
        >
          Development
        </Link>
      </li>
      <li className="snap-center">
        <Link
          href={"/"}
          className="text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-2"
        >
          Programming Languages
        </Link>
      </li>
      <li className="snap-center">
        <Link
          href={"/"}
          className="text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-2"
        >
          Frameworks & Libraries
        </Link>
      </li>
      <li className="snap-center">
        <Link
          href={"/"}
          className="text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-2"
        >
          Operating Systems
        </Link>
      </li>
      <li className="snap-center">
        <Link
          href={"/"}
          className="text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-2"
        >
          Artificial Intelligence
        </Link>
      </li>
      <li className="snap-center">
        <Link
          href={"/"}
          className="text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-2"
        >
          Database
        </Link>
      </li>
      <li className="snap-center">
        <Link
          href={"/"}
          className="text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-2"
        >
          Cyber Security
        </Link>
      </li>
      <li className="snap-center">
        <Link
          href={"/"}
          className="text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-2"
        >
          Mobile
        </Link>
      </li>
      <li className="snap-center">
        <Link
          href={"/"}
          className="text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-2"
        >
          Design
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
