import { Landmark } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function GovernmentIndustry() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-[60vh]">
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-8">
            <Landmark className="h-10 w-10 text-purple-500" />
            <h1 className="text-3xl font-bold text-purple-600">Government IT Solutions</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            We deliver secure government networks, citizen service platforms, data sovereignty, and
            regulatory compliance for ministries and agencies.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Secure government intranets</li>
            <li>Citizen service portals</li>
            <li>Data sovereignty solutions</li>
            <li>Regulatory compliance (GDPR, etc.)</li>
            <li>IT modernization for public sector</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
