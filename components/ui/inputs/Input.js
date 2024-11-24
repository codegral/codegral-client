const Input = ({
  type,
  name,
  placeholder,
  className,
  value,
  onChange,
  onBlur,
}) => {
  let classes = `input block w-full bg-white dark:bg-dark border dark:border-dark focus:border-black focus:dark:border-white rounded text-sm text-dark dark:text-white placeholder:text-sm placeholder:text-muted placeholder:dark:text-muted-dark outline-none ${className} py-2 px-3 transition-all`;

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={classes}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;
