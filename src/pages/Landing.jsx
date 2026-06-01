import Hero from "../components/landing/Hero";
import WhyUs from "../components/landing/WhyUs";
import PopularCourses from "../components/landing/PopularCourses";
import HowItWorks from "../components/landing/HowItWorks";
import Testimonials from "../components/landing/Testimonials";

function Landing() {
  return (
    <>
      <Hero />
      <WhyUs />
      <PopularCourses />
      <HowItWorks />
      <Testimonials />
      <div class="absolute top-[-100vw] right-[-105vw] h-[200vw] w-[200vw] bg-radial-[var(--color-primary-gradient),var(--color-primary),transparent_50%] opacity-40 pointer-events-none -z-10"></div>
      <div class="absolute left-0 bottom-0 h-[300vw] md:!h-[100vw] w-[100vw] bg-linear-[360deg,var(--color-primary-gradient),var(--color-primary),transparent_50%] opacity-40 pointer-events-none -z-10"></div>
    </>
  );
}

export default Landing;
