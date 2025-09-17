import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Shield, Users, Award } from "lucide-react";

const About = () => {
  const objectives = [
    {
      icon: Lightbulb,
      title: "Foster Innovation & Growth",
      description: "Collaborate with industry partners, research institutions, and training academies to introduce cutting-edge solutions."
    },
    {
      icon: Shield,
      title: "Promote Safety & Compliance",
      description: "Equip professionals with knowledge to meet global standards and regulations for high-voltage systems."
    },
    {
      icon: Users,
      title: "Build Long-Term Partnerships",
      description: "Develop sustainable relationships by consistently delivering value, reliability, and technical leadership."
    },
    {
      icon: Award,
      title: "Bridge Knowledge Gaps",
      description: "Serve as a resource hub for on-demand technical expertise and guidance tailored to challenges."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
              <Award className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Trusted <span className="bg-electric-gradient bg-clip-text text-transparent">E-Mobility</span> Partner
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong>Our Mission:</strong> Bridge knowledge gaps and serve as a resource hub where professionals 
              and organizations can access on-demand technical expertise tailored to their challenges.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We promote safety & compliance by equipping professionals with knowledge and skills required 
              to meet global standards for high-voltage systems, ensuring safer workplaces and products.
            </p>

            <div className="bg-primary/5 rounded-lg p-6 mb-8 border border-primary/10">
              <h3 className="text-xl font-semibold mb-4 text-primary">Leadership</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Ramez Haidar – President & CEO</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    20+ years of experience in product engineering, e-mobility solutions, and global program management. 
                    Proven track record in driving innovation, building teams, and delivering customer value.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">3</div>
                <div className="text-muted-foreground">Global Regions</div>
              </div>
            </div>
          </div>

          {/* Objectives Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <Card 
                  key={objective.title}
                  className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/30"
                >
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {objective.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {objective.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;