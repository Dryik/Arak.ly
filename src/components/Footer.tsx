import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';

export const Footer = () => {
  return (
    <footer className="bg-arak-gray text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/images/e0b5ad18-da21-4474-8389-2ac588a27ccc.png"
              alt="ARAK logo (white) - Communications & IT Services"
              className="h-24 w-auto"
              loading="lazy"
              decoding="async"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Libya's leading Communication & IT Services company. We deliver enterprise-grade
              solutions with 99.999% uptime guarantee.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61579130677510"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ARAK on Facebook"
                className="h-8 w-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <span className="text-xs font-bold">f</span>
              </a>
              <a
                href="https://www.linkedin.com/company/arak-for-communication-information-technology"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ARAK on LinkedIn"
                className="h-8 w-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <span className="text-xs font-bold">in</span>
              </a>
              <div className="h-8 w-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-xs font-bold">@</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  to={`${ROUTES.home}#services`}
                  className="hover:text-primary transition-colors"
                >
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link
                  to={`${ROUTES.home}#services`}
                  className="hover:text-primary transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  to={`${ROUTES.home}#services`}
                  className="hover:text-primary transition-colors"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  to={`${ROUTES.home}#services`}
                  className="hover:text-primary transition-colors"
                >
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to={`${ROUTES.home}#services`}
                  className="hover:text-primary transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to={`${ROUTES.home}#services`}
                  className="hover:text-primary transition-colors"
                >
                  Hosting & Domains
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Industries</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  to={ROUTES.industries.healthcare}
                  className="hover:text-primary transition-colors"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.industries.bankingFinance}
                  className="hover:text-primary transition-colors"
                >
                  Banking & Finance
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.industries.education}
                  className="hover:text-primary transition-colors"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.industries.government}
                  className="hover:text-primary transition-colors"
                >
                  Government
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.industries.privateSector}
                  className="hover:text-primary transition-colors"
                >
                  Private Sector
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white">Email</p>
                <p>info@arak.ly</p>
              </div>
              <div>
                <p className="font-medium text-white">Phone</p>
                <p>+218 XXX XXX XXX</p>
              </div>
              <div>
                <p className="font-medium text-white">Location</p>
                <p>Tripoli, Libya</p>
              </div>
              <div>
                <p className="font-medium text-white">Support</p>
                <p className="text-primary">24/7 Available</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-600 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2024 ARAK Communications & IT Services. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link to={ROUTES.privacy} className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to={ROUTES.terms} className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to={ROUTES.cookies} className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
