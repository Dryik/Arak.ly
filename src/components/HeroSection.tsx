import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center bg-arak-blue-light text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="h-4 w-4 mr-2" />
              Libya's Leading IT Partner
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Full Communication & 
              <span className="text-transparent bg-clip-text bg-gradient-primary"> IT Services</span>
              <br />in Libya
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              ARAK delivers enterprise-grade Managed Services, Infrastructure, and Cybersecurity solutions. 
              Focus on your business while we handle all things IT with 99.9999% uptime guarantee.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-elevated group">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Our Services
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.9999%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
        </div>
        
        {/* Visual Element */}
        <div className="relative">
          <div className="relative bg-gradient-card rounded-2xl p-8 shadow-elevated">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground">Cybersecurity</h3>
                <p className="text-sm text-muted-foreground">Enterprise Protection</p>
              </div>
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground">Infrastructure</h3>
                <p className="text-sm text-muted-foreground">High Performance</p>
              </div>
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground">Managed Services</h3>
                <p className="text-sm text-muted-foreground">24/7 Monitoring</p>
              </div>
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <ArrowRight className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground">Cloud Solutions</h3>
                <p className="text-sm text-muted-foreground">Scalable & Secure</p>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-4 shadow-arak animate-pulse">
            <Shield className="h-6 w-6" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-arak-gray text-white rounded-full p-4 shadow-arak">
            <Zap className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};