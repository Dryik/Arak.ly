import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const HeaderAr = () => {
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
          <Button className="bg-gradient-primary text-primary-foreground shadow-arak">
            تحدث مع خبير
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};