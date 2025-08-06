import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Network, 
  Monitor, 
  Cloud, 
  Radio, 
  Code, 
  Server, 
  Wrench, 
  Shield 
} from "lucide-react";

export const ServicesSectionAr = () => {
  const services = [
    {
      icon: Network,
      title: "حلول الشبكات ومراكز البيانات",
      description: "تصميم وبناء وترقية الشبكات وغرف الخوادم",
      features: ["الألياف البصرية والكابلات المهيكلة", "إعداد البنية التحتية الكاملة", "تصميم مراكز البيانات"]
    },
    {
      icon: Monitor,
      title: "دعم تكنولوجيا المعلومات والخدمات المدارة (MSP)",
      description: "أدوات RMM والمراقبة والتصحيح ودعم نقاط النهاية",
      features: ["استبدال الأجهزة", "التغطية التقنية في الموقع", "مراقبة 24/7"]
    },
    {
      icon: Cloud,
      title: "الحلول السحابية والأمن السيبراني",
      description: "ترحيل السحابة و Microsoft 365 والنسخ الاحتياطية",
      features: ["جدار الحماية ومكافح الفيروسات", "شبكات VPN وحماية البيانات", "الامتثال الأمني"]
    },
    {
      icon: Radio,
      title: "البنية التحتية للاتصالات",
      description: "بناء وترقية أبراج الاتصالات والأعمال المدنية",
      features: ["روابط الميكروويف", "أنظمة الراديو", "مشاريع الاتصالات"]
    },
    {
      icon: Code,
      title: "تطوير الويب والتطبيقات",
      description: "تصميم المواقع والمنصات المخصصة والبوابات والتطبيقات",
      features: ["تطوير مخصص", "واجهات مستخدم حديثة", "تطبيقات متجاوبة"]
    },
    {
      icon: Server,
      title: "الاستضافة والنطاقات",
      description: "تسجيل النطاقات والاستضافة السريعة و cPanel و VPS والاستضافة السحابية",
      features: ["استضافة عالية الأداء", "نطاقات متعددة", "حلول VPS"]
    },
    {
      icon: Wrench,
      title: "توريد وإصلاح الأجهزة",
      description: "أجهزة الكمبيوتر والخوادم وأجهزة التوجيه والمفاتيح — المشتريات + الصيانة",
      features: ["مشتريات الأجهزة", "خدمات الصيانة", "استبدال سريع"]
    },
    {
      icon: Shield,
      title: "الحلول التجارية والتراخيص",
      description: "Microsoft 365 وأنظمة ERP والبريد الإلكتروني والنسخ الاحتياطي — كل ما يحتاجه موظفوك للعمل",
      features: ["تراخيص Microsoft", "أنظمة ERP", "حلول البريد الإلكتروني"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            خدماتنا <span className="text-primary">الأساسية</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات تكنولوجيا المعلومات والاتصالات المصممة لتلبية احتياجات عملك الفريدة
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 ml-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            تحتاج إلى حل مخصص؟ <span className="text-primary font-medium">دعنا نناقش متطلباتك الفريدة</span>
          </p>
        </div>
      </div>
    </section>
  );
};