import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const About = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === section1Ref.current) setIsVisible1(true);
            if (entry.target === section2Ref.current) setIsVisible2(true);
            if (entry.target === section3Ref.current) setIsVisible3(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: 'Gem',
      title: 'Премиальное качество',
      description: 'Используем только лучшие материалы и проверенные технологии производства',
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Каждый проект разрабатывается с учетом пожеланий и ценностей клиента',
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Предоставляем гарантию на всю продукцию и полное сопровождение проекта',
    },
    {
      icon: 'Clock',
      title: 'Точные сроки',
      description: 'Соблюдаем договоренности и всегда укладываемся в установленные сроки',
    },
  ];

  return (
    <section id="about" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-6 md:mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
          <Icon name="Building2" size={18} />
          <span className="text-sm font-medium">О нашей компании</span>
        </div>

        <div 
          ref={section1Ref}
          className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12 transition-all duration-700 ${
            isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="transition-all duration-700 delay-100">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Компания <span className="text-primary">Арт Стеклов</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Производитель наград и подарков для выдающихся людей с 2015 года.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Это не просто награды — это осмысленные подарки для тех, чьи решения влияют на ход событий. Для первых лиц: основателей, акционеров, партнёров, руководителей, дипломатов.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] transition-all duration-700 delay-200 hover:scale-[1.02]">
            <img
              src="https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg"
              alt="Премиальная награда"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div 
          ref={section2Ref}
          className={`grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 transition-all duration-700 ${
            isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] order-2 lg:order-1 transition-all duration-700 delay-200 hover:scale-[1.02]">
            <img
              src="https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg"
              alt="Награды в интерьере"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2 transition-all duration-700 delay-100">
            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Каждое изделие Art Steklov — это знак достижений, который отражает характер, силу и уверенность. Мы создаём награды, которые решают важную задачу: как выразить уважение человеку, у которого уже всё есть.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Мы специализируемся на именных, смысловых наградах — не сувенирах, не премиальных безликих аксессуарах, а символах статуса, признания и уважения. Наш подход — это индивидуальное проектирование, материалы, которые сохраняют свою значимость и статус на протяжении лет.
            </p>
          </div>
        </div>

        <div 
          ref={section3Ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
            isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-muted/30 rounded-2xl p-6 hover:bg-muted/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Icon name={feature.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
