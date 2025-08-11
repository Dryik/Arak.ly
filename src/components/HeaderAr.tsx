import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";

export const HeaderAr = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" dir="rtl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2 space-x-reverse">
          <img 
            src="/lovable-uploads/ae1a8230-022a-4b05-9759-7560f31d1ac8.png" 
            alt="ARAK للاتصالات وخدمات تكنولوجيا المعلومات" 
            className="h-16 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">من نحن</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">خدماتنا</a>
          <a href="#industries" className="text-foreground hover:text-primary transition-colors">القطاعات</a>
          <a href="#partners" className="text-foreground hover:text-primary transition-colors">شركاؤنا</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">اتصل بنا</a>
        </nav>
        
        <div className="flex items-center space-x-4 space-x-reverse">
          <a href="/" className="text-sm text-foreground hover:text-primary transition-colors">
            English
          </a>
          <Button variant="outline" className="hidden sm:inline-flex">
            احصل على عرض سعر
          </Button>
          <Button asChild className="bg-gradient-primary text-primary-foreground shadow-arak">
            <a href="https://wa.me/218914842885" target="_blank" rel="noopener noreferrer" aria-label="تحدث مع خبير عبر واتساب">
              تحدث مع خبير
            </a>
          </Button>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setOpen((prev) => !prev)} aria-expanded={open} aria-controls="mobile-nav" dir="rtl">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <div
            id="mobile-nav"
            className={`fixed top-16 left-0 z-40 w-[300px] sm:w-[400px] h-[calc(100vh-4rem)] bg-background border-r border-border shadow-lg p-6 transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "-translate-x-full"}`}
            role="dialog"
            aria-modal="true"
            dir="rtl"
          >
            <nav className="flex flex-col gap-4 mt-2">
              <a href="#about" onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors text-lg">من نحن</a>
              <a href="#services" onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors text-lg">خدماتنا</a>
              <a href="#industries" onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors text-lg">القطاعات</a>
              <a href="#partners" onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors text-lg">شركاؤنا</a>
              <a href="#contact" onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors text-lg">اتصل بنا</a>
              <div className="flex flex-col gap-4 mt-8">
                <a href="/" onClick={() => setOpen(false)} className="text-sm text-foreground hover:text-primary transition-colors">
                  English
                </a>
                <Button variant="outline">
                  احصل على عرض سعر
                </Button>
                <Button asChild className="bg-gradient-primary text-primary-foreground shadow-arak">
                  <a href="https://wa.me/218914842885" target="_blank" rel="noopener noreferrer" aria-label="تحدث مع خبير عبر واتساب">
                    تحدث مع خبير
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