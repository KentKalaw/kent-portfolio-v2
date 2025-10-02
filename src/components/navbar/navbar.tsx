import { Button } from "@/components/ui/button";
import { GithubLogo, XLogo, FacebookLogo, LinkedInLogo } from "../icons";

import { Toggle } from "./toggle";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <Toggle />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className="rounded-full shadow-none"
            size="icon"
          >
            <a
              href="https://www.facebook.com/kentkalaw03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLogo className="h-5 w-5" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="rounded-full shadow-none"
            size="icon"
          >
            <a
              href="https://www.linkedin.com/in/kentkalaw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInLogo className="h-5 w-5" />
            </a>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
