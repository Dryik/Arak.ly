import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

export const HeroSectionAr = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16" dir="rtl">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center bg-arak-blue-light text-primary px-4 py-2 rounded-full text-xs font-medium">
              <Zap className="h-4 w-4 ml-2" />
              الشريك التقني الرائد في ليبيا
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              خدمات الاتصالات و
              <span className="text-transparent bg-clip-text bg-gradient-primary"> تكنولوجيا المعلومات</span>
              <br />الشاملة في ليبيا
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              تقدم ARAK حلول الخدمات المدارة والبنية التحتية والأمن السيبراني على مستوى المؤسسات. 
              ركز على عملك بينما نتولى نحن جميع احتياجات تكنولوجيا المعلومات مع ضمان وقت تشغيل 99.9999%.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-elevated group">
              ابدأ معنا اليوم
              <ArrowRight className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform rotate-180" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              شاهد خدماتنا
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.9999%</div>
              <div className="text-sm text-muted-foreground">ضمان وقت التشغيل</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">دعم فني متخصص</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">مشروع منجز</div>
            </div>
          </div>
        </div>
        
        {/* Visual Element */}
        <div className="relative">
          <div className="relative bg-gradient-card rounded-2xl p-8 shadow-elevated">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground">الأمن السيبراني</h3>
                <p className="text-sm text-muted-foreground">حماية المؤسسات</p>
              </div>
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground">البنية التحتية</h3>
                <p className="text-sm text-muted-foreground">أداء عالي</p>
              </div>
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground">الخدمات المدارة</h3>
                <p className="text-sm text-muted-foreground">مراقبة 24/7</p>
              </div>
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <ArrowRight className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground">الحلول السحابية</h3>
                <p className="text-sm text-muted-foreground">قابلة للتوسع وآمنة</p>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-full p-4 shadow-arak animate-pulse">
            <Shield className="h-6 w-6" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-arak-gray text-white rounded-full p-4 shadow-arak">
            <Zap className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};