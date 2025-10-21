import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: 'Gem',
      title: 'Премиальное качество',
      description: 'Используем только лучшие материалы и проверенные технологии',
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Каждый проект разрабатывается с учетом пожеланий клиента',
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Предоставляем гарантию на всю продукцию',
    },
    {
      icon: 'Clock',
      title: 'Точные сроки',
      description: 'Соблюдаем договоренности и укладываемся в сроки',
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-6 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
          <Icon name="Building2" size={18} />
          <span className="text-sm font-medium">О нашей компании</span>
        </div>

        <div 
          ref={sectionRef}
          className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="transition-all duration-700 delay-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Компания <span className="text-primary">Арт Стеклов</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Производитель наград и подарков для выдающихся людей с 2015 года.
            </p>

            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Это не просто награды — это осмысленные подарки для тех, чьи решения влияют на ход событий. Для первых лиц: основателей, акционеров, партнёров, руководителей, дипломатов.
            </p>

            <Link to="/about">
              <Button size="lg" className="gap-2">
                Подробнее о компании
                <Icon name="ArrowRight" size={18} />
              </Button>
            </Link>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[280px] md:h-[350px] transition-all duration-700 delay-200 hover:scale-[1.02]">
            <img
              src="https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg"
              alt="Премиальная награда"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-muted/30 rounded-xl p-5 hover:bg-muted/50 transition-all duration-300 hover:scale-105"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name={feature.icon} size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
