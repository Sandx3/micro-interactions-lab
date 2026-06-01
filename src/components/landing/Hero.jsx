import Button from "../atoms/Button";
import HeroImage from "../../assets/onlineLearningAmicoHero.svg";

export default function Hero() {
  return (
    <header className="flex items-center py-10 md:my-10">
      <div className="flex-col justify-center">
        <h1 className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-gradient)] bg-clip-text text-transparent uppercase font-bold text-[min(10vw,60px)]">
          Unleash your <br /> potential
        </h1>
        <p className="py-5 text-[min(5vw,24px)]">
          Online Education Redefined. Expert <br />
          Mentors. Flexible Paths.
        </p>
        <Button>Start Learning</Button>
      </div>
      <div className="grow-1">
        <img src={HeroImage} className="h-[55vh] m-auto hidden md:!block" />
      </div>
    </header>
  );
}
