import { useState, useEffect, useRef } from "react";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import { isPresent } from "../../utils/validation";

export default function Carousel({
  totalPages,
  onPageChange,
  renderItem,
  autoPlay,
}) {
  const [activePage, setActivePage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef(null);

  const handleNext = () =>
    setActivePage((prevState) =>
      prevState < totalPages ? prevState + 1 : prevState,
    );
  const handlePrevious = () =>
    setActivePage((prevState) =>
      prevState <= totalPages ? prevState - 1 : prevState,
    );

  useEffect(() => {
    setIsAnimating(true);

    setTimeout(() => {
      onPageChange(activePage);
    }, 175);

    setTimeout(() => {
      setIsAnimating(false);
    }, 350);
  }, [activePage]);

  useEffect(() => {
    if (!autoPlay) return;

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        activePage === totalPages ? setActivePage(1) : handleNext();
      }, 5000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay, activePage, totalPages]);

  return (
    <div>
      <div
        className={`flex justify-between items-center w-full gap-3 min-h-28 md:!min-h-40`}
      >
        <button
          disabled={activePage === 1}
          onClick={handlePrevious}
          className="text-text-dark bg-primary hover:bg-primary-hover w-5 h-5 text-[8px] md:w-8 md:h-8 md:!text-xs rounded-full cursor-pointer flex justify-center items-center disabled:opacity-20 transition-all duration-300 disabled:cursor-not-allowed"
        >
          <ArrowLeftIcon />
        </button>
        <div
          className={`flex-1 flex justify-center items-center ${
            isAnimating ? "animate-page-change" : ""
          }`}
        >
          {renderItem}
        </div>
        <button
          disabled={activePage === totalPages || !isPresent(totalPages)}
          onClick={handleNext}
          className="text-text-dark bg-primary hover:bg-primary-hover w-5 h-5 text-[8px] md:w-8 md:h-8 md:!text-xs rounded-full cursor-pointer flex justify-center items-center disabled:opacity-20 transition-all duration-300 disabled:cursor-not-allowed"
        >
          <ArrowRightIcon />
        </button>
      </div>
      <div className="flex justify-center items-center gap-3 my-5">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActivePage(index + 1)}
            className={`h-1 md:h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === activePage - 1
                ? "w-3 md:w-6 bg-primary"
                : "w-1 md:w-2 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
