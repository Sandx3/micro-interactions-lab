import Button from "../atoms/Button";
import FeatureCard from "../atoms/FeatureCard";
import BulbIcon from "../icons/BulbIcon";
import UsersIcon from "../icons/UsersIcon";
import CommentsIcon from "../icons/CommentsIcon";
import CalendarClockIcon from "../icons/CalendarClockIcon";
import RocketIcon from "../icons/RocketIcon";
import TrophyIcon from "../icons/TrophyIcon";

const FEATURES = [
  {
    icon: <BulbIcon />,
    featured: true,
    description: "Adaptive Learning",
  },
  {
    icon: <UsersIcon />,
    featured: false,
    description: "Connect with Mentors",
  },
  {
    icon: <CommentsIcon />,
    featured: false,
    description: "Expert Community",
  },
  {
    icon: <CalendarClockIcon />,
    featured: false,
    description: "Flexible Schedules",
  },
  {
    icon: <RocketIcon />,
    featured: true,
    description: "Modern Technology",
  },
  {
    icon: <TrophyIcon />,
    featured: false,
    description: "Career Growth",
  },
];

export default function WhyUs() {
  const renderFeatures = FEATURES.map((f, i) => (
    <FeatureCard key={`feature-card-${i}`} featured={f.featured} icon={f.icon}>
      {f.description}
    </FeatureCard>
  ));

  return (
    <section className="py-5">
      <h2 className="text-[min(5vw,32px)] md:hidden pb-5">Why Choose Us?</h2>
      <div className="flex items-center">
        <div className="hidden md:!block max-w-1/3">
          <h2 className="text-[min(5vw,32px)] pb-5">Why Choose Us?</h2>
          <p className="pb-5">
            Skip the boring theory. Learn directly from active industry experts
            who know what employers actually want.
          </p>
          <Button>Learn More</Button>
        </div>
        <div className="grow-1 grid grid-cols-2 md:!grid-cols-3 md:p-5 gap-1.5">
          {renderFeatures}
        </div>
      </div>
    </section>
  );
}
