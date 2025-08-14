import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const HeaderAr = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:right-4 bg-primary text-primary-foreground px-3 py-2 rounded"
        dir="rtl"
      >
        انتقل للمحتوى
      </a>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
        dir="rtl"
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 space-x-reverse">
            <img
              src="/images/d836918e-2dff-4093-ba9f-226fc5ac4989.png"
              alt="ARAK للاتصالات وخدمات تكنولوجيا المعلومات"
              className="h-16 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link
              to={'/ar#about'}
              className={`text-foreground hover:text-primary transition-colors ${
                location.hash === '#about' ? 'text-primary' : ''
              }`}
            >
              من نحن
            </Link>
            <Link
              to={'/ar#services'}
              className={`text-foreground hover:text-primary transition-colors ${
                location.hash === '#services' ? 'text-primary' : ''
              }`}
            >
              خدماتنا
            </Link>
            <Link
              to={'/ar#industries'}
              className={`text-foreground hover:text-primary transition-colors ${
                location.hash === '#industries' ? 'text-primary' : ''
              }`}
            >
              القطاعات
            </Link>
            <Link
              to={'/ar#partners'}
              className={`text-foreground hover:text-primary transition-colors ${
                location.hash === '#partners' ? 'text-primary' : ''
              }`}
            >
              شركاؤنا
            </Link>
            <Link
              to={'/ar#contact'}
              className={`text-foreground hover:text-primary transition-colors ${
                location.hash === '#contact' ? 'text-primary' : ''
              }`}
            >
              اتصل بنا
            </Link>
          </nav>

          <div className="flex items-center space-x-4 space-x-reverse">
            <Link to="/" className="text-sm text-foreground hover:text-primary transition-colors">
              English
            </Link>
            <Button variant="outline" className="hidden sm:inline-flex">
              احصل على عرض سعر
            </Button>
            <Button asChild className="bg-gradient-primary text-primary-foreground shadow-arak">
              <a
                href="https://wa.me/218914842885"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تحدث مع خبير عبر واتساب"
              >
                تحدث مع خبير
              </a>
            </Button>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-controls="mobile-nav"
                dir="rtl"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
            <div
              id="mobile-nav"
              className={`fixed top-16 left-0 z-40 w-[300px] sm:w-[400px] h-[calc(100vh-4rem)] bg-background border-r border-border shadow-lg p-6 transition-transform duration-300 md:hidden ${
                open ? 'translate-x-0' : '-translate-x-full'
              }`}
              role="dialog"
              aria-modal="true"
              dir="rtl"
            >
              <nav className="flex flex-col gap-4 mt-2">
                <Link
                  to={'/ar#about'}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  من نحن
                </Link>
                <Link
                  to={'/ar#services'}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  خدماتنا
                </Link>
                <Link
                  to={'/ar#industries'}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  القطاعات
                </Link>
                <Link
                  to={'/ar#partners'}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  شركاؤنا
                </Link>
                <Link
                  to={'/ar#contact'}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  اتصل بنا
                </Link>
                <div className="flex flex-col gap-4 mt-8">
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    English
                  </Link>
                  <Button variant="outline">احصل على عرض سعر</Button>
                  <Button
                    asChild
                    className="bg-gradient-primary text-primary-foreground shadow-arak"
                  >
                    <a
                      href="https://wa.me/218914842885"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="تحدث مع خبير عبر واتساب"
                    >
                      تحدث مع خبير
                    </a>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
