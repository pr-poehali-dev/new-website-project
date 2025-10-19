import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ServiceCTAProps {
  onOrderClick: () => void;
}

const ServiceCTA = ({ onOrderClick }: ServiceCTAProps) => {
  return (
    <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Готовы обсудить проект?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Оставьте заявку, и мы свяжемся с вами в течение 15 минут, чтобы обсудить детали и рассчитать стоимость
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          onClick={onOrderClick}
        >
          <Icon name="Phone" size={20} className="mr-2" />
          Оставить заявку
        </Button>
      </div>
    </div>
  );
};

export default ServiceCTA;
