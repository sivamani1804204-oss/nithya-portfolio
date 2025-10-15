import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 border-t" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="footer-link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="footer-link-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="footer-link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="footer-link-experience"
            >
              Experience
            </button>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/srinithya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center transition-all"
              data-testid="footer-link-github"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/srinithya-manoharan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center transition-all"
              data-testid="footer-link-linkedin"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:nithya.manoharan45@gmail.com"
              className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center transition-all"
              data-testid="footer-link-email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
