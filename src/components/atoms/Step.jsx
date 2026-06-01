export default function Step({ className, icon, title }) {
  return (
    <div className="relative">
      <div
        className={`flex flex-col justify-center items-center gap-1.5 px-3 rounded-full h-10 w-10 md:h-20 md:w-20 bg-gradient-primary text-text-dark shadow-xl ${className}`}
      >
        <span className="text-xl md:text-2xl">{icon}</span>
      </div>
      <div className="absolute mt-1.5 text-center text-[10px] md:!text-xs">
        {title}
      </div>
    </div>
  );
}
