export default function Button({ children, className, ...rest }) {
  return (
    <button
      {...rest}
      className={`flex justify-center items-center px-3 rounded-2xl min-h-8 bg-gradient-primary cursor-pointer hover:shadow-lg transition-all duration-300 hover:shadow-primary-hover/50 text-text-dark hover:scale-110 whitespace-nowrap ${className}`}
    >
      {children}
    </button>
  );
}
