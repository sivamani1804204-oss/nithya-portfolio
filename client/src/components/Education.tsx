import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
    institution: "Dr. NGP Institute of Technology, Coimbatore",
    duration: "2022 – Present",
    grade: "CGPA: 86.10%",
  },
  {
    degree: "Higher Secondary (HSC) in Computer Science",
    institution: "Universal Matriculation Higher Secondary School, Tiruppur",
    duration: "2020 – 2022",
    grade: "81.67%",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Universal Matriculation Higher Secondary School, Tiruppur",
    duration: "2019 – 2020",
    grade: "70.80%",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30" data-testid="section-education">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Education</h2>
        
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <Card
              key={idx}
              className="p-6 relative"
              data-testid={`card-education-${idx}`}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-md whitespace-nowrap">
                      {edu.grade}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.duration}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
