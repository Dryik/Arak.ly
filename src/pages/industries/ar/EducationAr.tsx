import { GraduationCap } from 'lucide-react';
import { HeaderAr } from '@/components/HeaderAr';
import { FooterAr } from '@/components/FooterAr';

export default function EducationIndustryAr() {
  return (
    <>
      <HeaderAr />
      <main className="pt-20 min-h-[60vh]">
        <section className="container mx-auto px-4 py-16" dir="rtl">
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="h-10 w-10 text-blue-500" />
            <h1 className="text-3xl font-bold text-blue-600">
              حلول تكنولوجيا المعلومات للقطاع التعليمي
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            نبني منصات تعلم إلكتروني، وشبكات حرم جامعي، وأنظمة إدارة الطلاب، ونوفر تقنيات تعليمية
            للمدارس والجامعات.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>منصات تعلم إلكتروني (LMS)</li>
            <li>شبكات Wi‑Fi للحرم الجامعي</li>
            <li>أنظمة معلومات الطلاب</li>
            <li>تقنيات الصف التفاعلية</li>
            <li>دعم فني للهيئة التدريسية والطلاب</li>
          </ul>
        </section>
      </main>
      <FooterAr />
    </>
  );
}
