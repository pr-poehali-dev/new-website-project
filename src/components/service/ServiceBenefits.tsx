import Icon from '@/components/ui/icon';
import { ServiceBenefit } from './ServiceData';

interface ServiceBenefitsProps {
  benefits: ServiceBenefit[];
  isVisible: boolean;
  sectionRef: React.RefObject<HTMLDivElement>;
}

const ServiceBenefits = ({ benefits, isVisible, sectionRef }: ServiceBenefitsProps) => {
  return (
    <div 
      ref={sectionRef}
      className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Преимущества</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-muted/30 rounded-2xl p-6 hover:bg-muted/50 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name={benefit.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBenefits;
