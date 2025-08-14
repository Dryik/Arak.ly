import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';

export const FooterAr = () => {
  return (
    <footer className="bg-black text-white py-16" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/images/e0b5ad18-da21-4474-8389-2ac588a27ccc.png"
                alt="شعار ARAK (أبيض) - للاتصالات وخدمات تكنولوجيا المعلومات"
                className="h-20 w-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              ARAK هي شركة تقنية ليبية رائدة تقدم خدمات الاتصالات وتكنولوجيا المعلومات الشاملة مع
              ضمان وقت تشغيل 99.999%.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61579130677510"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">خدماتنا</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to={`${ROUTES.homeAr}#services`}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  الخدمات المدارة
                </Link>
              </li>
              <li>
                <Link
                  to={`${ROUTES.homeAr}#services`}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  الأمن السيبراني
                </Link>
              </li>
              <li>
                <Link
                  to={`${ROUTES.homeAr}#services`}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  البنية التحتية
                </Link>
              </li>
              <li>
                <Link
                  to={`${ROUTES.homeAr}#services`}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  الحلول السحابية
                </Link>
              </li>
              <li>
                <Link
                  to={`${ROUTES.homeAr}#services`}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  تطوير التطبيقات
                </Link>
              </li>
              <li>
                <Link
                  to={`${ROUTES.homeAr}#services`}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  الاستضافة والنطاقات
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">القطاعات</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to={ROUTES.industriesAr.healthcare}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  الرعاية الصحية
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.industriesAr.bankingFinance}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  البنوك والتمويل
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.industriesAr.education}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  التعليم
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.industriesAr.government}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  الحكومة
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.industriesAr.privateSector}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  القطاع الخاص
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">اتصل بنا</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 ml-3 text-primary" />
                <span className="text-white/80">+218 XX XXX XXXX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 ml-3 text-primary" />
                <span className="text-white/80">info@arak.ly</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 ml-3 text-primary mt-0.5" />
                <span className="text-white/80">طرابلس، ليبيا</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>&copy; 2024 ARAK Communications & IT Services. جميع الحقوق محفوظة.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to={ROUTES.privacyAr} className="hover:text-primary transition-colors">
              سياسة الخصوصية
            </Link>
            <Link to={ROUTES.termsAr} className="hover:text-primary transition-colors">
              شروط الخدمة
            </Link>
            <Link to={ROUTES.cookiesAr} className="hover:text-primary transition-colors">
              ملفات تعريف الارتباط
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
