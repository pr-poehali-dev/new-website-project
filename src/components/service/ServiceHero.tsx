import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { ServiceData } from './ServiceData';

interface ServiceHeroProps {
  service: ServiceData;
  isVisible: boolean;
  sectionRef: React.RefObject<HTMLDivElement>;
  onOrderClick: () => void;
}

const ServiceHero = ({ service, isVisible, sectionRef, onOrderClick }: ServiceHeroProps) => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="container mx-auto px-6">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <Icon name="ArrowLeft" size={20} />
          <span>Вернуться к услугам</span>
        </button>

        <div 
          ref={sectionRef}
          className={`grid lg:grid-cols-2 gap-12 items-start mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-6">
              <Icon name={service.icon} size={18} />
              <span className="text-sm font-medium">Услуга</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {service.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {service.subtitle}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {service.description}
            </p>

            <Button size="lg" onClick={onOrderClick}>
              <Icon name="Sparkles" size={20} className="mr-2" />
              {service.cta}
            </Button>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[600px] hover:scale-[1.02] transition-transform duration-500">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
