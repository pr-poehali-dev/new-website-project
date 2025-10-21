import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import CallModal from '@/components/CallModal';

interface RecipientType {
  id: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImages: string[];
  gallery: Array<{
    title: string;
    category: string;
    image: string;
    materials: string[];
  }>;
  occasions: Array<{
    title: string;
    description: string;
    image: string;
    examples: string[];
  }>;
  showcase: Array<{
    image: string;
    title: string;
    price: string;
  }>;
  advantages: Array<{
    title: string;
    description: string;
  }>;
}

const recipientTypes: Record<string, RecipientType> = {
  director: {
    id: 'director',
    title: 'Награды руководителю',
    heroTitle: 'Награды для первых лиц компании',
    heroSubtitle: 'Эксклюзивные решения подчеркивающие статус',
    heroDescription: 'Создаем уникальные награды из благородных материалов для тех, кто ценит качество, индивидуальность и безупречный вкус.',
    heroImages: [
      'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800',
      'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=800',
    ],
    gallery: [
      {
        title: 'Каменная история',
        category: 'Мрамор и гранит',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        materials: ['Мрамор', 'Гранит', 'Оникс', 'Бронза']
      },
      {
        title: 'Стеклянные шедевры',
        category: 'Хрусталь и стекло',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        materials: ['Хрусталь', 'Оптическое стекло', 'Гравировка']
      },
      {
        title: 'Металлические композиции',
        category: 'Бронза и латунь',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        materials: ['Бронза', 'Латунь', 'Патинирование', 'Позолота']
      },
      {
        title: 'Деревянная классика',
        category: 'Ценные породы',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600',
        materials: ['Дуб', 'Орех', 'Венге', 'Инкрустация']
      },
      {
        title: 'Авторские работы',
        category: 'Смешанные техники',
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600',
        materials: ['Камень', 'Металл', 'Стекло', 'Дерево']
      },
      {
        title: 'Настольные сувениры',
        category: 'Для рабочего кабинета',
        image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600',
        materials: ['Мрамор', 'Кожа', 'Металл', 'Позолота']
      }
    ],
    occasions: [
      {
        title: 'День рождения',
        description: 'Персональный подарок с гравировкой имени и пожеланий',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
        examples: ['Статуэтка с датой рождения', 'Памятная плакетка', 'Авторская композиция']
      },
      {
        title: 'Юбилей компании',
        description: 'Награда отражающая историю и достижения бизнеса',
        image: 'https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?w=800',
        examples: ['Стела с хронологией', 'Кубок с логотипом', 'Панно с фотографиями']
      },
      {
        title: 'Годовщина в должности',
        description: 'Признание вклада руководителя в развитие компании',
        image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800',
        examples: ['Награда "Лидер"', 'Памятный знак', 'Бронзовая статуэтка']
      },
      {
        title: 'Благодарность',
        description: 'Знак уважения и признательности от команды',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
        examples: ['Плакетка с подписями', 'Стеклянная награда', 'Сувенир ручной работы']
      }
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400', title: 'Стела "Лидер"', price: 'от 65 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=400', title: 'Кубок премиум', price: 'от 85 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400', title: 'Статуэтка', price: 'от 120 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400', title: 'Плакетка', price: 'от 45 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400', title: 'Композиция', price: 'от 95 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400', title: 'Настольный', price: 'от 55 000 ₽' },
    ],
    advantages: [
      { title: 'Индивидуальный подход', description: 'Персональный дизайнер для каждого проекта' },
      { title: 'Премиум материалы', description: 'Работаем только с благородными материалами' },
      { title: 'Конфиденциальность', description: 'Полная секретность до момента вручения' },
      { title: 'Опыт 15 лет', description: 'Работаем с крупнейшими компаниями России' }
    ]
  },
  founder: {
    id: 'founder',
    title: 'Награды основателю',
    heroTitle: 'Награды для основателей компании',
    heroSubtitle: 'Признание вклада создателя бизнеса',
    heroDescription: 'Награда основателю — это не просто подарок, это символ благодарности за годы труда, веру в идею и создание компании с нуля.',
    heroImages: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800',
    ],
    gallery: [
      {
        title: 'Памятные стелы',
        category: 'История компании',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        materials: ['Мрамор', 'Бронза', 'Гравировка портрета']
      },
      {
        title: 'Авторские скульптуры',
        category: 'Уникальные работы',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        materials: ['Бронза', 'Гранит', 'Патина', 'Позолота']
      },
      {
        title: 'Хрустальные награды',
        category: 'Премиум класс',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        materials: ['Хрусталь ручной работы', 'Инкрустация', 'LED подсветка']
      },
      {
        title: 'Настенные панно',
        category: 'Для офиса или дома',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600',
        materials: ['Дерево ценных пород', 'Металл', 'Кожа']
      },
      {
        title: 'Книги истории',
        category: 'Путь компании',
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600',
        materials: ['Кожаный переплет', 'Металлические вставки', 'Футляр']
      },
      {
        title: 'Коллекционные издания',
        category: 'На память',
        image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600',
        materials: ['Камень', 'Дерево', 'Стекло', 'Фотографии']
      }
    ],
    occasions: [
      {
        title: 'Юбилей компании',
        description: 'Награда символизирующая путь от идеи до успешного бизнеса',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
        examples: ['Стела с историей', 'Хронология в камне', 'Книга компании']
      },
      {
        title: 'Выход на пенсию',
        description: 'Благодарность за годы руководства и созданное наследие',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        examples: ['Памятная награда', 'Портрет в бронзе', 'Семейная реликвия']
      },
      {
        title: 'Продажа доли бизнеса',
        description: 'Символ завершения важного этапа в жизни компании',
        image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800',
        examples: ['Эксклюзивная статуэтка', 'Награда "Визионер"', 'Памятный знак']
      },
      {
        title: 'Достижение целей',
        description: 'Признание реализации мечты и создания успешного дела',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
        examples: ['Кубок достижений', 'Стела успеха', 'Авторская работа']
      }
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400', title: 'Стела история', price: 'от 120 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=400', title: 'Скульптура', price: 'от 250 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400', title: 'Хрусталь VIP', price: 'от 95 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400', title: 'Панно', price: 'от 150 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400', title: 'Книга истории', price: 'от 180 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400', title: 'Коллекция', price: 'от 200 000 ₽' },
    ],
    advantages: [
      { title: 'Уникальность', description: 'Каждая награда разрабатывается индивидуально' },
      { title: 'Работа с историей', description: 'Интервью с командой для создания концепции' },
      { title: 'Драгоценные материалы', description: 'Серебро, золото, натуральный камень' },
      { title: 'Сертификат подлинности', description: 'Документ о материалах и авторстве' }
    ]
  },
  shareholder: {
    id: 'shareholder',
    title: 'Награды акционеру',
    heroTitle: 'Награды для акционеров',
    heroSubtitle: 'Благодарность за доверие и инвестиции',
    heroDescription: 'Награда акционеру подчеркивает взаимное уважение и ценность долгосрочного партнерства в бизнесе.',
    heroImages: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    ],
    gallery: [
      {
        title: 'Корпоративные плакетки',
        category: 'С символикой компании',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        materials: ['Стекло', 'Латунь', 'Гравировка логотипа']
      },
      {
        title: 'Памятные стелы',
        category: 'Годы партнерства',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        materials: ['Мрамор', 'Металл', 'Даты сотрудничества']
      },
      {
        title: 'Настольные композиции',
        category: 'Для кабинета',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        materials: ['Камень', 'Бронза', 'Дерево']
      },
      {
        title: 'Протокольные подарки',
        category: 'Для собраний',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600',
        materials: ['Хрусталь', 'Серебро', 'Футляр с логотипом']
      },
      {
        title: 'Инвестиционные награды',
        category: 'За вклад',
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600',
        materials: ['Стекло', 'Металл', 'Инфографика']
      },
      {
        title: 'Серийные награды',
        category: 'Для всех акционеров',
        image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600',
        materials: ['Единый дизайн', 'Персонализация', 'Упаковка']
      }
    ],
    occasions: [
      {
        title: 'Годовое собрание',
        description: 'Награждение партнеров по итогам финансового года',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
        examples: ['Плакетка года', 'Стеклянная награда', 'Памятный сувенир']
      },
      {
        title: 'Достижение целей',
        description: 'Празднование финансовых успехов и роста компании',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        examples: ['Кубок успеха', 'Награда роста', 'Инфографика достижений']
      },
      {
        title: 'Годовщина партнерства',
        description: 'Признание долгосрочного сотрудничества',
        image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800',
        examples: ['Стела с датами', 'Памятная награда', 'Сувенир премиум']
      },
      {
        title: 'Благодарность за инвестиции',
        description: 'Признательность за вклад в развитие бизнеса',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
        examples: ['Награда инвестору', 'Плакетка вклада', 'Памятный знак']
      }
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400', title: 'Плакетка', price: 'от 35 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=400', title: 'Стела', price: 'от 55 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400', title: 'Настольный', price: 'от 45 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400', title: 'Протокольный', price: 'от 65 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400', title: 'Инвестору', price: 'от 75 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400', title: 'Серия', price: 'от 30 000 ₽' },
    ],
    advantages: [
      { title: 'Протокольность', description: 'Соответствие деловой этике и стандартам' },
      { title: 'Оптовые заказы', description: 'Награды для всех акционеров в едином стиле' },
      { title: 'Сертификация', description: 'Документы на материалы для протокола' },
      { title: 'Срочное изготовление', description: 'Готовы к дате собрания' }
    ]
  },
  investor: {
    id: 'investor',
    title: 'Награды инвестору',
    heroTitle: 'Награды для инвесторов',
    heroSubtitle: 'Благодарность за веру в проект',
    heroDescription: 'Инвестор дал не просто деньги, но и веру в ваш проект. Награда — это знак признательности за риск и поддержку.',
    heroImages: [
      'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
    ],
    gallery: [
      {
        title: 'Награды стартапам',
        category: 'Для молодых компаний',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        materials: ['Стекло', 'Акрил', 'Современный дизайн']
      },
      {
        title: 'Первый раунд',
        category: 'Памятный знак',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        materials: ['Стеклянный куб', 'Гравировка даты', 'Логотип']
      },
      {
        title: 'Визионер',
        category: 'За веру в идею',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        materials: ['Смола', 'Дерево', 'Авторский дизайн']
      },
      {
        title: 'Партнер роста',
        category: 'Инфографика',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600',
        materials: ['Акрил', 'Печать метрик', 'Цветная подложка']
      },
      {
        title: 'Exit награды',
        category: 'Успешный выход',
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600',
        materials: ['Премиум материалы', 'Эксклюзив', 'Футляр']
      },
      {
        title: 'Серия для фонда',
        category: 'Портфолио',
        image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600',
        materials: ['Единый стиль', 'Персонализация', 'Брендинг']
      }
    ],
    occasions: [
      {
        title: 'Закрытие раунда',
        description: 'Благодарность за инвестиции на старте пути',
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800',
        examples: ['Награда первому', 'Памятный куб', 'Стеклянная стела']
      },
      {
        title: 'Достижение KPI',
        description: 'Празднование промежуточных успехов проекта',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        examples: ['Плакетка роста', 'Награда метрик', 'Инфографика']
      },
      {
        title: 'Exit событие',
        description: 'Успешный выход и возврат инвестиций',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
        examples: ['Премиум награда', 'Статуэтка успеха', 'Памятный знак']
      },
      {
        title: 'Благодарность',
        description: 'Признательность за веру в команду и продукт',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
        examples: ['Награда визионеру', 'Сувенир премиум', 'Авторская работа']
      }
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400', title: 'Первый инвестор', price: 'от 18 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=400', title: 'Партнер роста', price: 'от 25 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400', title: 'Визионер', price: 'от 32 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400', title: 'Exit награда', price: 'от 55 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400', title: 'Фонду', price: 'от 45 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400', title: 'Серия', price: 'от 15 000 ₽' },
    ],
    advantages: [
      { title: 'Работаем со стартапами', description: 'Понимаем специфику молодых компаний' },
      { title: 'Гибкие условия', description: 'Отсрочка платежа до получения инвестиций' },
      { title: 'Современный дизайн', description: 'Награды для tech компаний и фондов' },
      { title: 'Быстрая реализация', description: 'Готовы к дате демо-дня' }
    ]
  },
  partner: {
    id: 'partner',
    title: 'Награды партнерам',
    heroTitle: 'Награды для деловых партнеров',
    heroSubtitle: 'Укрепляем партнерские отношения',
    heroDescription: 'Партнерские отношения строятся на доверии. Награда показывает ценность долгосрочного сотрудничества.',
    heroImages: [
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    ],
    gallery: [
      {
        title: 'Золотые партнеры',
        category: 'Высший статус',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        materials: ['Стекло с позолотой', 'Гравировка', 'Премиум']
      },
      {
        title: 'Серебряные партнеры',
        category: 'Средний уровень',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        materials: ['Металл', 'Стекло', 'Серебрение']
      },
      {
        title: 'Бронзовые партнеры',
        category: 'Начальный уровень',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        materials: ['Акрил', 'Дерево', 'Бронза']
      },
      {
        title: 'Годовщина сотрудничества',
        category: '5, 10, 15 лет',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600',
        materials: ['Дерево', 'Металл', 'Памятные даты']
      },
      {
        title: 'За проект',
        category: 'Благодарность',
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600',
        materials: ['Камень', 'Логотипы компаний', 'Сувенир']
      },
      {
        title: 'Партнерская программа',
        category: 'Массовые награды',
        image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600',
        materials: ['Единый дизайн', 'Тираж', 'Упаковка']
      }
    ],
    occasions: [
      {
        title: 'Партнерская конференция',
        description: 'Награждение лучших партнеров года',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
        examples: ['Кубки по уровням', 'Плакетки', 'Сертификаты']
      },
      {
        title: 'Годовщина сотрудничества',
        description: 'Празднование долгосрочных отношений',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        examples: ['Памятная награда', 'Плакетка с датами', 'Сувенир премиум']
      },
      {
        title: 'Благодарность за проект',
        description: 'Признание вклада в совместную работу',
        image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800',
        examples: ['Награда проекта', 'Настольный сувенир', 'Памятный знак']
      },
      {
        title: 'Партнерская программа',
        description: 'Регулярные награждения активных партнеров',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
        examples: ['Линейка наград', 'Статусные награды', 'Система мотивации']
      }
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400', title: 'Золотой', price: 'от 12 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=400', title: 'Серебряный', price: 'от 15 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400', title: 'Бронзовый', price: 'от 18 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400', title: 'Годовщина', price: 'от 22 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400', title: 'За проект', price: 'от 25 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400', title: 'Программа', price: 'от 8 000 ₽' },
    ],
    advantages: [
      { title: 'Линейка наград', description: 'Единый дизайн для разных уровней' },
      { title: 'Массовое производство', description: 'Выгодные условия при заказе от 10 штук' },
      { title: 'Склад готовых решений', description: 'Быстрая отгрузка для срочных мероприятий' },
      { title: 'Накопительные скидки', description: 'Чем больше заказ, тем выгоднее' }
    ]
  },
  employee: {
    id: 'employee',
    title: 'Награды сотрудникам',
    heroTitle: 'Награды для сотрудников',
    heroSubtitle: 'Мотивация через признание заслуг',
    heroDescription: 'Сотрудники — основа компании. Награда мотивирует, показывает признание и создает культуру достижений.',
    heroImages: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800',
    ],
    gallery: [
      {
        title: 'Сотрудник месяца',
        category: 'Регулярные награды',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
        materials: ['Акрил', 'Гравировка имени', 'Месяц и год']
      },
      {
        title: 'За выслугу лет',
        category: '5, 10, 15 лет работы',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
        materials: ['Дерево', 'Металлическая табличка', 'Рамка']
      },
      {
        title: 'Лучший по профессии',
        category: 'Профессиональные конкурсы',
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600',
        materials: ['Стекло', 'Цветная подложка', 'Гравировка']
      },
      {
        title: 'За достижения',
        category: 'KPI и результаты',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600',
        materials: ['Акрил', 'Металл', 'Персонализация']
      },
      {
        title: 'Команда года',
        category: 'Командные награды',
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600',
        materials: ['Стекло', 'Подставка', 'Названия участников']
      },
      {
        title: 'Массовые награды',
        category: 'Для всего коллектива',
        image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600',
        materials: ['Доступная цена', 'Персонализация', 'Тираж']
      }
    ],
    occasions: [
      {
        title: 'Ежемесячное награждение',
        description: 'Система мотивации лучших сотрудников',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
        examples: ['Сотрудник месяца', 'Лучший в отделе', 'За результаты']
      },
      {
        title: 'Годовщина работы',
        description: 'Признание преданности компании',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800',
        examples: ['5 лет', '10 лет', '15 лет службы']
      },
      {
        title: 'Профессиональные конкурсы',
        description: 'Соревнования внутри компании',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
        examples: ['Лучший продавец', 'Мастер года', 'Инноватор']
      },
      {
        title: 'Корпоративные мероприятия',
        description: 'Награждения на общих собраниях',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
        examples: ['За вклад', 'За преданность', 'Благодарность']
      }
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400', title: 'Месяца', price: 'от 3 500 ₽' },
      { image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=400', title: 'За выслугу', price: 'от 5 500 ₽' },
      { image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400', title: 'Лучший', price: 'от 7 500 ₽' },
      { image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400', title: 'За достижения', price: 'от 6 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400', title: 'Команде', price: 'от 12 000 ₽' },
      { image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400', title: 'Массовые', price: 'от 2 500 ₽' },
    ],
    advantages: [
      { title: 'Доступные цены', description: 'Качественные награды от 2 500 рублей' },
      { title: 'Массовое производство', description: 'Изготовим для всего коллектива' },
      { title: 'Именная гравировка', description: 'Персонализация каждой награды бесплатно' },
      { title: 'База дизайнов', description: 'Быстрый старт без долгой разработки' }
    ]
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
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="ArrowLeft" size={16} />
                Назад
              </Link>
            </div>
            
            <div 
              className="relative min-h-[600px] rounded-3xl overflow-hidden p-12 md:p-16 flex flex-col justify-between"
              style={{
                backgroundImage: `url(${recipient.heroImages[0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
              
              <div className="relative z-10 max-w-3xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  {recipient.heroTitle}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
                  {recipient.heroSubtitle}
                </p>
                <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
                  {recipient.heroDescription}
                </p>
                
                <button
                  onClick={() => setShowCallModal(true)}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-medium hover:bg-white/20 transition-all inline-flex items-center gap-2"
                >
                  Обсудить проект
                  <Icon name="ArrowRight" size={20} />
                </button>
              </div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Индивидуальный подход</h3>
                  <p className="text-white/70 text-sm">Персональный дизайнер для вашего проекта</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Gem" size={24} className="text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Премиум материалы</h3>
                  <p className="text-white/70 text-sm">Только благородные материалы высшего качества</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Срок изготовления</h3>
                  <p className="text-white/70 text-sm">Готовы к вашему важному событию</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipient.gallery.map((item, index) => (
                <div 
                  key={index}
                  className="bg-background rounded-2xl overflow-hidden group hover:shadow-xl transition-all"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.materials.map((material, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
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
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Для каких поводов</h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Подбираем награду под конкретное событие
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {recipient.occasions.map((occasion, index) => (
                <div 
                  key={index}
                  className="group"
                >
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={occasion.image}
                      alt={occasion.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{occasion.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {occasion.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {occasion.examples.map((example, idx) => (
                      <span 
                        key={idx}
                        className="text-sm text-muted-foreground"
                      >
                        {example}{idx < occasion.examples.length - 1 ? ' •' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Примеры работ</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {recipient.showcase.map((item, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-3">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-sm font-medium mb-1">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {recipient.advantages.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Check" size={24} />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Создадим уникальную награду
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Обсудим ваш проект, предложим варианты и подготовим макеты
            </p>
            
            <button
              onClick={() => setShowCallModal(true)}
              className="px-12 py-5 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-all inline-flex items-center gap-2"
            >
              Получить консультацию
              <Icon name="Phone" size={20} />
            </button>
            
            <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">15 лет</div>
                <div className="opacity-80">Опыт работы</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="opacity-80">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="opacity-80">Найдем решение</div>
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