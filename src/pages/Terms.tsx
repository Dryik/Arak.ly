import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Terms() {
  return (
    <>
      <Header />
      <main className="pt-20 container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground">
          This is a placeholder Terms of Service page. Replace with legal text.
        </p>
      </main>
      <Footer />
    </>
  );
}
