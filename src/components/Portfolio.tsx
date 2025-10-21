import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const portfolioItems = [
    {
      id: 1,
      title: 'Каменная награда',
      category: 'Корпоративные',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
      size: 'large',
    },
    {
      id: 2,
      title: 'Стеклянный кубок',
      category: 'Спортивные',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg',
      size: 'medium',
    },
    {
      id: 3,
      title: 'Авторская композиция',
      category: 'Авторские',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg',
      size: 'small',
    },
    {
      id: 4,
      title: 'Переходящий кубок',
      category: 'Кубки',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
      size: 'medium',
    },
    {
      id: 5,
      title: 'Протокольный подарок',
      category: 'Подарки',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg',
      size: 'small',
    },
    {
      id: 6,
      title: 'Корпоративный сувенир',
      category: 'Сувениры',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg',
      size: 'large',
    },
    {
      id: 7,
      title: 'Юбилейная награда',
      category: 'Корпоративные',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
      size: 'small',
    },
    {
      id: 8,
      title: 'Премиум подарок',
      category: 'Подарки',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg',
      size: 'medium',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= portfolioItems.length - 1) {
          setDirection(-1);
          return prev - 1;
        } else if (prev <= 0) {
          setDirection(1);
          return prev + 1;
        }
        return prev + direction;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [direction, portfolioItems.length]);

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const isActive = index === currentIndex;
    
    return {
      transform: `translateX(${diff * 8}%) scale(${isActive ? 1 : 0.92}) rotateY(${diff * 3}deg)`,
      opacity: Math.max(0.3, 1 - Math.abs(diff) * 0.15),
      zIndex: 20 - Math.abs(diff),
      filter: `blur(${Math.abs(diff) * 0.5}px)`,
    };
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Image" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Портфолио</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Наши работы
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Каждый проект — уникальное произведение искусства
          </p>
        </div>

        <div className="relative h-[500px] md:h-[600px] mb-12">
          <div className="absolute inset-0 flex items-center justify-center perspective-1000">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="absolute transition-all duration-700 ease-out cursor-pointer"
                style={getCardStyle(index)}
                onClick={() => setCurrentIndex(index)}
              >
                <div className={`group relative rounded-2xl overflow-hidden shadow-2xl bg-white
                  ${item.size === 'large' ? 'w-[280px] h-[380px] md:w-[340px] md:h-[460px]' : 
                    item.size === 'medium' ? 'w-[240px] h-[340px] md:w-[280px] md:h-[400px]' : 
                    'w-[200px] h-[280px] md:w-[240px] md:h-[340px]'}`}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                    <div className="inline-flex items-center gap-1.5 bg-primary/90 backdrop-blur-sm rounded-full px-2.5 py-1 mb-2">
                      <Icon name="Tag" size={12} className="text-white" />
                      <span className="text-xs font-medium text-white">{item.category}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {index !== currentIndex && (
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-primary'
                  : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
              aria-label={`Перейти к проекту ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">500+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Проектов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">10+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">300+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Качество</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
