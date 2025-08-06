import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Banknote, GraduationCap, Building, Building2 } from "lucide-react";

export const IndustriesSectionAr = () => {
  const industries = [
    {
      icon: Heart,
      title: "الرعاية الصحية",
      description: "حلول تكنولوجيا المعلومات المتخصصة للمستشفيات والعيادات ومقدمي الرعاية الصحية مع التركيز على الامتثال وأمان البيانات.",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Banknote,
      title: "البنوك والتمويل",
      description: "بنية تحتية آمنة وموثوقة للمؤسسات المالية مع الامتثال للوائح المصرفية ومعايير الأمان العالية.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: GraduationCap,
      title: "التعليم",
      description: "حلول تقنية حديثة للجامعات والمدارس والمؤسسات التعليمية لتعزيز بيئة التعلم الرقمي.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Building,
      title: "الحكومة",
      description: "خدمات تكنولوجيا المعلومات للجهات الحكومية مع التركيز على الأمان والموثوقية والامتثال للمعايير الحكومية.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Building2,
      title: "القطاع الخاص والشركات الناشئة",
      description: "حلول مرنة وقابلة للتوسع للشركات من جميع الأحجام، من الشركات الناشئة إلى المؤسسات الكبيرة.",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-subtle" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            القطاعات التي <span className="text-primary">نخدمها</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نخصص عملنا لتلبية احتياجات كل قطاع، مما يضمن حلولاً مصممة خصيصاً لمتطلباتك الفريدة
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${industry.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <industry.icon className={`h-6 w-6 ${industry.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold">{industry.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{industry.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-primary hover:text-primary/80 transition-colors cursor-pointer">
                  <span className="text-sm font-medium ml-2">اعرف المزيد</span>
                  <ArrowLeft className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-elevated">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">خبرة متخصصة في القطاعات</h3>
            <p className="text-muted-foreground">
              نحن نفهم التحديات الفريدة لكل قطاع ونقدم حلولاً مصممة خصيصاً لتلبية متطلباتك المحددة
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">معدل الامتثال</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">قطاعات صناعية</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">تغطية الدعم</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">رضا العملاء</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};