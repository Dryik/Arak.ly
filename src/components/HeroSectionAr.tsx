import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';

export const HeroSectionAr = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16" dir="rtl">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center bg-arak-blue-light text-primary px-4 py-2 rounded-full text-xs font-medium">
              <Zap className="h-4 w-4 ml-2" />
              الشريك التقني الرائد في ليبيا
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              خدمات الاتصالات و
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                {' '}
                تكنولوجيا المعلومات{' '}
              </span>
              الشاملة في ليبيا
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              تقدم ARAK حلول الخدمات المدارة والبنية التحتية والأمن السيبراني على مستوى المؤسسات.
              ركز على عملك بينما نتولى نحن جميع احتياجات تكنولوجيا المعلومات مع ضمان وقت تشغيل
              99.999%.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            >
              <a
                href="#services"
                className="inline-flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('services');
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.history.pushState(null, '', '#services');
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                aria-label="انتقل إلى قسم الخدمات"
              >
                شاهد خدماتنا
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">99.999%</div>
              <div className="text-sm text-muted-foreground">ضمان وقت التشغيل</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">دعم فني متخصص</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">500+</div>
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
