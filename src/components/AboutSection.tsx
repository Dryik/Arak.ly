import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  
  const badges = [
    { icon: CheckCircle, text: 'ISO Certified' },
    { icon: Award, text: 'Certified Engineers' },
    { icon: Users, text: 'Enterprise Partners' },
    { icon: Zap, text: '24/7 Operations' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate main content on scroll
      gsap.fromTo(
        contentRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate badges with stagger
      gsap.fromTo(
        badgesRef.current?.children || [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: badgesRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate right side cards
      gsap.fromTo(
        cardsRef.current?.children || [],
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-6">
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

            <div ref={badgesRef} className="grid grid-cols-2 gap-4">
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

          <div ref={cardsRef} className="space-y-6">
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
