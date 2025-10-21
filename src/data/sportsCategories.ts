export interface SportsCategory {
  id: string;
  title: string;
  description: string;
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
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export const sportsCategories: Record<string, SportsCategory> = {
  'trophy-cups': {
    id: 'trophy-cups',
    title: 'Кубки с чашами',
    description: 'Классические спортивные кубки для победителей',
    heroTitle: 'Кубки с чашами для чемпионов',
    heroSubtitle: 'Символ победы и спортивных достижений',
    heroDescription: 'Создаем эксклюзивные кубки с чашами для спортивных соревнований любого уровня. От местных турниров до международных чемпионатов.',
    heroImages: [
      'https://cdn.poehali.dev/files/1ffe9c3a-40d2-498d-ade1-8f2fafabdb5c.png',
    ],
    gallery: [
      {
        title: 'Золотые кубки премиум',
        category: 'Для победителей',
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/96596fb8-0738-4157-b684-72a05db139bf.jpg',
        materials: ['Латунь', 'Позолота', 'Гравировка', 'Постамент из мрамора']
      },
      {
        title: 'Серебряные кубки',
        category: 'Для призеров',
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/64fe7e7d-6e4e-4043-a4dd-c75ff619a585.jpg',
        materials: ['Нержавеющая сталь', 'Полировка', 'Гравировка']
      },
      {
        title: 'Командные кубки',
        category: 'Для команд',
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/f5760650-2fc8-4394-8b5b-1edcc7f75cf0.jpg',
        materials: ['Металл', 'Высота до 80 см', 'Массивный постамент']
      },
      {
        title: 'Кубки с чашей на колонне',
        category: 'Классика',
        image: 'https://cdn.poehali.dev/files/1ffe9c3a-40d2-498d-ade1-8f2fafabdb5c.png',
        materials: ['Бронза', 'Эмаль', 'Памятные таблички', 'Гранитный постамент']
      },
      {
        title: 'Спортивные кубки с фигурами',
        category: 'Тематические',
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/96596fb8-0738-4157-b684-72a05db139bf.jpg',
        materials: ['Металл', 'Спортивные фигуры', 'Цветные ленты']
      },
      {
        title: 'Эксклюзивные кубки',
        category: 'Премиум класс',
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/64fe7e7d-6e4e-4043-a4dd-c75ff619a585.jpg',
        materials: ['Позолота 24К', 'Кристаллы', 'Индивидуальный дизайн']
      }
    ],
    occasions: [
      {
        title: 'Спортивные чемпионаты',
        description: 'Кубки для победителей городских, региональных и национальных турниров',
        image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=800',
        examples: ['Кубок чемпиона', 'Награда MVP', 'Командный трофей']
      },
      {
        title: 'Корпоративные турниры',
        description: 'Награды для внутренних спортивных соревнований компаний',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
        examples: ['Кубок директора', 'Спартакиада', 'Team building']
      },
      {
        title: 'Детско-юношеский спорт',
        description: 'Мотивирующие награды для юных спортсменов',
        image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800',
        examples: ['Кубок первенства', 'Награда "Надежда"', 'Юный чемпион']
      },
      {
        title: 'Международные соревнования',
        description: 'Престижные кубки для турниров мирового уровня',
        image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800',
        examples: ['Международный кубок', 'Европейский трофей', 'Мировая лига']
      }
    ],
    features: [
      {
        icon: 'Trophy',
        title: 'Высота до 80 см',
        description: 'Впечатляющие размеры для главных побед'
      },
      {
        icon: 'Zap',
        title: 'Быстрое производство',
        description: 'Готовы к турниру за 5-7 дней'
      },
      {
        icon: 'Sparkles',
        title: 'Гравировка в подарок',
        description: 'Персонализация каждого кубка'
      },
    ]
  },
  'transitional-cups': {
    id: 'transitional-cups',
    title: 'Переходящие кубки',
    description: 'Кубки для регулярных турниров и чемпионатов',
    heroTitle: 'Переходящие кубки традиций',
    heroSubtitle: 'Награда, которая объединяет поколения спортсменов',
    heroDescription: 'Создаем переходящие кубки для спортивных лиг, корпоративных турниров и традиционных соревнований. Каждый победитель становится частью истории.',
    heroImages: [
      'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/64fe7e7d-6e4e-4043-a4dd-c75ff619a585.jpg',
    ],
    gallery: [
      {
        title: 'Спортивные переходящие кубки',
        category: 'Для лиг и чемпионатов',
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/64fe7e7d-6e4e-4043-a4dd-c75ff619a585.jpg',
        materials: ['Латунь', 'Позолота', 'Место для табличек', 'Мраморный постамент']
      },
      {
        title: 'Корпоративные переходящие кубки',
        category: 'Для компаний',
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/f5760650-2fc8-4394-8b5b-1edcc7f75cf0.jpg',
        materials: ['Металл', 'Корпоративная символика', 'Гравировка']
      },
      {
        title: 'Кубки с историей победителей',
        category: 'С табличками',
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/96596fb8-0738-4157-b684-72a05db139bf.jpg',
        materials: ['Бронза', 'До 50 табличек', 'Гравировка имен']
      },
      {
        title: 'Именные переходящие кубки',
        category: 'Традиционные',
        image: 'https://cdn.poehali.dev/files/1ffe9c3a-40d2-498d-ade1-8f2fafabdb5c.png',
        materials: ['Эмаль', 'Памятные таблички', 'Высота 60-70 см']
      },
      {
        title: 'Эксклюзивные кубки на заказ',
        category: 'Премиум',
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/64fe7e7d-6e4e-4043-a4dd-c75ff619a585.jpg',
        materials: ['Уникальный дизайн', 'Благородные материалы', 'Ручная работа']
      },
      {
        title: 'Кубки с футляром',
        category: 'Для хранения',
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/f5760650-2fc8-4394-8b5b-1edcc7f75cf0.jpg',
        materials: ['Деревянный футляр', 'Бархатная подложка', 'Защита награды']
      }
    ],
    occasions: [
      {
        title: 'Ежегодные турниры',
        description: 'Кубок, который переходит от победителя к победителю каждый год',
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800',
        examples: ['Кубок лиги', 'Годовой чемпионат', 'Традиционный турнир']
      },
      {
        title: 'Корпоративные соревнования',
        description: 'Награда для внутренних турниров и спартакиад компании',
        image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800',
        examples: ['Кубок CEO', 'Спартакиада компании', 'Междепартаментские игры']
      },
      {
        title: 'Студенческие лиги',
        description: 'Переходящие кубки для университетских и школьных соревнований',
        image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800',
        examples: ['Кубок университета', 'Школьная лига', 'Студенческие игры']
      },
      {
        title: 'Профессиональные лиги',
        description: 'Престижные трофеи для профессиональных спортивных лиг',
        image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=800',
        examples: ['Главный трофей лиги', 'Кубок чемпионов', 'Суперкубок']
      }
    ],
    features: [
      {
        icon: 'History',
        title: 'Место для табличек',
        description: 'Запись всех победителей турнира'
      },
      {
        icon: 'Shield',
        title: 'Прочная конструкция',
        description: 'Выдержит годы традиции'
      },
      {
        icon: 'Crown',
        title: 'Уникальный дизайн',
        description: 'Создаем по вашему эскизу'
      },
    ]
  },
  'cybersport': {
    id: 'cybersport',
    title: 'Киберспорт',
    description: 'Современные награды для киберспортивных турниров',
    heroTitle: 'Награды для киберспорта',
    heroSubtitle: 'Где технологии встречают спортивный дух',
    heroDescription: 'Разрабатываем футуристические награды для киберспортивных турниров. Подсветка, современные материалы и дизайн, отражающий дух игры.',
    heroImages: [
      'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/f5760650-2fc8-4394-8b5b-1edcc7f75cf0.jpg',
    ],
    gallery: [
      {
        title: 'Трофеи с RGB-подсветкой',
        category: 'Hi-tech награды',
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/f5760650-2fc8-4394-8b5b-1edcc7f75cf0.jpg',
        materials: ['Акрил', 'LED-подсветка', 'USB-зарядка', 'Пульт управления']
      },
      {
        title: 'Акриловые статуэтки',
        category: 'Современный стиль',
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/96596fb8-0738-4157-b684-72a05db139bf.jpg',
        materials: ['Прозрачный акрил', 'Лазерная гравировка', 'Металлическая база']
      },
      {
        title: 'Тематические трофеи',
        category: 'По мотивам игр',
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/64fe7e7d-6e4e-4043-a4dd-c75ff619a585.jpg',
        materials: ['Пластик', '3D-печать', 'Покраска', 'Детализация']
      },
      {
        title: 'Кубки для турниров',
        category: 'Киберспортивные',
        image: 'https://cdn.poehali.dev/files/1ffe9c3a-40d2-498d-ade1-8f2fafabdb5c.png',
        materials: ['Металл', 'Неоновая подсветка', 'Геймерский дизайн']
      },
      {
        title: 'Медали и награды',
        category: 'Для призеров',
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/f5760650-2fc8-4394-8b5b-1edcc7f75cf0.jpg',
        materials: ['Металл', 'Эмаль', 'Лента с принтом', 'Футляр']
      },
      {
        title: 'Интерактивные трофеи',
        category: 'Технологичные',
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/96596fb8-0738-4157-b684-72a05db139bf.jpg',
        materials: ['Электроника', 'Дисплей', 'Звуковые эффекты', 'Батарея']
      }
    ],
    occasions: [
      {
        title: 'Турниры по CS:GO, Dota 2, LoL',
        description: 'Награды для популярных командных киберспортивных дисциплин',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
        examples: ['Кубок чемпиона', 'Трофей MVP', 'Командная награда']
      },
      {
        title: 'Стриминг и контент',
        description: 'Награды для стримеров и создателей игрового контента',
        image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800',
        examples: ['Лучший стример', 'Контент года', 'Народный выбор']
      },
      {
        title: 'Киберспортивные лиги',
        description: 'Трофеи для профессиональных киберспортивных организаций',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
        examples: ['Кубок лиги', 'Переходящий трофей', 'Сезонная награда']
      },
      {
        title: 'LAN-турниры',
        description: 'Награды для локальных соревнований и фестивалей',
        image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800',
        examples: ['Победитель турнира', 'Лучший игрок', 'Гран-при']
      }
    ],
    features: [
      {
        icon: 'Gamepad2',
        title: 'Геймерский стиль',
        description: 'Дизайн в духе любимых игр'
      },
      {
        icon: 'Lightbulb',
        title: 'LED-подсветка',
        description: 'Эффектное свечение трофея'
      },
      {
        icon: 'Cpu',
        title: 'Hi-tech материалы',
        description: 'Акрил, металл, светодиоды'
      },
    ]
  },
};
