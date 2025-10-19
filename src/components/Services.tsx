import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const services = [
    {
      icon: 'Sparkles',
      title: 'Индивидуальная разработка подарочных решений',
      description: 'Создаём уникальные подарки, которые отражают ценности вашей компании и запоминаются надолго',
      categories: ['Премиум', 'VIP', 'Эксклюзив'],
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'
    },
    {
      icon: 'Award',
      title: 'Награды для особых церемоний',
      description: 'Престижные награды для важных мероприятий и торжественных церемоний',
      categories: ['Церемонии', 'Мероприятия', 'Статус'],
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg'
    },
    {
      icon: 'Trophy',
      title: 'Корпоративные награды',
      description: 'Награды для признания достижений сотрудников и партнёров компании',
      categories: ['Достижения', 'Мотивация', 'Признание'],
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'
    },
    {
      icon: 'Gift',
      title: 'Корпоративные сувениры',
      description: 'Премиальные сувениры для партнёров, клиентов и сотрудников',
      categories: ['Сувениры', 'Подарки', 'Бренд'],
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg'
    },
    {
      icon: 'Palette',
      title: 'Авторские изделия',
      description: 'Уникальные произведения искусства из стекла, созданные по индивидуальному проекту',
      categories: ['Искусство', 'Эксклюзив', 'Авторское'],
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'
    },
    {
      icon: 'Building2',
      title: 'Корпоративный декор и арт-объекты',
      description: 'Оформление офисов и общественных пространств премиальными арт-объектами',
      categories: ['Декор', 'Интерьер', 'Арт-объекты'],
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg'
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section id="services" className="py-12 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center md:text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 md:mb-6">
            <Icon name="Layers" size={18} />
            <span className="text-sm font-medium">Наши услуги</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6">
            Полный спектр решений
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            От классических наград до эксклюзивных авторских изделий — создаём произведения искусства под любые задачи
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
          )}
          
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              <Icon name="ChevronRight" size={24} />
            </button>
          )}

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6"
          >
            {services.map((service, index) => (
              <Card key={index} className="flex-shrink-0 w-[340px] md:w-[380px] snap-center group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon name={service.icon} size={28} className="text-primary" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 leading-tight">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {service.categories.map((category, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-muted px-3 py-1.5 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
