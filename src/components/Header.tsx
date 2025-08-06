import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/c508bc46-50e9-4597-82ec-7fa0ab0c2307.png" 
            alt="ARAK Communications & IT Services" 
            className="h-10 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#industries" className="text-foreground hover:text-primary transition-colors">Industries</a>
          <a href="#partners" className="text-foreground hover:text-primary transition-colors">Partners</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a href="/ar" className="text-sm text-foreground hover:text-primary transition-colors">
            العربية
          </a>
          <Button variant="outline" className="hidden sm:inline-flex">
            Get Quote
          </Button>
          <Button className="bg-gradient-primary text-primary-foreground shadow-arak">
            Talk to Expert
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};