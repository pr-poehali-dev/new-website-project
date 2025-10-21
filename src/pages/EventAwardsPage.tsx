import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import CallModal from '@/components/CallModal';

interface EventType {
  id: string;
  title: string;
  subtitle: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  examples: Array<{
    title: string;
    description: string;
    image: string;
    materials: string[];
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  ctaTitle: string;
  ctaDescription: string;
}

const eventTypes: Record<string, EventType> = {
  corporate: {
    id: 'corporate',
    title: 'Корпоративные награды',
    subtitle: 'Для бизнес-мероприятий и признания достижений',
    heroTitle: 'Награды для корпоративных мероприятий',
    heroDescription: 'Подчеркните статус вашей компании эксклюзивными наградами. Создаем уникальные решения для церемоний награждения, юбилеев и корпоративных событий.',
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200',
    benefits: [
      {
        icon: 'Award',
        title: 'Индивидуальный дизайн',
        description: 'Учитываем фирменный стиль и ценности вашей компании'
      },
      {
        icon: 'Sparkles',
        title: 'Премиум материалы',
        description: 'Стекло, металл, камень - только благородные материалы'
      },
      {
        icon: 'Users',
        title: 'Корпоративная символика',
        description: 'Логотипы, гравировка, персонализация каждой награды'
      },
      {
        icon: 'TrendingUp',
        title: 'Повышение мотивации',
        description: 'Награды, которые сотрудники захотят получить'
      }
    ],
    examples: [
      {
        title: 'Награда "Лучший сотрудник года"',
        description: 'Стеклянная стела с гравировкой логотипа и имени',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        materials: ['Оптическое стекло', 'Гравировка', 'Деревянная подставка']
      },
      {
        title: 'Переходящий кубок отдела',
        description: 'Металлический кубок с шильдами победителей',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        materials: ['Латунь', 'Мрамор', 'Золочение']
      },
      {
        title: 'Юбилейная награда',
        description: 'Статуэтка из камня с историей компании',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        materials: ['Мрамор', 'Бронза', 'Эпоксидная смола']
      }
    ],
    features: [
      {
        title: 'Разработка концепции',
        description: 'Создаем дизайн, отражающий ценности вашего бизнеса'
      },
      {
        title: 'Корпоративная упаковка',
        description: 'Футляры с логотипом и премиум презентация'
      },
      {
        title: 'Сертификаты',
        description: 'Дипломы и сертификаты к каждой награде'
      }
    ],
    ctaTitle: 'Закажите корпоративные награды',
    ctaDescription: 'Наш менеджер поможет подобрать оптимальное решение для вашего мероприятия'
  },
  sport: {
    id: 'sport',
    title: 'Спортивные награды',
    subtitle: 'Для турниров, соревнований и спортивных достижений',
    heroTitle: 'Награды для спортивных мероприятий',
    heroDescription: 'Кубки, медали и статуэтки, достойные ваших чемпионов. Изготавливаем награды для турниров любого уровня - от локальных до международных.',
    heroImage: 'https://images.unsplash.com/photo-1567825287577-f2f6e6b78cde?w=1200',
    benefits: [
      {
        icon: 'Trophy',
        title: 'Классические формы',
        description: 'Традиционные кубки и современные статуэтки'
      },
      {
        icon: 'Target',
        title: 'Под любой вид спорта',
        description: 'Футбол, киберспорт, автогонки - любые дисциплины'
      },
      {
        icon: 'Clock',
        title: 'Быстрое производство',
        description: 'Изготовим к дате вашего турнира'
      },
      {
        icon: 'Package',
        title: 'Комплексные решения',
        description: 'Кубки + медали + дипломы в одном заказе'
      }
    ],
    examples: [
      {
        title: 'Кубок чемпионов',
        description: 'Переходящий кубок для ежегодного турнира',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        materials: ['Металл', 'Золочение', 'Мраморная база']
      },
      {
        title: 'Медали для призеров',
        description: 'Комплект медалей 1, 2, 3 место',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        materials: ['Латунь', 'Эмаль', 'Лента']
      },
      {
        title: 'Награда MVP турнира',
        description: 'Уникальная статуэтка лучшему игроку',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        materials: ['Стекло', 'Металл', 'LED подсветка']
      }
    ],
    features: [
      {
        title: 'Шильды и таблички',
        description: 'Гравировка имен победителей на переходящих кубках'
      },
      {
        title: 'Спортивная символика',
        description: 'Мячи, ракетки, фигуры спортсменов в дизайне'
      },
      {
        title: 'Оптовые скидки',
        description: 'Выгодные условия при заказе от 10 наград'
      }
    ],
    ctaTitle: 'Закажите спортивные награды',
    ctaDescription: 'Рассчитаем стоимость и подготовим макеты в течение 24 часов'
  },
  government: {
    id: 'government',
    title: 'Государственные награды',
    subtitle: 'Для официальных церемоний и государственных мероприятий',
    heroTitle: 'Награды для государственных мероприятий',
    heroDescription: 'Официальные награды высочайшего качества для государственных учреждений, ведомств и протокольных мероприятий. Строгое соответствие стандартам.',
    heroImage: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1200',
    benefits: [
      {
        icon: 'Shield',
        title: 'Протокольные стандарты',
        description: 'Полное соответствие государственным требованиям'
      },
      {
        icon: 'FileCheck',
        title: 'Официальная документация',
        description: 'Все необходимые сертификаты и разрешения'
      },
      {
        icon: 'Gem',
        title: 'Высшее качество',
        description: 'Благородные металлы и драгоценные материалы'
      },
      {
        icon: 'Lock',
        title: 'Конфиденциальность',
        description: 'Соблюдение режима секретности проектов'
      }
    ],
    examples: [
      {
        title: 'Памятная награда министерства',
        description: 'Стела с государственной символикой',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        materials: ['Мрамор', 'Бронза', 'Позолота']
      },
      {
        title: 'Юбилейный знак ведомства',
        description: 'Нагрудный знак к годовщине учреждения',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        materials: ['Серебро', 'Эмаль', 'Футляр']
      },
      {
        title: 'Протокольный подарок',
        description: 'Представительский сувенир для делегаций',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        materials: ['Хрусталь', 'Дерево', 'Гравировка']
      }
    ],
    features: [
      {
        title: 'Геральдика',
        description: 'Работа с государственной символикой и гербами'
      },
      {
        title: 'Сертификация',
        description: 'Полный пакет документов на материалы'
      },
      {
        title: 'Опыт с госзаказами',
        description: 'Работаем по 44-ФЗ и 223-ФЗ'
      }
    ],
    ctaTitle: 'Обсудить государственный заказ',
    ctaDescription: 'Подготовим коммерческое предложение с учетом всех требований'
  },
  education: {
    id: 'education',
    title: 'Награды для образования',
    subtitle: 'Для школ, университетов и образовательных учреждений',
    heroTitle: 'Награды для образовательных мероприятий',
    heroDescription: 'Дипломы, кубки и награды для олимпиад, конкурсов, выпускных и других образовательных событий. Мотивируем к новым достижениям.',
    heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200',
    benefits: [
      {
        icon: 'GraduationCap',
        title: 'Для всех уровней',
        description: 'От детского сада до университета'
      },
      {
        icon: 'DollarSign',
        title: 'Доступные цены',
        description: 'Специальные условия для образовательных учреждений'
      },
      {
        icon: 'Palette',
        title: 'Яркий дизайн',
        description: 'Награды, которые радуют детей и подростков'
      },
      {
        icon: 'BarChart',
        title: 'Массовое производство',
        description: 'Готовы изготовить награды для всей школы'
      }
    ],
    examples: [
      {
        title: 'Диплом выпускника',
        description: 'Папка с гравировкой имени и достижений',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        materials: ['Кожзам', 'Тиснение', 'Металлическая вставка']
      },
      {
        title: 'Кубок олимпиады',
        description: 'Награда победителю школьной олимпиады',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        materials: ['Пластик', 'Покрытие под золото', 'База']
      },
      {
        title: 'Медаль лучшему ученику',
        description: 'Памятная медаль за академические успехи',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        materials: ['Металл', 'Цветная печать', 'Лента']
      }
    ],
    features: [
      {
        title: 'Именные награды',
        description: 'Персонализация каждого диплома и медали'
      },
      {
        title: 'Символика учреждения',
        description: 'Логотип школы или университета на наградах'
      },
      {
        title: 'Быстрый тираж',
        description: 'Изготовим награды для всего выпуска'
      }
    ],
    ctaTitle: 'Заказать награды для учебного заведения',
    ctaDescription: 'Специальные цены для школ и университетов'
  },
  cultural: {
    id: 'cultural',
    title: 'Награды для культурных мероприятий',
    subtitle: 'Для фестивалей, конкурсов и творческих событий',
    heroTitle: 'Награды для культурных мероприятий',
    heroDescription: 'Создаем уникальные награды для кинофестивалей, музыкальных конкурсов, театральных премий и других культурных событий. Каждая награда - произведение искусства.',
    heroImage: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1200',
    benefits: [
      {
        icon: 'Clapperboard',
        title: 'Творческий подход',
        description: 'Дизайн, отражающий дух вашего мероприятия'
      },
      {
        icon: 'Star',
        title: 'Эксклюзивность',
        description: 'Каждая награда - уникальное произведение'
      },
      {
        icon: 'Brush',
        title: 'Авторские решения',
        description: 'Работа с художниками и дизайнерами'
      },
      {
        icon: 'Camera',
        title: 'Фотогеничность',
        description: 'Награды, эффектные на фото и видео'
      }
    ],
    examples: [
      {
        title: 'Статуэтка кинопремии',
        description: 'Авторская скульптура для лауреатов',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        materials: ['Бронза', 'Гранит', 'Патинирование']
      },
      {
        title: 'Награда музыкального фестиваля',
        description: 'Стела с нотным станом и логотипом',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        materials: ['Стекло', 'LED подсветка', 'Гравировка']
      },
      {
        title: 'Диплом театральной премии',
        description: 'Художественная плакетка в раме',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        materials: ['Дерево', 'Металл', 'Ручная роспись']
      }
    ],
    features: [
      {
        title: 'Концептуальный дизайн',
        description: 'Награда как продолжение темы мероприятия'
      },
      {
        title: 'Ручная работа',
        description: 'Авторские техники и эксклюзивное исполнение'
      },
      {
        title: 'Презентационная ценность',
        description: 'Эффектная подача на сцене'
      }
    ],
    ctaTitle: 'Создать уникальные награды',
    ctaDescription: 'Разработаем концепцию, которая станет символом вашего события'
  }
};

const EventAwardsPage = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [showCallModal, setShowCallModal] = useState(false);
  
