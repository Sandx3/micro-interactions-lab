import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

export default function SlideArrows({ handleLeft, handleRight }) {
  return (
    <div className={`flex justify-center items-center`}>
      <button
        onClick={handleLeft}
        className="text-primary hover:text-primary-hover cursor-pointer px-3"
      >
        <ArrowLeftIcon />
      </button>
      <button
        onClick={handleRight}
        className="text-primary hover:text-primary-hover cursor-pointer px-3"
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
}
