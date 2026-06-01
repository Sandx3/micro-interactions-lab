import { useState, useEffect } from "react";

import Button from "../atoms/Button";
import Link from "../atoms/Link";
import Logo from "../atoms/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${isScrolled ? "dark:bg-bg-dark bg-bg-light backdrop-blur-md shadow-xl" : ""} fixed top-0 left-0 z-100 w-dvw transition-all duration-300`}
    >
      <div className="flex items-center justify-between max-w-5xl m-auto p-4">
        <div className="flex items-center">
          <Link href="#">
            <Logo />
          </Link>
        </div>
        <div className="md:!flex hidden justify-center gap-5">
          <Link href="#">Courses</Link>
          <Link href="#">About</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Community</Link>
        </div>
        <div className="flex gap-5 justify-baseline">
          <Link href="#" c>
            Log in
          </Link>
          <Button className="md:!flex hidden">Start learning</Button>
        </div>
      </div>
    </nav>
  );
}
