import { useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface CallModalProps {
  onClose: () => void;
}

const CallModal = ({ onClose }: CallModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const phoneNumber = '+7 (800) 555-35-35';
  const phoneLink = 'tel:+78005553535';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-background rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in fade-in-0 zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Phone" size={32} className="text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Позвоните нам</h2>
          <p className="text-muted-foreground">Мы работаем ежедневно с 9:00 до 21:00</p>
        </div>

        <div className="bg-muted/30 rounded-2xl p-6 mb-6 text-center">
          <a 
            href={phoneLink}
            className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            {phoneNumber}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <Button 
            size="lg" 
            className="w-full"
            onClick={() => window.location.href = phoneLink}
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Позвонить сейчас
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="w-full"
            onClick={onClose}
          >
            Закрыть
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Звонок бесплатный по всей России
        </p>
      </div>
    </div>
  );
};

export default CallModal;
