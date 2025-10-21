import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import CallModal from '@/components/CallModal';

interface RecipientType {
  id: string;
  title: string;
  painTitle: string;
  painDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  challenges: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  solutions: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  examples: Array<{
    title: string;
    description: string;
    image: string;
    occasion: string;
    price: string;
  }>;
  why: Array<{
    title: string;
    description: string;
  }>;
  ctaTitle: string;
  ctaDescription: string;
}

const recipientTypes: Record<string, RecipientType> = {
  director: {
    id: 'director',
    title: 'Награды руководителю',
    painTitle: 'Что подарить руководителю?',
    painDescription: 'Выбор награды для руководителя — это всегда вопрос статуса и вкуса. Стандартные подарки не подходят, а ошибка может испортить впечатление о всей команде.',
    heroTitle: 'Награды достойные руководителя',
    heroSubtitle: 'Эксклюзивные решения для тех, кто ценит качество и престиж',
    heroImage: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200',
    challenges: [
      {
        icon: 'AlertCircle',
        title: 'У руководителя уже всё есть',
        description: 'Сложно удивить человека, который может позволить себе любую вещь'
      },
      {
        icon: 'ThumbsDown',
        title: 'Боязнь выглядеть дешево',
        description: 'Недорогой подарок может показаться неуважением к статусу'
      },
      {
        icon: 'HelpCircle',
        title: 'Неизвестны предпочтения',
        description: 'Личные вкусы руководителя часто остаются загадкой для команды'
      },
      {
        icon: 'Clock',
        title: 'Нет времени на поиски',
        description: 'Нужно быстро найти достойный вариант без долгих раздумий'
      }
    ],
    solutions: [
      {
        icon: 'Award',
        title: 'Статусные материалы',
        description: 'Мрамор, бронза, хрусталь — материалы, подчеркивающие уровень'
      },
      {
        icon: 'Palette',
        title: 'Индивидуальный дизайн',
        description: 'Уникальная награда, которой больше ни у кого не будет'
      },
      {
        icon: 'Briefcase',
        title: 'Корпоративная символика',
        description: 'Связь с компанией делает подарок особенно ценным'
      },
      {
        icon: 'Package',
        title: 'Премиум упаковка',
        description: 'Презентация на уровне подарка — в футляре с логотипом'
      }
    ],
    examples: [
      {
        title: 'Статуэтка "Лидер года"',
        description: 'Бронзовая фигура на мраморном постаменте с гравировкой достижений',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        occasion: 'День рождения, годовщина в должности',
        price: 'от 45 000 ₽'
      },
      {
        title: 'Награда "Вклад в развитие"',
        description: 'Стеклянная стела с портретом и историей достижений компании',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        occasion: 'Юбилей компании, выход на пенсию',
        price: 'от 65 000 ₽'
      },
      {
        title: 'Настольная композиция премиум',
        description: 'Авторская работа из камня и металла для рабочего кабинета',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        occasion: 'Благодарность, знак уважения',
        price: 'от 85 000 ₽'
      }
    ],
    why: [
      {
        title: 'Опыт с VIP-клиентами',
        description: 'Работаем с крупнейшими корпорациями России более 15 лет'
      },
      {
        title: 'Конфиденциальность',
        description: 'Полная секретность проекта до момента вручения'
      },
      {
        title: 'Персональный менеджер',
        description: 'Один контакт для решения всех вопросов'
      }
    ],
    ctaTitle: 'Получить варианты наград для руководителя',
    ctaDescription: 'Подберем 3-5 решений под ваш бюджет и повод. Бесплатная консультация за 30 минут.'
  },
  founder: {
    id: 'founder',
    title: 'Награды основателю',
    painTitle: 'Что подарить основателю компании?',
    painDescription: 'Основатель — это человек, создавший всё с нуля. Подарок должен отражать масштаб его вклада и быть символом благодарности на годы вперед.',
    heroTitle: 'Награды для основателей бизнеса',
    heroSubtitle: 'Признание вклада тех, кто создал компанию',
    heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200',
    challenges: [
      {
        icon: 'Scale',
        title: 'Как оценить масштаб вклада?',
        description: 'Основатель вложил годы жизни — подарок должен это отражать'
      },
      {
        icon: 'Heart',
        title: 'Нужна эмоциональная связь',
        description: 'Важно показать благодарность и признание, а не просто дать вещь'
      },
      {
        icon: 'TrendingUp',
        title: 'Символ пути компании',
        description: 'Награда должна отражать историю развития бизнеса'
      },
      {
        icon: 'Users',
        title: 'От всей команды',
        description: 'Подарок представляет благодарность от всех сотрудников'
      }
    ],
    solutions: [
      {
        icon: 'BookOpen',
        title: 'История в подарке',
        description: 'Визуализируем путь компании от идеи до успеха'
      },
      {
        icon: 'Gem',
        title: 'Драгоценные материалы',
        description: 'Серебро, золото, натуральный камень — ценность на века'
      },
      {
        icon: 'FileText',
        title: 'Персональная гравировка',
        description: 'Слова благодарности от команды и партнеров'
      },
      {
        icon: 'Home',
        title: 'Для дома или офиса',
        description: 'Награда, которая станет семейной реликвией'
      }
    ],
    examples: [
      {
        title: 'Памятная стела "Основатель"',
        description: 'Мраморная композиция с историей компании и портретом',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        occasion: 'Юбилей компании, выход из бизнеса',
        price: 'от 120 000 ₽'
      },
      {
        title: 'Скульптура "Путь лидера"',
        description: 'Авторская бронзовая работа с символикой компании',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        occasion: 'Круглая дата, продажа доли',
        price: 'от 250 000 ₽'
      },
      {
        title: 'Хрустальная награда "Визионер"',
        description: 'Ручная работа с инкрустацией и подсветкой',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        occasion: 'Достижение целей, признание',
        price: 'от 95 000 ₽'
      }
    ],
    why: [
      {
        title: 'Уникальные проекты',
        description: 'Каждая награда разрабатывается индивидуально'
      },
      {
        title: 'Работа с историей',
        description: 'Интервью с командой для создания концепции'
      },
      {
        title: 'Сертификат подлинности',
        description: 'Документ о материалах и авторстве работы'
      }
    ],
    ctaTitle: 'Создать уникальную награду основателю',
    ctaDescription: 'Встретимся, обсудим историю компании и создадим концепцию награды'
  },
  shareholder: {
    id: 'shareholder',
    title: 'Награды акционеру',
    painTitle: 'Что подарить акционеру?',
    painDescription: 'Акционер — это партнер и инвестор. Подарок должен подчеркивать взаимное уважение и ценность долгосрочных отношений.',
    heroTitle: 'Награды для акционеров',
    heroSubtitle: 'Благодарность за доверие и инвестиции в общее дело',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200',
    challenges: [
      {
        icon: 'Handshake',
        title: 'Протокольные требования',
        description: 'Подарок должен соответствовать деловой этике и статусу'
      },
      {
        icon: 'DollarSign',
        title: 'Ценность vs бюджет',
        description: 'Важна не цена, а символическая значимость подарка'
      },
      {
        icon: 'Building2',
        title: 'Официальность события',
        description: 'Награда для вручения на собрании акционеров или партнеров'
      },
      {
        icon: 'Globe',
        title: 'Международные партнеры',
        description: 'Подарок должен быть понятен представителям разных культур'
      }
    ],
    solutions: [
      {
        icon: 'Shield',
        title: 'Корпоративная символика',
        description: 'Логотип и фирменные цвета компании в дизайне'
      },
      {
        icon: 'BarChart',
        title: 'Визуализация успеха',
        description: 'Отражение роста компании и вклада акционера'
      },
      {
        icon: 'Star',
        title: 'Статусный дизайн',
        description: 'Строгие формы и благородные материалы'
      },
      {
        icon: 'FileCheck',
        title: 'Сертификация',
        description: 'Документы на материалы для протокола'
      }
    ],
    examples: [
      {
        title: 'Плакетка "Стратегический партнер"',
        description: 'Стекло и латунь с гравировкой лет партнерства',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        occasion: 'Годовое собрание акционеров',
        price: 'от 35 000 ₽'
      },
      {
        title: 'Награда "За вклад в развитие"',
        description: 'Мраморная стела с металлической вставкой',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        occasion: 'Достижение финансовых целей',
        price: 'от 55 000 ₽'
      },
      {
        title: 'Настольный сувенир премиум',
        description: 'Каменная композиция для рабочего стола',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        occasion: 'Благодарность за инвестиции',
        price: 'от 45 000 ₽'
      }
    ],
    why: [
      {
        title: 'Опыт с корпорациями',
        description: 'Знаем протокол и требования крупного бизнеса'
      },
      {
        title: 'Оптовые заказы',
        description: 'Награды для всех акционеров в едином стиле'
      },
      {
        title: 'Срочное изготовление',
        description: 'Готовы к дате собрания акционеров'
      }
    ],
    ctaTitle: 'Заказать награды для акционеров',
    ctaDescription: 'Рассчитаем стоимость тиража и подготовим образцы'
  },
  investor: {
    id: 'investor',
    title: 'Награды инвестору',
    painTitle: 'Что подарить инвестору?',
    painDescription: 'Инвестор дал не просто деньги, но и веру в ваш проект. Подарок — это знак признательности за риск и доверие на старте пути.',
    heroTitle: 'Награды для инвесторов',
    heroSubtitle: 'Благодарность за веру в проект и поддержку',
    heroImage: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200',
    challenges: [
      {
        icon: 'Rocket',
        title: 'Этап стартапа',
        description: 'Бюджет ограничен, но благодарность должна быть весомой'
      },
      {
        icon: 'Target',
        title: 'Отметить важную веху',
        description: 'Раунд инвестиций, выход на IPO, первая прибыль'
      },
      {
        icon: 'TrendingUp',
        title: 'Показать рост',
        description: 'Инвестор хочет видеть результаты своих вложений'
      },
      {
        icon: 'Award',
        title: 'Профессиональная ценность',
        description: 'Награда для портфолио и репутации инвестора'
      }
    ],
    solutions: [
      {
        icon: 'LineChart',
        title: 'Метрики роста',
        description: 'Визуализация достижений с момента инвестиций'
      },
      {
        icon: 'Lightbulb',
        title: 'История успеха',
        description: 'Памятный знак начала пути компании'
      },
      {
        icon: 'Camera',
        title: 'Для соцсетей',
        description: 'Эффектный дизайн для публикаций в LinkedIn'
      },
      {
        icon: 'Percent',
        title: 'Умная экономия',
        description: 'Дорого выглядящие решения по разумной цене'
      }
    ],
    examples: [
      {
        title: 'Награда "Первый инвестор"',
        description: 'Стеклянный куб с логотипом и датой раунда',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        occasion: 'Закрытие раунда инвестиций',
        price: 'от 18 000 ₽'
      },
      {
        title: 'Плакетка "Партнер роста"',
        description: 'Акрил с инфографикой достижений компании',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        occasion: 'Достижение KPI, exit',
        price: 'от 25 000 ₽'
      },
      {
        title: 'Статуэтка "Визионер"',
        description: 'Смола и дерево, авторский дизайн',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        occasion: 'Благодарность за веру в проект',
        price: 'от 32 000 ₽'
      }
    ],
    why: [
      {
        title: 'Работаем со стартапами',
        description: 'Понимаем специфику молодых компаний'
      },
      {
        title: 'Гибкие условия',
        description: 'Отсрочка платежа до получения инвестиций'
      },
      {
        title: 'Быстрая реализация',
        description: 'Готовы к дате демо-дня или презентации'
      }
    ],
    ctaTitle: 'Заказать награду для инвестора',
    ctaDescription: 'Поможем выбрать достойный вариант в рамках бюджета'
  },
  partner: {
    id: 'partner',
    title: 'Награды партнерам',
    painTitle: 'Что подарить партнеру?',
    painDescription: 'Партнерские отношения строятся на взаимном доверии. Подарок должен укреплять связь и показывать ценность долгосрочного сотрудничества.',
    heroTitle: 'Награды для деловых партнеров',
    heroSubtitle: 'Укрепляем партнерские отношения через признание вклада',
    heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200',
    challenges: [
      {
        icon: 'Network',
        title: 'Множество партнеров',
        description: 'Нужны награды для партнерской программы или конференции'
      },
      {
        icon: 'Calendar',
        title: 'Регулярные награждения',
        description: 'Ежегодные встречи и церемонии для партнеров'
      },
      {
        icon: 'Zap',
        title: 'Разные уровни партнерства',
        description: 'Золотые, серебряные, бронзовые партнеры — разный статус'
      },
      {
        icon: 'Gift',
        title: 'Приятный сюрприз',
        description: 'Подарок должен удивить и запомниться'
      }
    ],
    solutions: [
      {
        icon: 'Layers',
        title: 'Линейка наград',
        description: 'Единый дизайн для разных уровней партнерства'
      },
      {
        icon: 'Stamp',
        title: 'Брендирование',
        description: 'Логотипы обеих компаний на награде'
      },
      {
        icon: 'Package',
        title: 'Массовое производство',
        description: 'Выгодные условия при заказе от 10 штук'
      },
      {
        icon: 'Truck',
        title: 'Доставка на мероприятие',
        description: 'Привезем награды к дате партнерской конференции'
      }
    ],
    examples: [
      {
        title: 'Награда "Золотой партнер"',
        description: 'Стекло с позолотой и гравировкой статуса',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        occasion: 'Партнерская конференция',
        price: 'от 12 000 ₽'
      },
      {
        title: 'Плакетка "5 лет партнерства"',
        description: 'Дерево и металл с памятными датами',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        occasion: 'Годовщина сотрудничества',
        price: 'от 15 000 ₽'
      },
      {
        title: 'Настольный сувенир',
        description: 'Камень с логотипами компаний-партнеров',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        occasion: 'Благодарность за проект',
        price: 'от 18 000 ₽'
      }
    ],
    why: [
      {
        title: 'Опыт с программами лояльности',
        description: 'Разработаем систему наград для партнерской программы'
      },
      {
        title: 'Склад готовых решений',
        description: 'Быстрая отгрузка наград для срочных мероприятий'
      },
      {
        title: 'Накопительные скидки',
        description: 'Чем больше заказ, тем выгоднее цена'
      }
    ],
    ctaTitle: 'Заказать награды для партнеров',
    ctaDescription: 'Разработаем линейку наград под вашу партнерскую программу'
  },
  employee: {
    id: 'employee',
    title: 'Награды сотрудникам',
    painTitle: 'Что подарить сотруднику?',
    painDescription: 'Сотрудники — основа компании. Награда должна мотивировать, показывать признание и создавать культуру достижений в коллективе.',
    heroTitle: 'Награды для сотрудников',
    heroSubtitle: 'Мотивируем команду через признание заслуг',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200',
    challenges: [
      {
        icon: 'Users',
        title: 'Много сотрудников',
        description: 'Нужны награды для всей команды или отделов'
      },
      {
        icon: 'Wallet',
        title: 'Ограниченный бюджет',
        description: 'Хочется достойную награду по доступной цене'
      },
      {
        icon: 'Heart',
        title: 'Мотивация и признание',
        description: 'Награда должна вдохновлять на новые достижения'
      },
      {
        icon: 'Home',
        title: 'Захочет ли хранить?',
        description: 'Боязнь, что награда останется в офисе, а не дома'
      }
    ],
    solutions: [
      {
        icon: 'BadgeCheck',
        title: 'Персонализация',
        description: 'Имя, должность, достижение на каждой награде'
      },
      {
        icon: 'TrendingUp',
        title: 'Система мотивации',
        description: 'Награды за разные достижения и KPI'
      },
      {
        icon: 'DollarSign',
        title: 'Доступные цены',
        description: 'Качественные награды от 3 000 рублей'
      },
      {
        icon: 'Camera',
        title: 'Красиво для фото',
        description: 'Сотрудники с гордостью делятся в соцсетях'
      }
    ],
    examples: [
      {
        title: 'Награда "Сотрудник месяца"',
        description: 'Акриловая плакетка с индивидуальной гравировкой',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        occasion: 'Ежемесячное награждение',
        price: 'от 3 500 ₽'
      },
      {
        title: 'Диплом "За выслугу лет"',
        description: 'Деревянная рамка с металлической табличкой',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        occasion: '5, 10, 15 лет работы',
        price: 'от 5 500 ₽'
      },
      {
        title: 'Статуэтка "Лучший по профессии"',
        description: 'Стекло с цветной подложкой и гравировкой',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        occasion: 'Профессиональные конкурсы',
        price: 'от 7 500 ₽'
      }
    ],
    why: [
      {
        title: 'Массовое производство',
        description: 'Изготовим награды для всего коллектива'
      },
      {
        title: 'База готовых дизайнов',
        description: 'Быстрый старт без долгой разработки'
      },
      {
        title: 'Именная гравировка',
        description: 'Персонализируем каждую награду бесплатно'
      }
    ],
    ctaTitle: 'Заказать награды для сотрудников',
    ctaDescription: 'Создадим систему наград для вашей корпоративной культуры'
  }
};

