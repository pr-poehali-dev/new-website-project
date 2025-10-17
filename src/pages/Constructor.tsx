import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AiConstructor from '@/components/AiConstructor';

const Constructor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <AiConstructor />
      </main>
      <Footer />
    </div>
  );
};

export default Constructor;
