import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Battery, CircuitBoard } from "lucide-react";
import heroImage from "@/assets/hero-emobility.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-subtle-gradient">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Electric mobility engineering infrastructure"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      </div>

      {/* Floating Electric Elements */}
      <div className="absolute top-20 left-10 text-primary/20 animate-float">
        <Zap size={40} />
      </div>
      <div className="absolute bottom-32 right-16 text-secondary/20 animate-float" style={{ animationDelay: '1s' }}>
        <Battery size={35} />
      </div>
      <div className="absolute top-40 right-20 text-primary/20 animate-float" style={{ animationDelay: '2s' }}>
        <CircuitBoard size={30} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Engineering the Future of Mobility</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-electric-gradient bg-clip-text text-transparent leading-tight">
          emobility nexus
          <br />
          <span className="text-foreground">engineering LLC</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Connecting knowledge, people, and technology. Your nexus for specialized high-voltage training, 
          expert engineering consulting, and strategic workforce solutions worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group bg-primary hover:bg-primary-dark text-primary-foreground shadow-electric">
            Start Training
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
            Get Consulting
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">3</div>
            <div className="text-muted-foreground">Global Regions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Safety Focused</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;