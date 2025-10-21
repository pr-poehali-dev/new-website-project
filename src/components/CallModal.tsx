import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: 'menu' | 'default';
}

const CallModal = ({ isOpen, onClose, source = 'default' }: CallModalProps) => {
  if (!isOpen) return null;
  const [showForm, setShowForm] = useState(source === 'menu');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const phoneNumber = '+7 (800) 555-35-35';
  const phoneLink = 'tel:+78005553535';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
      onClose();
    }, 1500);
  };

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

        {showForm ? (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Оставить заявку</h2>
              <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email (необязательно)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Комментарий (необязательно)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="flex flex-col gap-3">
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </>
                  )}
                </Button>
                
                <Button 
                  type="button"
                  size="lg" 
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowForm(false)}
                >
                  Позвонить вместо этого
                </Button>
              </div>
            </form>
          </>
        ) : (
          <>
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
                onClick={() => setShowForm(true)}
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Оставить заявку
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Звонок бесплатный по всей России
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CallModal;