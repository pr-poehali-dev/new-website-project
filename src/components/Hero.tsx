import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg"
          alt="Интерьер с наградами"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
            <Icon name="Award" size={20} className="text-white" />
            <span className="text-sm text-white font-medium">Производство премиальных наград</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Создаём награды для первых лиц
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Эксклюзивные награды и подарки из стекла и хрусталя. 
            Работаем с ведущими компаниями и государственными организациями
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Заказать награду
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-white mb-2">300+</div>
              <div className="text-sm text-white/70">Выполненных проектов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">55</div>
              <div className="text-sm text-white/70">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">21</div>
              <div className="text-sm text-white/70">Лет опыта</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
