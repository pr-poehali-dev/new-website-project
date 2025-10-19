import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import OrderModal from '@/components/OrderModal';

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === section1Ref.current) setIsVisible1(true);
            if (entry.target === section2Ref.current) setIsVisible2(true);
            if (entry.target === section3Ref.current) setIsVisible3(true);
            if (entry.target === section4Ref.current) setIsVisible4(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);

    return () => observer.disconnect();
  }, []);

  const services: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    details: string[];
    benefits: { icon: string; title: string; description: string }[];
    process: { step: number; title: string; description: string }[];
    cta: string;
    image: string;
    icon: string;
  }> = {
    'individualnaya-razrabotka': {
      title: 'Индивидуальная разработка подарочных решений',
      subtitle: 'Создаём уникальные подарки для тех, у кого уже всё есть',
      description: 'Каждый подарок — это не просто изделие из стекла. Это осмысленное решение, которое отражает ценности вашей компании, уважение к получателю и значимость момента. Мы разрабатываем концепцию, воплощаем её в материале и создаём подарок, который запомнится надолго.',
      details: [
        'Работаем с первыми лицами компаний — основателями, акционерами, партнёрами, дипломатами',
        'Каждый проект начинается с глубокого понимания контекста и личности получателя',
        'Используем премиальные материалы, которые сохраняют статус на протяжении лет',
        'Полное сопровождение проекта от идеи до вручения подарка',
      ],
      benefits: [
        {
          icon: 'Sparkles',
          title: 'Уникальность',
          description: 'Каждое изделие создаётся в единственном экземпляре по вашему проекту',
        },
        {
          icon: 'Crown',
          title: 'Премиальность',
          description: 'Используем только лучшие материалы и проверенные технологии',
        },
        {
          icon: 'Heart',
          title: 'Смысловая нагрузка',
          description: 'Подарок отражает ценности, достижения и характер получателя',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Консультация',
          description: 'Обсуждаем задачу, контекст и личность получателя',
        },
        {
          step: 2,
          title: 'Концепция',
          description: 'Разрабатываем идею и визуализацию будущего подарка',
        },
        {
          step: 3,
          title: 'Производство',
          description: 'Создаём изделие с контролем на каждом этапе',
        },
        {
          step: 4,
          title: 'Вручение',
          description: 'Упаковываем и доставляем в нужное место',
        },
      ],
      cta: 'Обсудить индивидуальный проект',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
      icon: 'Sparkles',
    },
    'nagrady-dlya-ceremoniy': {
      title: 'Награды для особых церемоний',
      subtitle: 'Престижные награды для важных мероприятий',
      description: 'Награда на особой церемонии — это не просто знак признания. Это символ статуса, который фиксирует значимый момент в жизни человека или компании. Мы создаём награды, которые соответствуют уровню мероприятия и подчёркивают важность достижения.',
      details: [
        'Разработка наград для государственных, корпоративных и отраслевых церемоний',
        'Учитываем статус мероприятия и регалии получателей',
        'Возможность серийного производства с сохранением премиального качества',
        'Полный цикл: от концепции до церемонии вручения',
      ],
      benefits: [
        {
          icon: 'Award',
          title: 'Статусность',
          description: 'Награды соответствуют уровню церемонии и получателей',
        },
        {
          icon: 'Shield',
          title: 'Надёжность',
          description: 'Гарантируем соблюдение сроков и качество исполнения',
        },
        {
          icon: 'Gem',
          title: 'Долговечность',
          description: 'Изделия сохраняют первозданный вид на протяжении лет',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Бриф',
          description: 'Уточняем формат церемонии и количество награждаемых',
        },
        {
          step: 2,
          title: 'Дизайн',
          description: 'Создаём концепцию награды и согласовываем детали',
        },
        {
          step: 3,
          title: 'Производство',
          description: 'Изготавливаем награды с контролем качества',
        },
        {
          step: 4,
          title: 'Доставка',
          description: 'Доставляем к церемонии в премиальной упаковке',
        },
      ],
      cta: 'Заказать награды для церемонии',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg',
      icon: 'Award',
    },
    'korporativnye-nagrady': {
      title: 'Корпоративные награды',
      subtitle: 'Признание достижений сотрудников и партнёров',
      description: 'Корпоративные награды формируют культуру признания в компании. Это инструмент мотивации, который показывает ценность вклада каждого сотрудника и партнёра. Мы создаём награды, которые вдохновляют на новые достижения.',
      details: [
        'Награды для внутренних корпоративных мероприятий и конкурсов',
        'Персонализация с именами, датами и достижениями',
        'Возможность создания корпоративной линейки наград',
        'Интеграция фирменного стиля и ценностей компании',
      ],
      benefits: [
        {
          icon: 'Users',
          title: 'Мотивация',
          description: 'Награды вдохновляют команду на новые достижения',
        },
        {
          icon: 'TrendingUp',
          title: 'Культура признания',
          description: 'Формируем традицию отмечать успехи и вклад',
        },
        {
          icon: 'Target',
          title: 'Брендинг',
          description: 'Награды отражают ценности и стиль компании',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Задача',
          description: 'Определяем цели награждения и портрет получателей',
        },
        {
          step: 2,
          title: 'Концепция',
          description: 'Разрабатываем дизайн в фирменном стиле компании',
        },
        {
          step: 3,
          title: 'Изготовление',
          description: 'Производим награды с персонализацией',
        },
        {
          step: 4,
          title: 'Вручение',
          description: 'Доставляем к мероприятию в срок',
        },
      ],
      cta: 'Создать корпоративные награды',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
      icon: 'Trophy',
    },
    'korporativnye-suveniry': {
      title: 'Корпоративные сувениры',
      subtitle: 'Премиальные подарки для партнёров и клиентов',
      description: 'Корпоративный сувенир — это не просто подарок. Это отражение статуса вашей компании и уважения к получателю. Мы создаём сувениры, которые становятся частью рабочего пространства и регулярно напоминают о вашей компании.',
      details: [
        'Сувениры для партнёров, клиентов и сотрудников компании',
        'Интеграция логотипа и фирменного стиля',
        'Возможность серийного производства любого объёма',
        'Премиальная упаковка и персонализация',
      ],
      benefits: [
        {
          icon: 'Gift',
          title: 'Запоминаемость',
          description: 'Сувениры становятся частью рабочего пространства',
        },
        {
          icon: 'Briefcase',
          title: 'Статус',
          description: 'Подчёркивают уровень вашей компании',
        },
        {
          icon: 'Repeat',
          title: 'Постоянство',
          description: 'Регулярно напоминают о вашем бренде',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Бриф',
          description: 'Уточняем задачу, объём и сроки',
        },
        {
          step: 2,
          title: 'Образцы',
          description: 'Предлагаем варианты и создаём прототипы',
        },
        {
          step: 3,
          title: 'Производство',
          description: 'Изготавливаем тираж с контролем качества',
        },
        {
          step: 4,
          title: 'Упаковка',
          description: 'Упаковываем и доставляем партию',
        },
      ],
      cta: 'Заказать корпоративные сувениры',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg',
      icon: 'Gift',
    },
    'avtorskie-izdeliya': {
      title: 'Авторские изделия',
      subtitle: 'Уникальные произведения искусства из стекла',
      description: 'Авторские изделия Art Steklov — это искусство, воплощённое в стекле. Каждая работа создаётся вручную, существует в единственном экземпляре и несёт глубокий смысл. Это не декор, а произведение, которое вдохновляет и становится точкой силы в пространстве.',
      details: [
        'Создание уникальных арт-объектов по индивидуальному проекту',
        'Работа с художниками и дизайнерами мирового уровня',
        'Использование авторских техник и редких материалов',
        'Каждое изделие — произведение искусства в единственном экземпляре',
      ],
      benefits: [
        {
          icon: 'Palette',
          title: 'Искусство',
          description: 'Каждое изделие — это авторская работа',
        },
        {
          icon: 'Star',
          title: 'Эксклюзивность',
          description: 'Существует в единственном экземпляре',
        },
        {
          icon: 'Lightbulb',
          title: 'Смысл',
          description: 'Несёт глубокую идею и вдохновляет',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Идея',
          description: 'Обсуждаем концепцию и смысл будущего произведения',
        },
        {
          step: 2,
          title: 'Эскизы',
          description: 'Художник создаёт визуализацию и согласует детали',
        },
        {
          step: 3,
          title: 'Создание',
          description: 'Воплощаем идею в материале вручную',
        },
        {
          step: 4,
          title: 'Установка',
          description: 'Доставляем и размещаем в пространстве',
        },
      ],
      cta: 'Заказать авторское изделие',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
      icon: 'Palette',
    },
    'korporativnyy-dekor': {
      title: 'Корпоративный декор и арт-объекты',
      subtitle: 'Оформление пространств премиальными арт-объектами',
      description: 'Корпоративный декор — это не просто оформление офиса. Это создание среды, которая отражает ценности компании, вдохновляет команду и производит впечатление на клиентов. Мы создаём арт-объекты, которые становятся частью корпоративной культуры.',
      details: [
        'Оформление офисов, переговорных и общественных пространств',
        'Интеграция фирменного стиля и корпоративных ценностей',
        'Создание арт-объектов любого масштаба',
        'Полный цикл: от проекта до монтажа',
      ],
      benefits: [
        {
          icon: 'Building2',
          title: 'Среда',
          description: 'Создаём пространство, которое вдохновляет',
        },
        {
          icon: 'Eye',
          title: 'Впечатление',
          description: 'Подчёркиваем статус компании для клиентов',
        },
        {
          icon: 'Zap',
          title: 'Энергия',
          description: 'Арт-объекты становятся точками силы',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Анализ',
          description: 'Изучаем пространство и задачи компании',
        },
        {
          step: 2,
          title: 'Проект',
          description: 'Разрабатываем концепцию оформления',
        },
        {
          step: 3,
          title: 'Производство',
          description: 'Создаём арт-объекты по проекту',
        },
        {
          step: 4,
          title: 'Монтаж',
          description: 'Устанавливаем и интегрируем в пространство',
        },
      ],
      cta: 'Заказать корпоративный декор',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg',
      icon: 'Building2',
    },
  };

  const service = serviceId ? services[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Услуга не найдена</h1>
            <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-6">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <Icon name="ArrowLeft" size={20} />
            <span>Вернуться к услугам</span>
          </button>

          <div 
            ref={section1Ref}
            className={`grid lg:grid-cols-2 gap-12 items-start mb-16 transition-all duration-700 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-6">
                <Icon name={service.icon} size={18} />
                <span className="text-sm font-medium">Услуга</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {service.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                {service.subtitle}
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>

              <Button size="lg" onClick={() => setShowOrderModal(true)}>
                <Icon name="Sparkles" size={20} className="mr-2" />
                {service.cta}
              </Button>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[600px] hover:scale-[1.02] transition-transform duration-500">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div 
            ref={section2Ref}
            className={`mb-16 transition-all duration-700 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl font-bold mb-8">Что мы предлагаем</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.details.map((detail, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div 
            ref={section3Ref}
            className={`mb-16 transition-all duration-700 ${isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl font-bold mb-8">Преимущества</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-muted/30 rounded-2xl p-6 hover:bg-muted/50 transition-all duration-300 hover:scale-105">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div 
            ref={section4Ref}
            className={`mb-16 transition-all duration-700 ${isVisible4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl font-bold mb-8">Как мы работаем</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {service.process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  
                  {index < service.process.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-12 right-0 h-0.5 bg-muted" style={{ width: 'calc(100% + 1.5rem)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы обсудить проект?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут, чтобы обсудить детали и рассчитать стоимость
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setShowOrderModal(true)}
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <OrderModal isOpen={showOrderModal} onClose={() => setShowOrderModal(false)} />
    </div>
  );
};

export default ServicePage;