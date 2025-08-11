import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/ae1a8230-022a-4b05-9759-7560f31d1ac8.png" 
            alt="ARAK Communications & IT Services" 
            className="h-16 w-auto"
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
          <Button asChild className="bg-gradient-primary text-primary-foreground shadow-arak">
            <a href="https://wa.me/218914842885" target="_blank" rel="noopener noreferrer" aria-label="Chat with ARAK expert on WhatsApp">
              Talk to Expert
            </a>
          </Button>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setOpen((prev) => !prev)} aria-expanded={open} aria-controls="mobile-nav">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <div
            id="mobile-nav"
            className={`fixed top-16 right-0 z-40 w-[300px] sm:w-[400px] h-[calc(100vh-4rem)] bg-background border-l border-border shadow-lg p-6 transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
            role="dialog"
            aria-modal="true"
          >
            <nav className="flex flex-col gap-4 mt-2">
              <a href="#about" onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors text-lg">About</a>
              <a href="#services" onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors text-lg">Services</a>
              <a href="#industries" onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors text-lg">Industries</a>
              <a href="#partners" onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors text-lg">Partners</a>
              <a href="#contact" onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors text-lg">Contact</a>
              <div className="flex flex-col gap-4 mt-8">
                <a href="/ar" onClick={() => setOpen(false)} className="text-sm text-foreground hover:text-primary transition-colors">
                  العربية
                </a>
                <Button variant="outline">
                  Get Quote
                </Button>
                <Button asChild className="bg-gradient-primary text-primary-foreground shadow-arak">
                  <a href="https://wa.me/218914842885" target="_blank" rel="noopener noreferrer" aria-label="Chat with ARAK expert on WhatsApp">
                    Talk to Expert
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};