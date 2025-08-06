export const PartnersSectionAr = () => {
  const partners = [
    { name: "HPE", logo: "🏢" },
    { name: "Dell", logo: "💻" },
    { name: "Cisco", logo: "🌐" },
    { name: "Fortinet", logo: "🛡️" },
    { name: "Huawei", logo: "📱" },
    { name: "ZTE", logo: "📡" },
    { name: "Microsoft", logo: "🪟" },
    { name: "VMware", logo: "☁️" }
  ];

  return (
    <section id="partners" className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            شركاؤنا <span className="text-primary">التقنيون</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نتعاون مع أفضل الشركات التقنية العالمية لضمان تقديم أحدث الحلول وأكثرها موثوقية
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gradient-card rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-primary/20"
            >
              <div className="text-4xl mb-3">{partner.logo}</div>
              <span className="text-sm font-medium text-foreground">{partner.name}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            شراكات استراتيجية تضمن <span className="text-primary font-medium">الحصول على أفضل التقنيات والدعم</span>
          </p>
        </div>
      </div>
    </section>
  );
};