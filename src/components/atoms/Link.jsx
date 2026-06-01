export default function Link({ children, className, ...rest }) {
  return (
    <a
      {...rest}
      className={`flex justify-center items-center cursor-pointer hover:text-primary-hover duration-300 transition-all ${className}`}
    >
      {children}
    </a>
  );
}
