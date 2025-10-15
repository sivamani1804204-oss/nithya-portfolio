import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    type: "Collaborative Project",
    year: "2023",
    description: "Developed a scalable online grocery store using Django and PostgreSQL.",
    achievements: [
      "Built product catalog, shopping cart, order processing, and checkout modules",
      "Integrated secure user login and payment gateway functionality",
      "Enhanced website speed and optimized for mobile and desktop devices",
    ],
    technologies: ["Django", "PostgreSQL", "Python", "Payment Gateway"],
  },
  {
    title: "Leaf Disease Detection Web App",
    type: "Personal Project",
    year: "2023",
    description: "Built a React.js and Node.js-based web tool for detecting plant leaf diseases.",
    achievements: [
      "Developed custom image classification algorithms for accurate disease detection",
      "Designed an intuitive user interface for farmers to monitor plant health and receive recommendations",
    ],
    technologies: ["React.js", "Node.js", "Machine Learning", "Image Processing"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20" data-testid="section-projects">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="p-8 hover-elevate transition-all"
              data-testid={`card-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 flex-wrap">
                    <span className="font-medium">{project.type}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
