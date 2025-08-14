import { Heart } from 'lucide-react';
import { HeaderAr } from '@/components/HeaderAr';
import { FooterAr } from '@/components/FooterAr';

export default function HealthcareIndustryAr() {
  return (
    <>
      <HeaderAr />
      <main className="pt-20 min-h-[60vh]">
        <section className="container mx-auto px-4 py-16" dir="rtl">
          <div className="flex items-center gap-4 mb-8">
            <Heart className="h-10 w-10 text-red-500" />
            <h1 className="text-3xl font-bold text-red-600">
              حلول تكنولوجيا المعلومات للقطاع الصحي
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            نقدم بنية تحتية متوافقة مع HIPAA، وتكامل أجهزة طبية، وإدارة آمنة لبيانات المرضى، ومنصات
            الطب عن بُعد للمستشفيات والعيادات.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>أنظمة EMR/EHR آمنة</li>
            <li>ربط الأجهزة الطبية</li>
            <li>خصوصية البيانات والامتثال</li>
            <li>الطب عن بُعد والرعاية عن بُعد</li>
            <li>دعم فني 24/7 للأنظمة الحرجة</li>
          </ul>
        </section>
      </main>
      <FooterAr />
    </>
  );
}
