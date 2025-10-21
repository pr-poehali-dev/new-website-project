import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Каменная награда для CEO',
      category: 'Корпоративные награды',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
      description: 'Премиальная награда из натурального камня с гравировкой',
    },
    {
      id: 2,
      title: 'Стеклянный кубок победителя',
      category: 'Спортивные награды',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg',
      description: 'Элегантный кубок из оптического стекла',
    },
    {
      id: 3,
      title: 'Авторская композиция',
      category: 'Авторские изделия',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg',
      description: 'Уникальное произведение искусства для офиса',
    },
    {
      id: 4,
      title: 'Переходящий кубок',
      category: 'Кубки и медали',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
      description: 'Престижная награда для ежегодных соревнований',
    },
    {
      id: 5,
      title: 'Протокольный подарок',
      category: 'Подарки',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg',
      description: 'Эксклюзивный подарок для первых лиц',
    },
    {
      id: 6,
      title: 'Корпоративный сувенир',
      category: 'Сувениры',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg',
      description: 'Премиальный сувенир с логотипом компании',
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, portfolioItems.length]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / portfolioItems.length;
      const scrollPosition = activeIndex * cardWidth - container.clientWidth / 2 + cardWidth / 2;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [activeIndex, portfolioItems.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Image" size={18} className="text-primary" />
            <span className="text-sm font-medium text-primary">Портфолио</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Наши работы
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждый проект — уникальное произведение искусства
          </p>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {portfolioItems.map((item, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === (activeIndex - 1 + portfolioItems.length) % portfolioItems.length;
            const isNext = index === (activeIndex + 1) % portfolioItems.length;
            
            return (
              <div
                key={item.id}
                className={`flex-shrink-0 snap-center transition-all duration-700 ${
                  isActive 
                    ? 'w-[280px] md:w-[400px] lg:w-[500px] opacity-100 scale-100' 
                    : isPrev || isNext
                    ? 'w-[220px] md:w-[300px] lg:w-[380px] opacity-60 scale-95'
                    : 'w-[180px] md:w-[250px] lg:w-[320px] opacity-30 scale-90'
                }`}
                onClick={() => handleDotClick(index)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className={`group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-700 ${
                  isActive ? 'ring-4 ring-primary ring-offset-4' : ''
                }`}>
                  <div className={`relative overflow-hidden transition-all duration-700 ${
                    isActive ? 'h-[350px] md:h-[450px] lg:h-[550px]' : 'h-[280px] md:h-[350px] lg:h-[420px]'
                  }`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-700 ${
                      isActive 
                        ? 'from-black/90 via-black/50 to-transparent' 
                        : 'from-black/70 via-black/40 to-transparent'
                    }`} />
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-700 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3">
                      <Icon name="Tag" size={14} className="text-white" />
                      <span className="text-xs font-medium text-white">{item.category}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {!isActive && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                      <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon name="ZoomIn" size={28} className="text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? 'w-8 h-2 bg-primary'
                  : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
