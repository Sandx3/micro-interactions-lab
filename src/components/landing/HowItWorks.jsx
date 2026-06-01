import BulbIcon from "../icons/BulbIcon";
import UsersIcon from "../icons/UsersIcon";
import KeyboardFingerIcon from "../icons/KeyboardFingerIcon";
import ClipFileIcon from "../icons/ClipFileIcon";
import CertificateIcon from "../icons/CertificateIcon";
import ArrowNextIcon from "../icons/ArrowNextIcon";
import Step from "../atoms/Step";

export default function HowItWorks() {
  return (
    <section className="py-5 mb-10 md:mb-5">
      <h2 className="text-[min(5vw,32px)] pb-5">How it works?</h2>
      <div className="flex items-center justify-center md:p-5 gap-2 md:gap-6">
        <Step icon={<KeyboardFingerIcon />} title="Choose Your Path" />
        <ArrowNextIcon className="fill-primary" />
        <Step icon={<BulbIcon />} title="Learn the Theory" />
        <ArrowNextIcon className="fill-primary" />
        <Step icon={<UsersIcon />} title="Practice with Mentors" />
        <ArrowNextIcon className="fill-primary" />
        <Step icon={<ClipFileIcon />} title="Build a Portfolio" />
        <ArrowNextIcon className="fill-primary" />
        <Step icon={<CertificateIcon />} title="Get Certified & Hired" />
      </div>
    </section>
  );
}
