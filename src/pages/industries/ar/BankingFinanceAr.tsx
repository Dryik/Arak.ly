import { Building2 } from 'lucide-react';
import { HeaderAr } from '@/components/HeaderAr';
import { FooterAr } from '@/components/FooterAr';

export default function BankingFinanceIndustryAr() {
  return (
    <>
      <HeaderAr />
      <main className="pt-20 min-h-[60vh]">
        <section className="container mx-auto px-4 py-16" dir="rtl">
          <div className="flex items-center gap-4 mb-8">
            <Building2 className="h-10 w-10 text-green-500" />
            <h1 className="text-3xl font-bold text-green-600">
              حلول تكنولوجيا المعلومات للبنوك والتمويل
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            نوفر بنية مالية عالية الأمان، وإدارة الامتثال، وخطط استمرارية الأعمال، ومراقبة على مدار
            الساعة للمؤسسات المالية.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>منصات مصرفية إلكترونية آمنة</li>
            <li>كشف ومنع الاحتيال</li>
            <li>خطط التعافي من الكوارث</li>
            <li>الامتثال التنظيمي (PCI DSS، إلخ)</li>
            <li>مراقبة البنية التحتية 24/7</li>
          </ul>
        </section>
      </main>
      <FooterAr />
    </>
  );
}
