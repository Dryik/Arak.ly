import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Shield, Cloud, Radio, Code, Globe, HardDrive, Building } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Server,
      title: 'Networking & Data Centers',
      description:
        'Design, build, and upgrade networks and server rooms with fiber, structured cabling, and full infrastructure setup.',
      features: [
        'Network Design',
        'Data Center Setup',
        'Fiber Installation',
        'Infrastructure Upgrade',
      ],
    },
    {
      icon: Shield,
      title: 'IT Support & MSP',
      description:
        'Complete managed services with RMM tools, monitoring, patching, endpoint support, and on-site coverage.',
      features: ['24/7 Monitoring', 'Remote Management', 'Hardware Support', 'Technical Coverage'],
    },
    {
      icon: Cloud,
      title: 'Cloud & Cybersecurity',
      description:
        'Cloud migration, Microsoft 365, backup solutions, firewall, antivirus, VPNs, and comprehensive data protection.',
      features: ['Cloud Migration', 'Microsoft 365', 'Firewall Management', 'Data Protection'],
    },
    {
      icon: Radio,
      title: 'Communication Infrastructure',
      description:
        'Telecom towers construction, upgrades, civil work, microwave links, radio systems, and telco projects.',
      features: ['Tower Construction', 'Microwave Links', 'Radio Systems', 'Civil Work'],
    },
    {
      icon: Code,
      title: 'Web & App Development',
      description:
        'Custom website design, platforms, portals, and applications tailored to your business needs.',
      features: ['Website Design', 'Custom Platforms', 'Mobile Apps', 'Portal Development'],
    },
    {
      icon: Globe,
      title: 'Hosting & Domains',
      description:
        'Domain registration, fast hosting solutions, cPanel, VPS, and scalable cloud hosting services.',
      features: ['Domain Registration', 'Web Hosting', 'VPS Solutions', 'Cloud Hosting'],
    },
    {
      icon: HardDrive,
      title: 'Hardware Supply & Repair',
      description:
        'PCs, servers, routers, switches procurement and maintenance with certified repair services.',
      features: [
        'Hardware Procurement',
        'Server Solutions',
        'Network Equipment',
        'Repair Services',
      ],
    },
    {
      icon: Building,
      title: 'Business Solutions',
      description:
        'Microsoft 365, ERP systems, email solutions, backup systems - everything your staff needs to operate.',
      features: ['Microsoft 365', 'ERP Systems', 'Email Solutions', 'Backup Systems'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">Core Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions designed to keep your business running smoothly and securely.
            From infrastructure to applications, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-arak transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
            >
              <CardHeader className="pb-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium">
            💡 Need a custom solution? We build exactly what you need.
          </div>
        </div>
      </div>
    </section>
  );
};
