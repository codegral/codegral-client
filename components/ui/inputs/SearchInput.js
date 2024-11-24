import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { default: Input } = require("./Input");

const SearchInput = ({ className, value, onChange, onBlur }) => (
  <section className="relative">
    <Input
      type={"text"}
      name={"search"}
      placeholder={"Search"}
      className={`peer rounded-full hover:border-black hover:dark:border-white hover:shadow-md focus:shadow-md ${className}`}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    <FontAwesomeIcon
      icon={faSearch}
      className="peer absolute top-1/2 right-3 -translate-y-1/2 text-dark dark:text-white peer-placeholder-shown:text-muted peer-placeholder-shown:dark:text-muted-dark peer-focus:!text-dark peer-focus:dark:!text-white peer-hover:!text-dark peer-hover:dark:!text-white transition-all"
    />
  </section>
);

export default SearchInput;
