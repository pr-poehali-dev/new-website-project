export interface SportsCategory {
  id: string;
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImages: string[];
  gallery: {
    image: string;
    title: string;
    description: string;
  }[];
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
      'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/64fe7e7d-6e4e-4043-a4dd-c75ff619a585.jpg',
    ],
    gallery: [
      {
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/96596fb8-0738-4157-b684-72a05db139bf.jpg',
        title: 'Золотые кубки',
        description: 'Престижные награды для победителей первенств'
      },
      {
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/64fe7e7d-6e4e-4043-a4dd-c75ff619a585.jpg',
        title: 'Серебряные кубки',
        description: 'Элегантные награды для призеров'
      },
      {
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/f5760650-2fc8-4394-8b5b-1edcc7f75cf0.jpg',
        title: 'Командные кубки',
        description: 'Большие кубки для командных достижений'
      },
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
      'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/f5760650-2fc8-4394-8b5b-1edcc7f75cf0.jpg',
    ],
    gallery: [
      {
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/64fe7e7d-6e4e-4043-a4dd-c75ff619a585.jpg',
        title: 'Спортивные переходящие кубки',
        description: 'Для ежегодных чемпионатов и лиг'
      },
      {
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/f5760650-2fc8-4394-8b5b-1edcc7f75cf0.jpg',
        title: 'Корпоративные кубки',
        description: 'Для внутренних соревнований компаний'
      },
      {
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/96596fb8-0738-4157-b684-72a05db139bf.jpg',
        title: 'Кубки с табличками',
        description: 'История всех победителей на одном кубке'
      },
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
      'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/96596fb8-0738-4157-b684-72a05db139bf.jpg',
    ],
    gallery: [
      {
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/f5760650-2fc8-4394-8b5b-1edcc7f75cf0.jpg',
        title: 'Трофеи с подсветкой',
        description: 'RGB-подсветка для эффектного вида'
      },
      {
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/96596fb8-0738-4157-b684-72a05db139bf.jpg',
        title: 'Акриловые награды',
        description: 'Современный дизайн из прозрачного акрила'
      },
      {
        image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/64fe7e7d-6e4e-4043-a4dd-c75ff619a585.jpg',
        title: 'Кастомные трофеи',
        description: 'По мотивам популярных игр'
      },
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