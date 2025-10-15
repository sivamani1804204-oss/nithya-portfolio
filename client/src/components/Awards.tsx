import { Card } from "@/components/ui/card";
import { Award, Lightbulb, Trophy } from "lucide-react";

const awards = [
  {
    icon: Award,
    title: "Patent Holder",
    description: "Awarded design patent for Wireless Touch Laser Presenter by Indian Patent Office",
  },
  {
    icon: Trophy,
    title: "Best Project Award",
    description: 'Won at Toycathon for developing an autonomous cleaning robot ("Mini Roomba")',
  },
  {
    icon: Lightbulb,
    title: "National Hackathon Participant",
    description: "Competed in iTech Hackfest 2023 demonstrating teamwork and problem-solving skills",
  },
];

export function Awards() {
  return (
    <section id="awards" className="py-20" data-testid="section-awards">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Awards & Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((award, idx) => (
            <Card
              key={idx}
              className="p-6 hover-elevate transition-all"
              data-testid={`card-award-${idx}`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <award.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
