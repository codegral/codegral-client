import Link from "next/link";

const Navbar = () => (
  <nav className="bg-white dark:bg-black hidden lg:block">
    <ul
      id="navbar-ul"
      className="flex items-center justify-center gap-3 snap-mandatory snap-x overflow-x-scroll"
    >
      <li className="snap-center text-center">
        <Link
          href={"/"}
          className="block text-xs xl:text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-3 xl:px-1"
        >
          Software
        </Link>
      </li>
      <li className="snap-center text-center">
        <Link
          href={"/"}
          className="block text-xs xl:text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-3 xl:px-1"
        >
          Tech
        </Link>
      </li>
      <li className="snap-center text-center">
        <Link
          href={"/"}
          className="block text-xs xl:text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-3 xl:px-1"
        >
          Development
        </Link>
      </li>
      <li className="snap-center text-center">
        <Link
          href={"/"}
          className="block text-xs xl:text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-3 xl:px-1"
        >
          Programming Languages
        </Link>
      </li>
      <li className="snap-center text-center">
        <Link
          href={"/"}
          className="block text-xs xl:text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-3 xl:px-1"
        >
          Frameworks & Libraries
        </Link>
      </li>
      <li className="snap-center text-center">
        <Link
          href={"/"}
          className="block text-xs xl:text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-3 xl:px-1"
        >
          Operating Systems
        </Link>
      </li>
      <li className="snap-center text-center">
        <Link
          href={"/"}
          className="block text-xs xl:text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-3 xl:px-1"
        >
          Artificial Intelligence
        </Link>
      </li>
      <li className="snap-center text-center">
        <Link
          href={"/"}
          className="block text-xs xl:text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-3 xl:px-1"
        >
          Database
        </Link>
      </li>
      <li className="snap-center text-center">
        <Link
          href={"/"}
          className="block text-xs xl:text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-3 xl:px-1"
        >
          Cyber Security
        </Link>
      </li>
      <li className="snap-center text-center">
        <Link
          href={"/"}
          className="block text-xs xl:text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-3 xl:px-1"
        >
          Mobile
        </Link>
      </li>
      <li className="snap-center text-center">
        <Link
          href={"/"}
          className="block text-xs xl:text-sm hover:bg-lighter hover:dark:bg-darker transition-all py-3 xl:px-1"
        >
          Design
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
