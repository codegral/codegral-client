import Link from "next/link";

const Navbar = () => (
  <nav className="bg-light dark:bg-dark hidden lg:block">
    <ul
      id="navbar-ul"
      className="flex items-center snap-mandatory snap-x overflow-x-scroll"
    >
      <li className="min-w-[224px] snap-center text-center">
        <Link
          href={"/"}
          className="block text-sm hover:bg-lighter hover:dark:bg-darker transition-all p-1 xl:px-0"
        >
          Software
        </Link>
      </li>
      <li className="min-w-[224px] snap-center text-center">
        <Link
          href={"/"}
          className="block text-sm hover:bg-lighter hover:dark:bg-darker transition-all p-1 xl:px-0"
        >
          Tech
        </Link>
      </li>
      <li className="min-w-[224px] snap-center text-center">
        <Link
          href={"/"}
          className="block text-sm hover:bg-lighter hover:dark:bg-darker transition-all p-1 xl:px-0"
        >
          Development
        </Link>
      </li>
      <li className="min-w-[224px] snap-center text-center">
        <Link
          href={"/"}
          className="block text-sm hover:bg-lighter hover:dark:bg-darker transition-all p-1 xl:px-0"
        >
          Programming Languages
        </Link>
      </li>
      <li className="min-w-[224px] snap-center text-center">
        <Link
          href={"/"}
          className="block text-sm hover:bg-lighter hover:dark:bg-darker transition-all p-1 xl:px-0"
        >
          Frameworks & Libraries
        </Link>
      </li>
      <li className="min-w-[224px] snap-center text-center">
        <Link
          href={"/"}
          className="block text-sm hover:bg-lighter hover:dark:bg-darker transition-all p-1 xl:px-0"
        >
          Operating Systems
        </Link>
      </li>
      <li className="min-w-[224px] snap-center text-center">
        <Link
          href={"/"}
          className="block text-sm hover:bg-lighter hover:dark:bg-darker transition-all p-1 xl:px-0"
        >
          Artificial Intelligence
        </Link>
      </li>
      <li className="min-w-[224px] snap-center text-center">
        <Link
          href={"/"}
          className="block text-sm hover:bg-lighter hover:dark:bg-darker transition-all p-1 xl:px-0"
        >
          Database
        </Link>
      </li>
      <li className="min-w-[224px] snap-center text-center">
        <Link
          href={"/"}
          className="block text-sm hover:bg-lighter hover:dark:bg-darker transition-all p-1 xl:px-0"
        >
          Cyber Security
        </Link>
      </li>
      <li className="min-w-[224px] snap-center text-center">
        <Link
          href={"/"}
          className="block text-sm hover:bg-lighter hover:dark:bg-darker transition-all p-1 xl:px-0"
        >
          Mobile
        </Link>
      </li>
      <li className="min-w-[224px] snap-center text-center">
        <Link
          href={"/"}
          className="block text-sm hover:bg-lighter hover:dark:bg-darker transition-all p-1 xl:px-0"
        >
          Design
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
