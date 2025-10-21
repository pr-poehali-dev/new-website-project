import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import OrderModal from './OrderModal';

const Hero = () => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    'https://cdn.poehali.dev/files/b727a4d1-1de7-4329-b51e-da31b890a78a.jpg',
    'https://cdn.poehali.dev/files/80689892-235b-4658-b43e-3472831b4963.jpg',
    'https://cdn.poehali.dev/files/50b8927e-dc23-43f5-8fa3-ddd0030bcd6d.jpg',
    'https://cdn.poehali.dev/files/5bb5f235-7f66-4ff5-88db-84f11ef85be8.jpg',
    'https://cdn.poehali.dev/files/01dfaf74-930c-4bd6-9297-7dfc62847be9.JPG'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToCatalog = () => {
    const catalogSection = document.getElementById('catalog');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 pb-24">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden min-h-[calc(100vh-6rem)] md:min-h-[600px] lg:min-h-[700px]">
          {backgroundImages.map((img, index) => (
            <img
              key={img}
              src={img}
              alt={`Награды ${index + 1}`}
              className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:pb-12 lg:pb-16 p-4 md:p-8 lg:p-12">
            <div className="max-w-2xl mb-8 md:mb-12">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Награды и подарки <span className="text-white/90">для первых</span>
              </h1>

              <p className="text-sm md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
                Производим эксклюзивные награды из стекла. 
                Бесплатная доставка по России при заказе от 50 000 ₽
              </p>
            </div>

            <div className="hidden md:flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button size="lg" className="text-sm md:text-base" onClick={() => setShowOrderModal(true)}>
                  <Icon name="Sparkles" size={18} className="mr-2" />
                  Заказать награду
                </Button>
                <Button size="lg" variant="outline" className="text-sm md:text-base bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground" onClick={scrollToCatalog}>
                  <Icon name="BookOpen" size={18} className="mr-2" />
                  Смотреть каталог
                </Button>
              </div>

              <div className="flex flex-col gap-3 mt-4 max-w-md">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="UserCheck" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white font-semibold mb-1">Индивидуальное сопровождение</p>
                    <p className="text-xs text-white/70">Персональный менеджер на всех этапах проекта</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Lightbulb" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white font-semibold mb-1">Помощь с разработкой идей и концептов</p>
                    <p className="text-xs text-white/70">Креативная команда для воплощения ваших идей</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white font-semibold mb-1">Решение задач под ключ</p>
                    <p className="text-xs text-white/70">Полный цикл от идеи до готового продукта</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:hidden flex flex-col gap-3 pb-2">
              <div className="flex flex-col gap-3">
                <Button size="lg" className="text-sm" onClick={() => setShowOrderModal(true)}>
                  <Icon name="Sparkles" size={18} className="mr-2" />
                  Заказать награду
                </Button>
                <Button size="lg" variant="outline" className="text-sm bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground" onClick={scrollToCatalog}>
                  <Icon name="BookOpen" size={18} className="mr-2" />
                  Смотреть каталог
                </Button>
              </div>
              
              <div className="flex flex-col gap-2 mt-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 flex items-start gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="UserCheck" size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white font-semibold mb-0.5">Индивидуальное сопровождение</p>
                    <p className="text-xs text-white/60">Персональный менеджер на всех этапах</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 flex items-start gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Lightbulb" size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white font-semibold mb-0.5">Помощь с разработкой идей и концептов</p>
                    <p className="text-xs text-white/60">Креативная команда для воплощения идей</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 flex items-start gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white font-semibold mb-0.5">Решение задач под ключ</p>
                    <p className="text-xs text-white/60">Полный цикл от идеи до продукта</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'w-8 bg-white' 
                    : 'w-1.5 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <OrderModal isOpen={showOrderModal} onClose={() => setShowOrderModal(false)} />
    </section>
  );
};

export default Hero;