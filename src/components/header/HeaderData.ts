export const mainCategories = [
  { 
    name: 'Корпоративные награды', 
    key: 'corporate',
    materials: [{ name: 'Стекло', href: '/catalog/steklo' }, { name: 'Металл', href: '/catalog/metall' }, { name: 'Дерево', href: '/catalog/derevo' }, { name: 'Камень', href: '/catalog/kamen' }, { name: 'Смола', href: '/catalog/smola' }, { name: 'Акрил', href: '/catalog/akril' }],
    occasions: [
      { name: 'Корпоративные мероприятия', href: '/events/korporativnye' },
      { name: 'Государственные мероприятия', href: '/events/gosudarstvennye' },
      { name: 'Культурные мероприятия', href: '/events/kulturnye' },
      { name: 'Открытие объекта', href: '/events/otkrytie-obekta' },
      { name: 'Завершение проекта', href: '/events/zavershenie-proekta' },
      { name: 'Юбилей', href: '/events/yubiley' }
    ],
    recipients: [
      { name: 'Руководителю', href: '/recipients/rukovoditelyu' },
      { name: 'Основателю', href: '/recipients/osnovatelyu' },
      { name: 'Акционеру', href: '/recipients/aktsioneru' },
      { name: 'Инвестору', href: '/recipients/investoru' },
      { name: 'Партнерам', href: '/recipients/partneram' },
      { name: 'Сотрудникам', href: '/recipients/sotrudnikam' }
    ]
  },
  { 
    name: 'Спортивные награды', 
    key: 'sport',
    sportCategories: [
      { name: 'Кубки с чашами', items: [{ name: 'Переходящие кубки', href: '#' }, { name: 'Киберспорт', href: '#' }] }
    ]
  },
  { 
    name: 'Переходящие кубки', 
    key: 'cups',
    sportCategories: [
      { name: 'Переходящие кубки', items: [{ name: 'Корпоративные переходящие кубки', href: '#' }, { name: 'Спортивные переходящие кубки', href: '#' }] }
    ]
  },
  { 
    name: 'Дипломы и грамоты', 
    key: 'diplomas',
    sportCategories: [
      { name: 'Дипломы и грамоты', items: [{ name: 'Плакетки и дипломы', href: '#' }, { name: 'Подарочное панно', href: '#' }] }
    ]
  },
  { 
    name: 'Подарки', 
    key: 'gifts',
    sportCategories: [
      { name: 'Подарки', items: [{ name: 'Для первых лиц', href: '#' }, { name: 'Подарочные наборы', href: '#' }, { name: 'Протокольные подарки', href: '#' }, { name: 'Корпоративные подарки', href: '#' }] }
    ]
  },
  { 
    name: 'Сувениры', 
    key: 'souvenirs',
    sportCategories: [
      { name: 'Сувениры', items: [{ name: 'Корпоративные сувениры', href: '#' }, { name: 'Сувениры к профессиональным праздникам', href: '#' }, { name: 'Настольные сувениры', href: '#' }] }
    ]
  },
  { 
    name: 'Декор', 
    key: 'decor',
    sportCategories: [
      { name: 'Декор', items: [{ name: 'Корпоративный декор', href: '#' }, { name: 'Авторские арт-объекты', href: '#' }, { name: 'Панно', href: '#' }] }
    ]
  },
];

