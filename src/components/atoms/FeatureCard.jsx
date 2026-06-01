export default function FeatureCard({ children, icon, featured }) {
  return (
    <div
      className={`rounded-md flex flex-col gap-3 p-3 shadow-xl ${featured ? "bg-gradient-primary text-text-dark" : "bg-card-light dark:bg-card-dark"}`}
    >
      <div className={featured ? "" : "text-primary"}>{icon}</div>
      <div>{children}</div>
    </div>
  );
}
