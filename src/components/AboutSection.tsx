import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';

export const AboutSection = () => {
  const badges = [
    { icon: CheckCircle, text: 'ISO Certified' },
    { icon: Award, text: 'Certified Engineers' },
    { icon: Users, text: 'Enterprise Partners' },
    { icon: Zap, text: '24/7 Operations' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Choose{' '}
                <span className="text-transparent bg-clip-text bg-gradient-primary">ARAK</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ARAK is Libya's premier technology company delivering comprehensive Communication
                and IT services. We specialize in Managed Services (MSP) that let businesses focus
                on their core operations while we ensure their technology infrastructure runs
                flawlessly.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center gap-2 p-3 justify-start bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <badge.icon className="h-4 w-4 text-primary" />
                  {badge.text}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-2xl p-6 shadow-card-arak border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Commitment</h3>
              <div className="space-y-4">
                {[
                  '✔ End-to-end IT solutions under one roof',
                  '✔ 99.999% uptime guarantee for your infrastructure',
                  '✔ Certified engineers with real hands-on experience',
                  '✔ Enterprise-grade results, even for startups',
                  '✔ Strong vendor partnerships: HPE, Dell, Cisco, Fortinet',
                  '✔ Industry-specific expertise: banking, education, healthcare',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-primary font-medium">{item.split(' ')[0]}</div>
                    <div className="text-muted-foreground">{item.substring(2)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-primary rounded-2xl p-6 text-primary-foreground">
              <h4 className="text-lg font-semibold mb-2">Our Promise</h4>
              <p className="text-primary-foreground/90">
                Once you partner with ARAK, you'll stop thinking about IT interruptions. We take
                over, so you stay focused on what matters most - growing your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
