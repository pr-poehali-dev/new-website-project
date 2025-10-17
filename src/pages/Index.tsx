import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Catalog from '@/components/Catalog';
import Production from '@/components/Production';
import Reviews from '@/components/Reviews';
import Blog from '@/components/Blog';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Catalog />
      <Production />
      <Reviews />
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;