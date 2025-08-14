import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Users, Zap, CheckCircle, Globe } from 'lucide-react';

export const AboutSectionAr = () => {
  const badges = [
    { icon: Shield, text: 'مهندسون معتمدون' },
    { icon: Award, text: 'شراكات تقنية قوية' },
    { icon: Users, text: 'دعم 24/7' },
    { icon: Zap, text: 'حلول مبتكرة' },
    { icon: CheckCircle, text: 'جودة مضمونة' },
    { icon: Globe, text: 'خبرة محلية' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                لماذا تختار <span className="text-primary">ARAK</span>؟
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                ARAK هي شركة تقنية ليبية تقدم خدمات الاتصالات وتكنولوجيا المعلومات الشاملة — مع تخصص
                أساسي في الخدمات المدارة (MSP) لمساعدة الشركات على التركيز في عملياتها بينما نتولى
                نحن جميع احتياجات تكنولوجيا المعلومات.
              </p>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {badges.map((badge, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center justify-center p-3 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <badge.icon className="h-4 w-4 ml-2" />
                  {badge.text}
                </Badge>
              ))}
            </div>
          </div>

          {/* Commitment Card */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">التزاماتنا</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 ml-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      حلول تكنولوجيا المعلومات الشاملة تحت سقف واحد
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 ml-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      ضمان وقت تشغيل 99.999% للبنية التحتية الخاصة بك
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 ml-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      مهندسون معتمدون مع خبرة عملية حقيقية
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 ml-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      نحن نقدم نتائج على مستوى المؤسسات، حتى للشركات الناشئة
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 ml-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      شراكات قوية مع الموردين: HPE، Dell، Cisco، Fortinet، Huawei، ZTE
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 ml-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      نحن نفهم احتياجات القطاعات المتخصصة: البنوك والتعليم والصحة والحكومة
                    </span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-primary font-medium text-center">
                    بمجرد شراكتك مع ARAK، ستتوقف عن التفكير في انقطاع تكنولوجيا المعلومات. نحن نتولى
                    الأمر، لتبقى أنت مركزاً على عملك.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
