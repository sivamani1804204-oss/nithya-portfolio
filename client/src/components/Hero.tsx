import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20"
      data-testid="section-hero"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1
                  className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"
                  data-testid="text-name"
                >
                  Srinithya Manoharan
                </h1>
                <p
                  className="text-2xl md:text-3xl font-semibold text-foreground"
                  data-testid="text-title"
                >
                  Front-End Developer
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Computer Science undergraduate specializing in React.js and modern web technologies
                </p>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2"
                  data-testid="link-github"
                  onClick={() => window.open("https://github.com/srinithya", "_blank")}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2"
                  data-testid="link-linkedin"
                  onClick={() => window.open("https://linkedin.com/in/srinithya-manoharan", "_blank")}
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2"
                  data-testid="link-email"
                  onClick={() => window.location.href = "mailto:nithya.manoharan45@gmail.com"}
                >
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2"
                  data-testid="link-phone"
                  onClick={() => window.location.href = "tel:+919566533382"}
                >
                  <Phone className="h-4 w-4" />
                  +91 9566533382
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-full blur-3xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-primary/20">
                <img
                  src="/attached_assets/4061 copy (1)_1760535332651.jpg"
                  alt="Srinithya Manoharan"
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
