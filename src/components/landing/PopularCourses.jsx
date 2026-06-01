import { useState } from "react";
import Button from "../atoms/Button";
import CourseCard from "../atoms/CourseCard";
import SlideArrows from "../atoms/SlideArrows";
import POPULAR_COURSES from "../../data/popularCourses";

export default function PopularCourses() {
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalItems = POPULAR_COURSES.length;

  const handleSlide = (handler) => () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      handler();
    }, 200);
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  const nextSlide = () =>
    setStartIndex((prevIndex) => (prevIndex + 1) % totalItems);

  const prevSlide = () =>
    setStartIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);

  const nextIndex = (startIndex + 1) % totalItems;
  const visibleItems =
    totalItems > 1
      ? [POPULAR_COURSES[startIndex], POPULAR_COURSES[nextIndex]]
      : POPULAR_COURSES;

  const renderPopularCourses = (device) => {
    const list = device === "desktop" ? POPULAR_COURSES : visibleItems;

    return list.map((c, i) => (
      <CourseCard
        key={`course-card-${c.id}-${device}`}
        title={c.title}
        instructor={c.instructor}
        image={c.image}
        avatar={c.avatar}
        rating={c.rating}
        reviews={c.reviews}
      />
    ));
  };

  return (
    <section className="py-5">
      <div className="flex justify-between pb-5">
        <h2 className="text-[min(5vw,32px)]">Popular Courses</h2>
        <div
          className={`md:!hidden ${totalItems > 2 ? "flex" : "hidden"} justify-center items-center`}
        >
          <SlideArrows
            handleLeft={handleSlide(prevSlide)}
            handleRight={handleSlide(nextSlide)}
          />
        </div>
      </div>
      <div className="md:!grid grid-cols-4 gap-1.5 hidden">
        {renderPopularCourses("desktop")}
      </div>
      <div
        className={`grid grid-cols-${totalItems > 1 ? "2" : "1"} gap-1.5 md:!hidden`}
      >
        {renderPopularCourses()}
      </div>
    </section>
  );
}
