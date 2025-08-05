import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-arak-gray text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/c508bc46-50e9-4597-82ec-7fa0ab0c2307.png" 
              alt="ARAK" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Libya's leading Communication & IT Services company. We deliver enterprise-grade 
              solutions with 99.9999% uptime guarantee.
            </p>
            <div className="flex space-x-4">
              <div className="h-8 w-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="h-8 w-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-xs font-bold">in</span>
              </div>
              <div className="h-8 w-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-xs font-bold">@</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Managed IT Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Infrastructure</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hosting & Domains</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Industries</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Banking & Finance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Education</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Government</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Private Sector</a></li>
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
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};