import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@emobilitynexus.com",
      link: "mailto:info@emobilitynexus.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Michigan, USA",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-4">
            <Send className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Connect with Your <span className="bg-electric-gradient bg-clip-text text-transparent">E-Mobility Nexus</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to advance your electrification journey? Contact us to discuss specialized training, 
            expert consulting, or workforce solutions tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Start Your Project Today</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name *
                    </label>
                    <Input placeholder="John" className="border-border/50 focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" className="border-border/50 focus:border-primary" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input type="email" placeholder="john@company.com" className="border-border/50 focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Company
                    </label>
                    <Input placeholder="Your Company" className="border-border/50 focus:border-primary" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Service Type
                  </label>
                  <select className="w-full px-3 py-2 border border-border/50 rounded-md focus:outline-none focus:border-primary">
                    <option>Select a service...</option>
                    <option>High-Voltage Training & Certification</option>
                    <option>Engineering Consulting</option>
                    <option>Workforce Contracting & Staffing</option>
                    <option>Strategic Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Project Details *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                    className="min-h-[120px] border-border/50 focus:border-primary"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-electric">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card key={info.title} className="group hover:shadow-electric transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.details}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Additional Info */}
            <Card className="bg-subtle-gradient border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Our Commitment</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  At eMobility Nexus Engineering LLC, we are committed to being the connection point (nexus) 
                  between knowledge, people, and technology — empowering the future of electrification worldwide.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    Global reach & expertise
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    Safety & compliance focused
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    Innovation & excellence
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;