import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Cog, Users, Globe } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "High-Voltage Training & Certification",
    description: "Specialized training programs for mechanics, OEMs, suppliers, and dealers. Partner with global organizations like TÜV SÜD and OEM academies for hands-on safety training and international compliance."
  },
  {
    icon: Cog,
    title: "Engineering Consulting",
    description: "Support OEMs, Tier 1/Tier 2 suppliers, and startups with product development. Expertise in high-voltage/low-voltage cable harnesses, busbars, EV architecture, renewable integration, and aerospace."
  },
  {
    icon: Users,
    title: "Workforce Contracting & Staffing",
    description: "Connect specialized engineers and technicians to projects globally. Provide project-based contracting and temporary staffing solutions for automotive, aerospace, and renewable sectors."
  },
  {
    icon: Globe,
    title: "Global Reach & Strategic Growth",
    description: "Operate across North America, MENA, and Europe. Build partnerships with OEMs, universities, and industry associations as a trusted advisor in the e-mobility ecosystem."
  }
];

const Services = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Cog className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your <span className="bg-electric-gradient bg-clip-text text-transparent">E-Mobility</span> Nexus
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connecting knowledge, people, and technology to empower the future of electrification worldwide. 
            Specialized training, expert consulting, and strategic workforce solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/30 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-subtle-gradient rounded-2xl p-8 md:p-12 border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Connect with Excellence?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need training, consulting, or specialized talent, we're your nexus to electrification success. 
              Let's power your next breakthrough together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-electric transition-all hover:shadow-energy">
                Get Started
              </button>
              <button className="border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-6 py-3 rounded-lg font-medium transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;