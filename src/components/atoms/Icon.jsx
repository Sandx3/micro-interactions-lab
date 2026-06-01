export default function Icon({ children, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="text-[length:inherit] [&_g]:fill-current"
      width="1em"
      height="1em"
      version="1.1"
      {...rest}
    >
      {children}
    </svg>
  );
}
