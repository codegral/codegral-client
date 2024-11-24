const Button = ({ type, variant, className, onClick, children }) => {
  let classes = `button rounded-xl font-semibold text-sm py-2 px-6 ${className} transition-all delay `;

  switch (variant) {
    case "primary": {
      classes +=
        "bg-primary hover:bg-primary-darker active:bg-primary-darker text-white ";
      break;
    }
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
