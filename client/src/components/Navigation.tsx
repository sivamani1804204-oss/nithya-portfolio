import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : ""
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="link-logo"
          >
            SM
          </button>

          <div className="flex items-center gap-6 flex-wrap">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-3 py-1 rounded-md"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-3 py-1 rounded-md"
              data-testid="link-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-3 py-1 rounded-md"
              data-testid="link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-3 py-1 rounded-md"
              data-testid="link-experience"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-3 py-1 rounded-md"
              data-testid="link-education"
            >
              Education
            </button>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
