import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const AboutPage = () => {
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

  const stats = [
    { icon: 'Award', value: '10+', label: 'Лет на рынке' },
    { icon: 'Users', value: '500+', label: 'Довольных клиентов' },
    { icon: 'Package', value: '5000+', label: 'Реализованных проектов' },
    { icon: 'Trophy', value: '100%', label: 'Гарантия качества' },
  ];

  const values = [
    {
      icon: 'Target',
      title: 'Наша миссия',
      description: 'Создавать награды и подарки, которые отражают значимость достижений и подчёркивают статус их владельца. Каждое изделие — это символ уважения и признания.',
    },
    {
      icon: 'Eye',
      title: 'Наше видение',
      description: 'Стать эталоном качества и индивидуального подхода в создании премиальных наград. Мы стремимся к тому, чтобы каждый проект становился произведением искусства.',
    },
    {
      icon: 'Heart',
      title: 'Наши ценности',
      description: 'Качество, индивидуальность, ответственность и внимание к деталям. Мы ценим доверие наших клиентов и работаем над каждым проектом с полной отдачей.',
    },
  ];

  const team = [
    {
      name: 'Технологии производства',
      description: 'Используем передовое оборудование для обработки стекла, камня, металла и дерева. Лазерная гравировка, пескоструйная обработка, 3D-моделирование.',
    },
    {
      name: 'Материалы',
      description: 'Работаем с премиальными материалами: оптическое стекло, натуральный камень, благородные металлы, ценные породы дерева.',
    },
    {
      name: 'Команда',
      description: 'Опытные дизайнеры, технологи и мастера с многолетним стажем. Каждый специалист — профессионал своего дела.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Icon name="Building2" size={18} className="text-primary" />
              <span className="text-sm font-medium text-primary">О компании</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Компания <span className="text-primary">Арт Стеклов</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Производитель премиальных наград и подарков для выдающихся людей с 2015 года
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-background rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat.icon} size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div 
            ref={section1Ref}
            className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-700 ${
              isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Награды для тех, у кого уже всё есть
              </h2>
              
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Это не просто награды — это осмысленные подарки для тех, чьи решения влияют на ход событий. Для первых лиц: основателей, акционеров, партнёров, руководителей, дипломатов.
              </p>
              
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Каждое изделие Art Steklov — это знак достижений, который отражает характер, силу и уверенность. Мы создаём награды, которые решают важную задачу: как выразить уважение человеку, у которого уже всё есть.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы специализируемся на именных, смысловых наградах — не сувенирах, не премиальных безликих аксессуарах, а символах статуса, признания и уважения.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
              <img
                src="https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg"
                alt="Премиальная награда"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div 
            ref={section2Ref}
            className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-700 ${
              isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] order-2 lg:order-1">
              <img
                src="https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg"
                alt="Награды в интерьере"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Индивидуальное проектирование
              </h2>
              
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Наш подход — это индивидуальное проектирование, материалы, которые сохраняют свою значимость и статус на протяжении лет.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Каждый проект начинается с понимания задачи клиента, его ценностей и особенностей мероприятия. Мы создаём концепцию, разрабатываем дизайн и воплощаем его в материале.
              </p>

              <div className="space-y-4">
                {team.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle2" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div 
            ref={section3Ref}
            className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
              isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-muted/30 rounded-2xl p-8 hover:bg-muted/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={value.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы создать уникальную награду?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Свяжитесь с нами, и мы разработаем индивидуальный проект специально для вас
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Связаться с нами
              <Icon name="ArrowRight" size={20} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
