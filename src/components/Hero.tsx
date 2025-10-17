import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '' });
  };

  return (
    <section className="relative pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="bg-card rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative min-h-[600px] lg:min-h-[700px]">
              <img
                src="https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg"
                alt="Интерьер с наградами"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              <div className="absolute top-8 left-8 right-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Создаём награды для первых лиц <span className="text-white/90">вместе с нами</span>
                </h1>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src="https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg"
                        alt="Награда"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-1">Награда "Триумф"</div>
                      <p className="text-xs text-muted-foreground mb-3">
                        Эксклюзивная награда из хрусталя для корпоративных мероприятий
                      </p>
                      <Button size="sm" className="h-8 text-xs">
                        Узнать стоимость
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-6">
                  <Icon name="Award" size={18} />
                  <span className="text-sm font-medium">Премиум производство</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  О нашей компании
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Компания «Элитных наград» — это ведущий производитель эксклюзивных наград, подарков и корпоративной продукции из хрусталя и стекла в России.
                </p>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Каждый проект создаётся командой профессионалов с учётом всех пожеланий и корпоративной идентичности клиента. Работаем с ведущими компаниями и государственными организациями.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">300+</div>
                    <div className="text-xs text-muted-foreground">Проектов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">55</div>
                    <div className="text-xs text-muted-foreground">Клиентов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">21</div>
                    <div className="text-xs text-muted-foreground">Лет опыта</div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Узнать стоимость изделия</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Ваш телефон"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <Button type="submit" className="w-full">
                    Заказать звонок
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;