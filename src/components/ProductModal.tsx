import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import CallModal from '@/components/CallModal';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
}

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, open, onClose }: ProductModalProps) => {
  const navigate = useNavigate();
  const [showCallModal, setShowCallModal] = useState(false);

  if (!product) return null;

  const advantages = [
    {
      icon: 'Award',
      title: 'Премиум качество',
      description: 'Изготовлено из высококачественных материалов'
    },
    {
      icon: 'Sparkles',
      title: 'Уникальный дизайн',
      description: 'Каждое изделие создается индивидуально'
    },
    {
      icon: 'Shield',
      title: 'Долговечность',
      description: 'Сохранит вид на долгие годы'
    },
    {
      icon: 'Palette',
      title: 'Персонализация',
      description: 'Возможность нанесения логотипа'
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <Badge className="mb-4">В наличии</Badge>
            <div className="text-3xl font-bold text-primary mb-6">
              {product.price.toLocaleString('ru-RU')} ₽
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="flex gap-3 mb-6">
              <Button size="lg" className="flex-1">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Заказать
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="flex-1"
                onClick={() => {
                  onClose();
                  navigate('/constructor');
                }}
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                AI Макет
              </Button>
            </div>

            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="font-bold mb-3 flex items-center">
                  <Icon name="Info" size={18} className="mr-2" />
                  Информация о товаре
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Артикул:</span>
                    <span className="font-medium">#{product.id.toString().padStart(6, '0')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Габариты изделия:</span>
                    <span className="font-medium">200 × 150 × 50 мм</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Вес изделия:</span>
                    <span className="font-medium">850 г</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Срок изготовления:</span>
                    <span className="font-medium">10-14 дней</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Гарантия:</span>
                    <span className="font-medium">1 год</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">Преимущества</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {advantages.map((advantage, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <Icon name={advantage.icon} size={24} className="text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{advantage.title}</h4>
                      <p className="text-sm text-muted-foreground">{advantage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Остались вопросы?</h3>
            <p className="text-muted-foreground mb-4">
              Свяжитесь с нами для консультации
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button onClick={() => setShowCallModal(true)}>
                <Icon name="Phone" size={18} className="mr-2" />
                Позвонить
              </Button>
              <Button variant="outline">
                <Icon name="MessageSquare" size={18} className="mr-2" />
                Написать
              </Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
      {showCallModal && <CallModal onClose={() => setShowCallModal(false)} />}
    </Dialog>
  );
};

export default ProductModal;