export const catalogCategories = [
  {
    title: 'Награды по материалам',
    items: [
      { name: 'Каменная история', icon: 'Mountain', href: '/catalog/kamennaya-istoriya', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg', 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg'] },
      { name: 'Стеклянные награды', icon: 'GlassWater', href: '/catalog/steklyannye-nagrady', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg', 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg'] },
      { name: 'Акриловые изделия', icon: 'Box', href: '/catalog/akrilovye-izdeliya', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'] },
      { name: 'Предметы в смоле', icon: 'Droplet', href: '/catalog/predmety-v-smole', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg'] },
      { name: 'Изделия из древесины', icon: 'Trees', href: '/catalog/izdeliya-iz-drevesiny', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'] },
      { name: 'Изделия из металла', icon: 'Medal', href: '/catalog/izdeliya-iz-metalla', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg'] },
    ],
  },
];

export const giftsCategories = [
  {
    title: 'Подарки',
    items: [
      { name: 'Протокольные подарки', icon: 'Award', href: '#gifts', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'] },
      { name: 'Подарки для первых лиц', icon: 'Crown', href: '#gifts', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg'] },
      { name: 'Корпоративные подарки', icon: 'Building2', href: '#gifts', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'] },
      { name: 'Корпоративные сувениры', icon: 'Gift', href: '#gifts', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg'] },
    ],
  },
];

export const awardsCategories = [
  {
    title: 'Награды по назначению',
    items: [
      { name: 'Корпоративные награды', icon: 'Building2', href: '#awards', subcategories: [
        { name: 'За достижения', href: '#awards/achievements' },
        { name: 'Юбилейные', href: '#awards/anniversary' },
        { name: 'За выслугу лет', href: '#awards/service' },
      ]},
      { name: 'Переходящие кубки', icon: 'Trophy', href: '#awards', subcategories: [
        { name: 'Спортивные', href: '#awards/sports-cups' },
        { name: 'Корпоративные', href: '#awards/corporate-cups' },
      ]},
      { name: 'Спортивные награды', icon: 'Medal', href: '#awards', subcategories: [
        { name: 'Для команд', href: '#awards/team' },
        { name: 'Индивидуальные', href: '#awards/individual' },
      ]},
      { name: 'Медали', icon: 'Award', href: '#awards', subcategories: [
        { name: 'Золотые', href: '#awards/gold' },
        { name: 'Серебряные', href: '#awards/silver' },
        { name: 'Бронзовые', href: '#awards/bronze' },
      ]},
      { name: 'Дипломы и панно', icon: 'FileText', href: '#awards', subcategories: [
        { name: 'Наградные дипломы', href: '#awards/diplomas' },
        { name: 'Благодарности', href: '#awards/thanks' },
      ]},
    ],
  },
  {
    title: 'Награды по материалам',
    items: [
      { name: 'Камень', icon: 'Mountain', href: '/catalog/kamen' },
      { name: 'Стекло', icon: 'GlassWater', href: '/catalog/steklo' },
      { name: 'Акрил', icon: 'Box', href: '/catalog/akril' },
      { name: 'Смола', icon: 'Droplet', href: '/catalog/smola' },
      { name: 'Дерево', icon: 'Trees', href: '/catalog/derevo' },
      { name: 'Металл', icon: 'Medal', href: '/catalog/metall' },
    ],
  },
];

export const decorCategories = [
  {
    title: 'Декор',
    items: [
      { name: 'Корпоративный декор', icon: 'Palette', href: '#decor', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'] },
      { name: 'Арт-объекты', icon: 'Sparkles', href: '#decor', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg'] },
      { name: 'Панно', icon: 'Frame', href: '#decor', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'] },
    ],
  },
];

export const aboutCategories = [
  {
    title: 'О компании',
    items: [
      { name: 'О нас', icon: 'Building2', href: '/about' },
      { name: 'Наши проекты', icon: 'FolderKanban', href: '/about#projects' },
      { name: 'Команда', icon: 'Users', href: '/about#team' },
      { name: 'Контакты', icon: 'Mail', href: '/about#contacts' },
    ],
  },
];

export const serviceCategories = [
  {
    title: 'Услуги',
    items: [
      { name: 'Индивидуальный дизайн', icon: 'Palette', href: '/service/individual-design' },
      { name: 'Гравировка и нанесение логотипа', icon: 'Stamp', href: '/service/engraving' },
      { name: 'Упаковка и оформление', icon: 'Gift', href: '/service/packaging' },
      { name: 'Доставка по всей России', icon: 'Truck', href: '/service/delivery' },
    ],
  },
];

export const navigation = [
  { name: 'Каталог', href: '/catalog', hasMega: true, megaType: 'catalog' },
  { name: 'О компании', href: '#about', hasMega: true, megaType: 'about' },
];
