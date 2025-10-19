import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal = ({ isOpen, onClose }: OrderModalProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert(`Спасибо, ${name}! Мы свяжемся с вами по номеру ${phone}`);
    setName('');
    setPhone('');
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-muted transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Индивидуальный проект проще, чем кажется
          </h2>
          <p className="text-muted-foreground">
            Оставьте контакты — обсудим вашу идею и рассчитаем стоимость за 15 минут
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Ваше имя
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Иван Иванов"
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Номер телефона
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (999) 123-45-67"
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
                Отправка...
              </>
            ) : (
              <>
                <Icon name="Send" size={18} className="mr-2" />
                Отправить заявку
              </>
            )}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </div>
    </div>
  );
};

export default OrderModal;