import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Каменная награда для CEO',
      category: 'Корпоративные',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
    },
    {
      id: 2,
      title: 'Стеклянный кубок',
      category: 'Спортивные',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg',
    },
    {
      id: 3,
      title: 'Авторская композиция',
      category: 'Авторские',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg',
    },
    {
      id: 4,
      title: 'Переходящий кубок',
      category: 'Кубки',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
    },
    {
      id: 5,
      title: 'Протокольный подарок',
      category: 'Подарки',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg',
    },
    {
      id: 6,
      title: 'Корпоративный сувенир',
      category: 'Сувениры',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Image" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Портфолио</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Наши работы
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Каждый проект — уникальное произведение искусства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-[350px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 ${
                  hoveredIndex === index ? 'via-black/60' : ''
                }`} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1.5 mb-3">
                  <Icon name="Award" size={14} className="text-white" />
                  <span className="text-xs font-medium text-white">{item.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                
                <div className={`flex items-center gap-2 text-white/90 transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <span className="text-sm">Смотреть проект</span>
                  <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Проектов</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Лет опыта</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">300+</div>
            <div className="text-sm text-muted-foreground">Клиентов</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Качество</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
