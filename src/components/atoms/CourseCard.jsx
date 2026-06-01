import { useState } from "react";
import StarIcon from "../icons/StarIcon";
import Button from "./Button";

export default function CourseCard({
  title,
  image,
  avatar,
  instructor,
  rating,
  reviews,
  className,
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => setTimeout(() => setIsLoaded(true), 200);

  return (
    <div
      className={`bg-card-light dark:bg-card-dark rounded-md p-3 cursor-pointer flex flex-col gap-2 hover:scale-110 transition-all duration-200 shadow-xl ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
    >
      <img onLoad={handleLoad} className="w-full rounded-md" src={image} />
      <div className="font-bold">{title}</div>
      <div className="mt-auto">
        <div className="flex gap-1 text-[10px] md:text-xs items-center">
          <img className="w-5 rounded-full" src={avatar} />
          <span>{instructor}</span>
          <div className="flex ml-2 items-center">
            <span className="text-primary-hover">
              <StarIcon />
            </span>
            ({reviews})
          </div>
        </div>
      </div>
    </div>
  );
}
