export const PartnersSection = () => {
  const partners = [
    {
      name: 'HPE',
      description: 'Enterprise Infrastructure',
      logo: '/partners/hpe.svg',
      alt: 'HPE logo',
    },
    {
      name: 'Dell',
      description: 'Computing Solutions',
      logo: '/partners/dell.svg',
      alt: 'Dell logo',
    },
    {
      name: 'Cisco',
      description: 'Networking Technology',
      logo: '/partners/cisco.svg',
      alt: 'Cisco logo',
    },
    {
      name: 'Fortinet',
      description: 'Cybersecurity',
      logo: '/partners/fortinet.svg',
      alt: 'Fortinet logo',
    },
    {
      name: 'Huawei',
      description: 'Telecommunications',
      logo: '/partners/huawei.svg',
      alt: 'Huawei logo',
    },
    {
      name: 'ZTE',
      description: 'Communication Equipment',
      logo: '/partners/zte.svg',
      alt: 'ZTE logo',
    },
    {
      name: 'Microsoft',
      description: 'Cloud & Productivity',
      logo: '/partners/microsoft.svg',
      alt: 'Microsoft logo',
    },
    {
      name: 'VMware',
      description: 'Virtualization',
      logo: '/partners/vmware.svg',
      alt: 'VMware logo',
    },
  ];

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Technology Partners
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We partner with industry leaders to deliver world-class solutions. Our certified
            partnerships ensure you get the best technology with expert implementation and support.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-gradient-card rounded-xl p-6 text-center hover:shadow-arak transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="h-20 bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  loading="lazy"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{partner.name}</h3>
              <p className="text-sm text-muted-foreground">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">Certified Excellence</h3>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-6">
            Our engineering team holds multiple certifications from leading technology vendors,
            ensuring expert deployment, optimization, and support for your IT infrastructure.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">50+</div>
              <div className="text-sm text-primary-foreground/80">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">8+</div>
              <div className="text-sm text-primary-foreground/80">Vendor Partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">10+</div>
              <div className="text-sm text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">100%</div>
              <div className="text-sm text-primary-foreground/80">Genuine Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
