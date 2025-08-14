import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Scroll to contact section
  const handleGetQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle clicks on header anchor links that use Link (e.g. '/#about')
  const handleAnchorClick = (e: React.MouseEvent, to: string) => {
    const [path, hash] = to.split('#');
    const targetPath = path || '/';
    if (targetPath === location.pathname) {
      // same page: prevent Link navigation and scroll directly
      e.preventDefault();
      const id = (hash || '').replace('#', '');
      if (id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      setOpen(false);
    } else {
      // different page: let the Link navigate, mobile menu should close on navigation
      setOpen(false);
    }
  };

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 bg-primary text-primary-foreground px-3 py-2 rounded"
      >
        Skip to content
      </a>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/images/d836918e-2dff-4093-ba9f-226fc5ac4989.png"
              alt="ARAK Communications & IT Services"
              className="h-16 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to={'/#about'}
              onClick={(e) => handleAnchorClick(e, '/#about')}
              className={`text-foreground hover:text-primary transition-colors ${
                location.hash === '#about' ? 'text-primary' : ''
              }`}
            >
              About
            </Link>
            <Link
              to={'/#services'}
              onClick={(e) => handleAnchorClick(e, '/#services')}
              className={`text-foreground hover:text-primary transition-colors ${
                location.hash === '#services' ? 'text-primary' : ''
              }`}
            >
              Services
            </Link>
            <Link
              to={'/#industries'}
              onClick={(e) => handleAnchorClick(e, '/#industries')}
              className={`text-foreground hover:text-primary transition-colors ${
                location.hash === '#industries' ? 'text-primary' : ''
              }`}
            >
              Industries
            </Link>
            <Link
              to={'/#partners'}
              onClick={(e) => handleAnchorClick(e, '/#partners')}
              className={`text-foreground hover:text-primary transition-colors ${
                location.hash === '#partners' ? 'text-primary' : ''
              }`}
            >
              Partners
            </Link>
            <Link
              to={'/#contact'}
              onClick={(e) => handleAnchorClick(e, '/#contact')}
              className={`text-foreground hover:text-primary transition-colors ${
                location.hash === '#contact' ? 'text-primary' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/ar" className="text-sm text-foreground hover:text-primary transition-colors">
              العربية
            </Link>
            <Button variant="outline" className="hidden sm:inline-flex" onClick={handleGetQuote}>
              Get Quote
            </Button>
            <Button asChild className="bg-gradient-primary text-primary-foreground shadow-arak">
              <a
                href="https://wa.me/218914842885"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with ARAK expert on WhatsApp"
              >
                Talk to Expert
              </a>
            </Button>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-controls="mobile-nav"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
            <div
              id="mobile-nav"
              className={`fixed top-16 right-0 z-40 w-[300px] sm:w-[400px] h-[calc(100vh-4rem)] bg-background border-l border-border shadow-lg p-6 transition-transform duration-300 md:hidden ${
                open ? 'translate-x-0' : 'translate-x-full'
              }`}
              role="dialog"
              aria-modal="true"
            >
              <nav className="flex flex-col gap-4 mt-2">
                <Link
                  to={'/#about'}
                  onClick={(e) => handleAnchorClick(e, '/#about')}
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  About
                </Link>
                <Link
                  to={'/#services'}
                  onClick={(e) => handleAnchorClick(e, '/#services')}
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  Services
                </Link>
                <Link
                  to={'/#industries'}
                  onClick={(e) => handleAnchorClick(e, '/#industries')}
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  Industries
                </Link>
                <Link
                  to={'/#partners'}
                  onClick={(e) => handleAnchorClick(e, '/#partners')}
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  Partners
                </Link>
                <Link
                  to={'/#contact'}
                  onClick={(e) => handleAnchorClick(e, '/#contact')}
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  Contact
                </Link>
                <div className="flex flex-col gap-4 mt-8">
                  <Link
                    to="/ar"
                    onClick={() => setOpen(false)}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    العربية
                  </Link>
                  <Button variant="outline">Get Quote</Button>
                  <Button
                    asChild
                    className="bg-gradient-primary text-primary-foreground shadow-arak"
                  >
                    <a
                      href="https://wa.me/218914842885"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with ARAK expert on WhatsApp"
                    >
                      Talk to Expert
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
