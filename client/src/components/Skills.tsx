import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C/C++", "JavaScript"],
  },
  {
    title: "Front-End",
    skills: ["React.js", "HTML", "CSS", "Responsive Web Design"],
  },
  {
    title: "Back-End",
    skills: ["Node.js", "Django", "RESTful APIs"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["MERN Stack"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Visual Studio Code", "Postman"],
  },
  {
    title: "Core Competencies",
    skills: ["User Authentication", "Payment Gateway Integration", "Debugging", "Performance Optimization"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Team Collaboration", "Problem Solving", "Analytical Thinking", "Adaptability"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30" data-testid="section-skills">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6" data-testid={`card-skill-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" data-testid={`badge-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