  const event = eventId ? eventTypes[eventId] : null;

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Страница не найдена</h1>
          <Link to="/" className="text-primary hover:underline">
            Вернуться на главную
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${event.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6">
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="ArrowLeft" size={16} />
                На главную
              </Link>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {event.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {event.heroDescription}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowCallModal(true)}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
              >
                Получить консультацию
              </button>
              <a
                href="#examples"
                className="px-8 py-4 bg-card border-2 border-border text-foreground rounded-xl font-semibold hover:border-primary transition-all"
              >
                Смотреть примеры
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Почему выбирают нас</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {event.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={benefit.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Примеры наград</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Посмотрите, какие награды мы создали для подобных мероприятий
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {event.examples.map((example, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                  <p className="text-muted-foreground mb-4">{example.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {example.materials.map((material, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Дополнительные возможности</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {event.features.map((feature, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {event.ctaTitle}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {event.ctaDescription}
            </p>
            
            <button
              onClick={() => setShowCallModal(true)}
              className="px-10 py-5 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3"
            >
              Оставить заявку
              <Icon name="ArrowRight" size={20} />
            </button>
            
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-background border border-border rounded-xl p-6">
                <div className="text-4xl font-bold text-primary mb-2">24 часа</div>
                <div className="text-muted-foreground">Подготовим макеты</div>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <div className="text-4xl font-bold text-primary mb-2">15 лет</div>
                <div className="text-muted-foreground">Опыт работы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {showCallModal && (
        <CallModal 
          isOpen={showCallModal}
          onClose={() => setShowCallModal(false)}
          source={`event-${event.id}`}
        />
      )}
    </div>
  );
};

export default EventAwardsPage;