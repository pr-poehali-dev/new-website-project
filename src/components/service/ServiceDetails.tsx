import Icon from '@/components/ui/icon';

interface ServiceDetailsProps {
  details: string[];
  isVisible: boolean;
  sectionRef: React.RefObject<HTMLDivElement>;
}

const ServiceDetails = ({ details, isVisible, sectionRef }: ServiceDetailsProps) => {
  return (
    <div 
      ref={sectionRef}
      className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Что мы предлагаем</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {details.map((detail, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <Icon name="Check" size={16} className="text-primary" />
              </div>
              <p className="text-muted-foreground leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
