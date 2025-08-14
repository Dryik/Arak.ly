import { GraduationCap } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function EducationIndustry() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-[60vh]">
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="h-10 w-10 text-blue-500" />
            <h1 className="text-3xl font-bold text-blue-600">Education IT Solutions</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            We build digital learning platforms, campus networks, student management systems, and
            provide educational technology for schools and universities.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Online learning platforms (LMS)</li>
            <li>Campus Wi-Fi & networking</li>
            <li>Student information systems</li>
            <li>Interactive classroom technology</li>
            <li>IT support for faculty & students</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
