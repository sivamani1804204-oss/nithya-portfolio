import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experience = {
  role: "Full-Stack Development Intern",
  company: "EpicX Software Company",
  location: "Coimbatore",
  duration: "15 Days",
  year: "2024",
  achievements: [
    "Developed key modules for a Matrimony web platform using React.js, Node.js, and MongoDB",
    "Implemented user registration, login, profile creation, and matchmaking features",
    "Improved user interface to boost engagement and accessibility across devices",
    "Assisted in code debugging, testing, and performance enhancements in collaboration with senior developers",
  ],
  technologies: ["React.js", "Node.js", "MongoDB"],
};

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30" data-testid="section-experience">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Internship Experience
        </h2>
        
        <Card className="p-8 border-l-4 border-l-primary" data-testid="card-experience">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">{experience.role}</h3>
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span className="font-medium">{experience.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{experience.duration} • {experience.year}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Key Responsibilities & Achievements:</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-muted-foreground flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
