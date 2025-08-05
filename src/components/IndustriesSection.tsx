import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Building2, GraduationCap, Landmark, Users, ArrowRight } from "lucide-react";

export const IndustriesSection = () => {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant IT infrastructure, medical device integration, and secure patient data management systems.",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Building2,
      title: "Banking & Finance",
      description: "High-security financial systems, compliance management, disaster recovery, and 24/7 monitoring.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Digital learning platforms, campus networking, student management systems, and educational technology.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Landmark,
      title: "Government",
      description: "Secure government networks, citizen services platforms, data sovereignty, and regulatory compliance.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "Private Sector",
      description: "Scalable business solutions, enterprise applications, growth-focused infrastructure, and cost optimization.",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-primary">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We customize our solutions to match the unique needs and compliance requirements of each sector, 
            delivering industry-specific expertise across Libya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-arak transition-all duration-300 hover:-translate-y-2 bg-background border-border/50 overflow-hidden"
            >
              <CardHeader className="relative">
                <div className={`h-16 w-16 ${industry.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <industry.icon className={`h-8 w-8 ${industry.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {industry.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform text-sm font-medium">
                  Learn more about our {industry.title.toLowerCase()} solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-background rounded-2xl p-8 shadow-card-arak border border-border">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Sector-Specific Expertise</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each industry has unique challenges and requirements. Our certified engineers understand 
              regulatory compliance, security standards, and operational needs specific to your sector.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Industry Sectors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};