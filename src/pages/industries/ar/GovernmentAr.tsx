import { Landmark } from 'lucide-react';
import { HeaderAr } from '@/components/HeaderAr';
import { FooterAr } from '@/components/FooterAr';

export default function GovernmentIndustryAr() {
  return (
    <>
      <HeaderAr />
      <main className="pt-20 min-h-[60vh]">
        <section className="container mx-auto px-4 py-16" dir="rtl">
          <div className="flex items-center gap-4 mb-8">
            <Landmark className="h-10 w-10 text-purple-500" />
            <h1 className="text-3xl font-bold text-purple-600">حلول تكنولوجيا المعلومات للحكومة</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            نقدم شبكات حكومية آمنة، ومنصات خدمات المواطنين، وحلول سيادة البيانات، والامتثال التنظيمي
            للوزارات والهيئات.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>شبكات داخلية حكومية آمنة</li>
            <li>بوابات خدمات المواطنين</li>
            <li>حلول سيادة البيانات</li>
            <li>الامتثال التنظيمي (GDPR، إلخ)</li>
            <li>تحديث البنية التحتية لتكنولوجيا المعلومات للقطاع العام</li>
          </ul>
        </section>
      </main>
      <FooterAr />
    </>
  );
}
