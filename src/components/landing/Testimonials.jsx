import { useState } from "react";

import Carousel from "../atoms/Carousel";
import Testimonial from "../atoms/Testimonial";

import TESTIMONIALS from "../../data/testimonials";
import { paginate } from "../../utils/pagination";

export default function Testimonials() {
  const [renderedDesktopTestimonials, setRenderedDesktopTestimonials] =
    useState(paginate(TESTIMONIALS, 1, 3));
  const [renderedMobileTestimonials, setRenderedMobileTestimonials] = useState(
    paginate(TESTIMONIALS, 1, 1),
  );

  const lengthDesktop = TESTIMONIALS.length / 3;
  const lengthMobile = TESTIMONIALS.length;

  const handlePageChangeDesktop = (currentPage) => {
    const desktopItems = paginate(TESTIMONIALS, currentPage, 3);
    setRenderedDesktopTestimonials(desktopItems);
  };

  const handlePageChangeMobile = (currentPage) => {
    const mobileItems = paginate(TESTIMONIALS, currentPage, 1);
    setRenderedMobileTestimonials(mobileItems);
  };

  const desktopRenderItem = renderedDesktopTestimonials.map((item) => (
    <Testimonial
      key={item.id}
      content={item.content}
      name={item.name}
      avatar={item.avatar}
    />
  ));

  const mobileRenderItem = renderedMobileTestimonials.map((item) => (
    <Testimonial
      key={item.id}
      content={item.content}
      name={item.name}
      avatar={item.avatar}
    />
  ));

  return (
    <section className="py-5">
      <h2 className="text-[min(5vw,32px)] pb-5">Testimonials</h2>
      <div className="hidden md:!block">
        <Carousel
          autoPlay
          totalPages={lengthDesktop}
          onPageChange={handlePageChangeDesktop}
          renderItem={
            <div className="grid grid-cols-3 gap-5">{desktopRenderItem}</div>
          }
        />
      </div>
      <div className="block md:!hidden">
        <Carousel
          autoPlay
          totalPages={lengthMobile}
          onPageChange={handlePageChangeMobile}
          renderItem={mobileRenderItem}
        />
      </div>
    </section>
  );
}
