import { Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivateSectorIndustry() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-[60vh]">
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-8">
            <Users className="h-10 w-10 text-orange-500" />
            <h1 className="text-3xl font-bold text-orange-600">Private Sector IT Solutions</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            We provide scalable business solutions, enterprise applications, growth-focused
            infrastructure, and cost optimization for private companies.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Enterprise resource planning (ERP)</li>
            <li>Custom business applications</li>
            <li>Cloud migration & optimization</li>
            <li>IT infrastructure for growth</li>
            <li>Cost-effective managed services</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
