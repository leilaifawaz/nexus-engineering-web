import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView();
    }
  };

  const navItems = [
    { name: "Home", href: "#top", action: scrollToTop },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-electric-gradient rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">
              <span className="text-primary">eMobility</span>
              <span className="text-secondary ml-1">Nexus</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.action ? (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </a>
              )
            ))}
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-electric"
              onClick={scrollToContact}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.action ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      item.action();
                      setIsOpen(false);
                    }}
                    className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1 text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-electric w-fit"
                onClick={() => {
                  scrollToContact();
                  setIsOpen(false);
                }}
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;