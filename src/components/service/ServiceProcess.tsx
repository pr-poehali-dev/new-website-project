import { ServiceProcess as ProcessStep } from './ServiceData';

interface ServiceProcessProps {
  process: ProcessStep[];
  isVisible: boolean;
  sectionRef: React.RefObject<HTMLDivElement>;
}

const ServiceProcess = ({ process, isVisible, sectionRef }: ServiceProcessProps) => {
  return (
    <div 
      ref={sectionRef}
      className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Как мы работаем</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              
              {index < process.length - 1 && (
                <div className="hidden md:block absolute top-6 left-12 right-0 h-0.5 bg-muted" style={{ width: 'calc(100% + 1.5rem)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;
