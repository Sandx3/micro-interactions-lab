import Logo from "../atoms/Logo";
import Link from "../atoms/Link";

import { FOOTER_SECTIONS } from "../../data/footerSections";

export default function Footer() {
  const renderFooterSections = FOOTER_SECTIONS.map((section, i) => (
    <div key={`${i}-footer-section`}>
      <div className="font-bold text-xs mb-2">{section.title}</div>
      {section.links.map((link, i) => (
        <Link
          key={`${link.href}-${i}`}
          href={link.href}
          className="text-xs justify-start mb-1"
        >
          {link.label}
        </Link>
      ))}
    </div>
  ));

  return (
    <footer className="bg-card-light dark:bg-card-dark">
      <div className="max-w-5xl m-auto p-5 w-full">
        <div className="grid grid-cols-2 md:!grid-cols-5 gap-8 md:gap-2 py-5">
          <div className="hidden md:!block scale-75">
            <Logo />
          </div>
          {renderFooterSections}
        </div>
        <div>
          <p className="text-[9px] py-3 border-t-2 border-slate-100 dark:border-card-dark">
            Copyright &copy; {new Date().getFullYear()} IgniteLearn. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
