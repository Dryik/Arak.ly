import { Building2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function BankingFinanceIndustry() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-[60vh]">
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-8">
            <Building2 className="h-10 w-10 text-green-500" />
            <h1 className="text-3xl font-bold text-green-600">Banking & Finance IT Solutions</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            We provide high-security financial systems, compliance management, disaster recovery,
            and 24/7 monitoring for banks and financial institutions.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Secure online banking platforms</li>
            <li>Fraud detection & prevention</li>
            <li>Disaster recovery planning</li>
            <li>Regulatory compliance (PCI DSS, etc.)</li>
            <li>24/7 infrastructure monitoring</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