const RecipientAwardsPage = () => {
  const { recipientId } = useParams<{ recipientId: string }>();
  const [showCallModal, setShowCallModal] = useState(false);
  
  const recipient = recipientId ? recipientTypes[recipientId] : null;

  if (!recipient) {
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
      
      {/* Hero Section with Pain Point */}
      <section className="relative min-h-[700px] flex items-center pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${recipient.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="ArrowLeft" size={16} />
                На главную
              </Link>
            </div>
            
            {/* Pain Point */}
            <div className="mb-12 p-8 bg-destructive/10 border-2 border-destructive/30 rounded-2xl backdrop-blur-sm">
              <Icon name="HelpCircle" size={48} className="text-destructive mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-destructive">
                {recipient.painTitle}
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed">
                {recipient.painDescription}
              </p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {recipient.heroTitle}
            </h1>
            <p className="text-2xl text-muted-foreground mb-10 leading-relaxed">
              {recipient.heroSubtitle}
            </p>
            
            <button
              onClick={() => setShowCallModal(true)}
              className="px-10 py-5 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3"
            >
              Подобрать награду
              <Icon name="ArrowRight" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Знакомые сложности?</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Мы понимаем эти проблемы и знаем, как их решить
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {recipient.challenges.map((challenge, index) => (
              <div 
                key={index}
                className="bg-background border-2 border-destructive/20 rounded-2xl p-6 hover:border-destructive/40 transition-all"
              >
                <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={challenge.icon as any} size={28} className="text-destructive" />
                </div>
                <h3 className="text-lg font-bold mb-3">{challenge.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Наши решения</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Так мы помогаем сделать правильный выбор
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {recipient.solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  <Icon name={solution.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Готовые решения</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Примеры наград, которые мы создали для подобных случаев
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {recipient.examples.map((example, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-2xl overflow-hidden hover:border-primary transition-all group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {example.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {example.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="Calendar" size={14} />
                    {example.occasion}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowCallModal(true)}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Обсудить свой вариант
              <Icon name="MessageCircle" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Почему мы?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {recipient.why.map((item, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
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
              {recipient.ctaTitle}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {recipient.ctaDescription}
            </p>
            
            <button
              onClick={() => setShowCallModal(true)}
              className="px-12 py-6 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3"
            >
              Получить консультацию
              <Icon name="Phone" size={20} />
            </button>
            
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-background border border-border rounded-xl p-6">
                <div className="text-4xl font-bold text-primary mb-2">30 мин</div>
                <div className="text-muted-foreground">Консультация</div>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <div className="text-4xl font-bold text-primary mb-2">3-5</div>
                <div className="text-muted-foreground">Варианта на выбор</div>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Найдем решение</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {showCallModal && (
        <CallModal 
          onClose={() => setShowCallModal(false)}
          source={`recipient-${recipient.id}`}
        />
      )}
    </div>
  );
};

export default RecipientAwardsPage;