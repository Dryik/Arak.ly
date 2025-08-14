import { Users } from 'lucide-react';
import { HeaderAr } from '@/components/HeaderAr';
import { FooterAr } from '@/components/FooterAr';

export default function PrivateSectorIndustryAr() {
  return (
    <>
      <HeaderAr />
      <main className="pt-20 min-h-[60vh]">
        <section className="container mx-auto px-4 py-16" dir="rtl">
          <div className="flex items-center gap-4 mb-8">
            <Users className="h-10 w-10 text-orange-500" />
            <h1 className="text-3xl font-bold text-orange-600">
              حلول تكنولوجيا المعلومات للقطاع الخاص
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            نوفر حلول أعمال قابلة للتوسع، وتطبيقات مؤسسية، وترحيل سحابي مُحسّن، وخدمات مُدارة فعّالة
            التكلفة للشركات.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>أنظمة تخطيط موارد المؤسسات (ERP)</li>
            <li>تطبيقات أعمال مُخصّصة</li>
            <li>ترحيل السحابة وتحسين الأداء</li>
            <li>بنية تحتية لتكنولوجيا المعلومات للنمو</li>
            <li>خدمات مُدارة بتكلفة فعّالة</li>
          </ul>
        </section>
      </main>
      <FooterAr />
    </>
  );
}
