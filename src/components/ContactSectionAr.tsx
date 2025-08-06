import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, CheckCircle, Zap, Shield } from "lucide-react";

export const ContactSectionAr = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ابدأ مشروعك <span className="text-primary">التقني اليوم</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            احصل على استشارة مجانية مع خبرائنا واكتشف كيف يمكن لـ ARAK تحويل بنيتك التحتية التقنية
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-elevated">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">احصل على استشارة مجانية</CardTitle>
              <CardDescription>
                املأ النموذج وسيتواصل معك أحد خبرائنا خلال 24 ساعة
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">الاسم الكامل</label>
                  <Input placeholder="أدخل اسمك الكامل" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">البريد الإلكتروني</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">اسم الشركة</label>
                  <Input placeholder="اسم شركتك" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">رقم الهاتف</label>
                  <Input placeholder="+218 XX XXX XXXX" className="bg-background/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">تفاصيل المشروع</label>
                <Textarea 
                  placeholder="أخبرنا عن احتياجاتك التقنية والتحديات التي تواجهها..."
                  className="bg-background/50 min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-gradient-primary text-primary-foreground shadow-elevated">
                احصل على استشارة مجانية
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Info & CTA */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-gradient-card border-0 shadow-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">معلومات الاتصال</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mt-1 ml-4" />
                    <div>
                      <p className="font-medium text-foreground">الهاتف</p>
                      <p className="text-muted-foreground">+218 XX XXX XXXX</p>
                      <p className="text-muted-foreground">+218 XX XXX XXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mt-1 ml-4" />
                    <div>
                      <p className="font-medium text-foreground">البريد الإلكتروني</p>
                      <p className="text-muted-foreground">info@arak.ly</p>
                      <p className="text-muted-foreground">support@arak.ly</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-1 ml-4" />
                    <div>
                      <p className="font-medium text-foreground">الموقع</p>
                      <p className="text-muted-foreground">طرابلس، ليبيا</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mt-1 ml-4" />
                    <div>
                      <p className="font-medium text-foreground">ساعات العمل</p>
                      <p className="text-muted-foreground">الأحد - الخميس: 8:00 ص - 6:00 م</p>
                      <p className="text-muted-foreground">دعم طوارئ: 24/7</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Why Start Now Card */}
            <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">لماذا تبدأ الاستشارة الآن؟</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mt-0.5 ml-3 flex-shrink-0" />
                    <span>تقييم مجاني لبنيتك التحتية الحالية</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 mt-0.5 ml-3 flex-shrink-0" />
                    <span>خطة مخصصة لتحسين الأداء</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 mt-0.5 ml-3 flex-shrink-0" />
                    <span>تحليل أمني شامل لحماية بياناتك</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-center font-medium">
                    أسعارنا مرنة وودية للميزانية — خاصة للشركات الجديدة والناشئة
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