import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceDetails from '@/components/service/ServiceDetails';
import ServiceBenefits from '@/components/service/ServiceBenefits';
import ServiceProcess from '@/components/service/ServiceProcess';
import ServiceCTA from '@/components/service/ServiceCTA';
import { services } from '@/components/service/ServiceData';

const ServicePage = () => {
  const { serviceId } = useParams();
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === section1Ref.current) setIsVisible1(true);
            if (entry.target === section2Ref.current) setIsVisible2(true);
            if (entry.target === section3Ref.current) setIsVisible3(true);
            if (entry.target === section4Ref.current) setIsVisible4(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);

    return () => observer.disconnect();
  }, []);

  const service = serviceId ? services[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Услуга не найдена</h1>
          <p className="text-muted-foreground">Проверьте правильность адреса</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <ServiceHero 
        service={service}
        isVisible={isVisible1}
        sectionRef={section1Ref}
        onOrderClick={() => setShowOrderModal(true)}
      />

      <ServiceDetails 
        details={service.details}
        isVisible={isVisible2}
        sectionRef={section2Ref}
      />

      <ServiceBenefits 
        benefits={service.benefits}
        isVisible={isVisible3}
        sectionRef={section3Ref}
      />

      <ServiceProcess 
        process={service.process}
        isVisible={isVisible4}
        sectionRef={section4Ref}
      />

      <div className="container mx-auto px-6 mb-16">
        <ServiceCTA onOrderClick={() => setShowOrderModal(true)} />
      </div>

      <Footer />
      
      {showOrderModal && (
        <OrderModal onClose={() => setShowOrderModal(false)} />
      )}
    </div>
  );
};

export default ServicePage;
