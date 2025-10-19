import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          <img
            src="https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg"
            alt="Интерьер с наградами"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8 lg:p-12">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Награды с гравировкой <span className="text-white/90">за 3 дня</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-xl">
                Производим эксклюзивные награды из стекла и хрусталя. 
                Бесплатная доставка по России при заказе от 50 000 ₽
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
                <Button size="lg" className="text-sm md:text-base">
                  <Icon name="Sparkles" size={18} className="mr-2" />
                  Заказать награду
                </Button>
                <Button size="lg" variant="outline" className="text-sm md:text-base bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground">
                  <Icon name="BookOpen" size={18} className="mr-2" />
                  Смотреть каталог
                </Button>
              </div>
            </div>

            <div className="hidden md:flex items-end justify-between gap-8 flex-wrap">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 max-w-sm">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src="https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg"
                      alt="Награда"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-sm mb-1">Награда "Триумф"</div>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                      Эксклюзивная награда из хрусталя для корпоративных мероприятий
                    </p>
                    <Button size="sm" className="h-8 text-xs w-full">
                      Узнать стоимость
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">300+</div>
                  <div className="text-xs text-white/70">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">55</div>
                  <div className="text-xs text-white/70">Клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">21</div>
                  <div className="text-xs text-white/70">Лет опыта</div>
                </div>
              </div>
            </div>
            
            <div className="md:hidden grid grid-cols-3 gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div>
                <div className="text-2xl font-bold text-white mb-1">300+</div>
                <div className="text-xs text-white/70">Проектов</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">55</div>
                <div className="text-xs text-white/70">Клиентов</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">21</div>
                <div className="text-xs text-white/70">Лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;