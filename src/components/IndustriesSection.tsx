import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Building2, GraduationCap, Landmark, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';

export const IndustriesSection = () => {
  const industries = [
    {
      icon: Heart,
      title: 'Healthcare',
      description:
        'HIPAA-compliant IT infrastructure, medical device integration, and secure patient data management systems.',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      slug: 'healthcare',
    },
    {
      icon: Building2,
      title: 'Banking & Finance',
      description:
        'High-security financial systems, compliance management, disaster recovery, and 24/7 monitoring.',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      slug: 'banking-finance',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description:
        'Digital learning platforms, campus networking, student management systems, and educational technology.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      slug: 'education',
    },
    {
      icon: Landmark,
      title: 'Government',
      description:
        'Secure government networks, citizen services platforms, data sovereignty, and regulatory compliance.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      slug: 'government',
    },
    {
      icon: Users,
      title: 'Private Sector',
      description:
        'Scalable business solutions, enterprise applications, growth-focused infrastructure, and cost optimization.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      slug: 'private-sector',
    },
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Industries We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We customize our solutions to match the unique needs and compliance requirements of each
            sector, delivering industry-specific expertise across Libya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              to={
                ROUTES.industries[
                  industry.slug === 'banking-finance'
                    ? 'bankingFinance'
                    : industry.slug === 'private-sector'
                    ? 'privateSector'
                    : industry.slug
                ] as string
              }
              className="block"
            >
              <Card className="group hover:shadow-arak transition-all duration-300 hover:-translate-y-2 bg-background border-border/50 overflow-hidden">
                <CardHeader className="relative">
                  <div
                    className={`h-16 w-16 ${industry.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <industry.icon className={`h-8 w-8 ${industry.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {industry.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Learn more about what we offer
                    </span>
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
