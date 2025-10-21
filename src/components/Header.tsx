import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';
import CallModal from './CallModal';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const [callModalSource, setCallModalSource] = useState<'menu' | 'default'>('default');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const navigation = [
    { name: 'Каталог', href: '/catalog', hasMega: true, megaType: 'catalog' },
    { name: 'Награды', href: '#awards', hasMega: true, megaType: 'awards' },
    { name: 'Подарки', href: '#gifts', hasMega: true, megaType: 'gifts' },
    { name: 'Декор', href: '#decor', hasMega: true, megaType: 'decor' },
    { name: 'О компании', href: '#about', hasMega: true, megaType: 'about' },
  ];

  const mainCategories = [
    { 
      name: 'Корпоративные награды', 
      key: 'corporate',
      materials: ['Стекло', 'Металл', 'Дерево', 'Камень', 'Смола', 'Акрил', '3Д Печать'],
      occasions: ['Корпоративные мероприятия', 'Спортивные мероприятия', 'Государственные мероприятия', 'Культурные мероприятия', 'Открытие объекта', 'Завершение проекта', 'Юбилей'],
      recipients: ['Руководителю', 'Основателю', 'Акционеру', 'Инвестору', 'Партнерам', 'Сотрудникам']
    },
    { 
      name: 'Спортивные награды', 
      key: 'sport',
      sportCategories: [
        { name: 'Кубки с чашами', items: ['Переходящие кубки', 'Киберспорт'] }
      ]
    },
    { 
      name: 'Переходящие кубки', 
      key: 'cups',
      sportCategories: [
        { name: 'Переходящие кубки', items: ['Корпоративные переходящие кубки', 'Спортивные переходящие кубки'] }
      ]
    },
    { 
      name: 'Дипломы и грамоты', 
      key: 'diplomas',
      sportCategories: [
        { name: 'Дипломы и грамоты', items: ['Плакетки и дипломы', 'Подарочное панно'] }
      ]
    },
    { 
      name: 'Подарки', 
      key: 'gifts',
      sportCategories: [
        { name: 'Подарки', items: ['Для первых лиц', 'Подарочные наборы', 'Протокольные подарки', 'Корпоративные подарки'] }
      ]
    },
    { 
      name: 'Сувениры', 
      key: 'souvenirs',
      sportCategories: [
        { name: 'Сувениры', items: ['Корпоративные сувениры', 'Сувениры к профессиональным праздникам', 'Настольные сувениры'] }
      ]
    },
    { 
      name: 'Декор', 
      key: 'decor',
      materials: ['Стекло', 'Металл', 'Дерево', 'Камень', 'Смола', 'Акрил', '3Д Печать'],
      occasions: ['Корпоративные мероприятия', 'Спортивные мероприятия', 'Государственные мероприятия', 'Культурные мероприятия', 'Открытие объекта', 'Завершение проекта', 'Юбилей'],
      recipients: ['Руководителю', 'Основателю', 'Акционеру', 'Инвестору', 'Партнерам', 'Сотрудникам']
    },
  ];

  const [selectedMainCategory, setSelectedMainCategory] = useState<string>('corporate');

  const catalogCategories = [
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

  const giftsCategories = [
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

  const awardsCategories = [
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
        { name: 'Каменная история', icon: 'Mountain', href: '/catalog/kamennaya-istoriya' },
        { name: 'Стеклянные награды', icon: 'GlassWater', href: '/catalog/steklyannye-nagrady' },
        { name: 'Акриловые изделия', icon: 'Box', href: '/catalog/akrilovye-izdeliya' },
        { name: 'Предметы в смоле', icon: 'Droplet', href: '/catalog/predmety-v-smole' },
        { name: 'Изделия из древесины', icon: 'Trees', href: '/catalog/izdeliya-iz-drevesiny' },
        { name: 'Изделия из металла', icon: 'Medal', href: '/catalog/izdeliya-iz-metalla' },
      ],
    },
  ];

  const decorCategories = [
    {
      title: 'Декор',
      items: [
        { name: 'Корпоративный декор', icon: 'Palette', href: '#decor', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'] },
        { name: 'Арт-объекты', icon: 'Sparkles', href: '#decor', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg'] },
        { name: 'Панно', icon: 'Frame', href: '#decor', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'] },
      ],
    },
  ];

  const portfolioCategories = [
    {
      title: 'Портфолио',
      items: [
        { name: 'Все проекты', icon: 'Grid3x3', href: '#portfolio', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg', 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg'] },
      ],
    },
  ];

  const aboutLinks = [
    { name: 'О компании', href: '#about', icon: 'Building2' },
    { name: 'Услуги', href: '#services', icon: 'Briefcase' },
    { name: 'Производство', href: '#production', icon: 'Factory' },
    { name: 'Блог', href: '#blog', icon: 'FileText' },
    { name: 'Контакты', href: '#contact', icon: 'MapPin' },
  ];

  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const handleMouseEnter = (type: string) => {
    setActiveMegaMenu(type);
    setCatalogOpen(true);
    setAboutOpen(false);
  };

  const handleMouseLeave = () => {
    setCatalogOpen(false);
    setAboutOpen(false);
    setActiveMegaMenu(null);
  };

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${
      catalogOpen ? 'bg-primary border-primary' : 'bg-white/95 border-border'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/b4dc30a3-6e48-474d-9b15-3f861c33f937.png" 
              alt="Арт Стеклов" 
              className="w-10 h-10 object-contain"
            />
            <span className={`text-xl font-bold transition-colors ${catalogOpen || aboutOpen ? 'text-white' : 'text-foreground'}`}>
              Арт Стеклов
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasMega ? (
                  <button
                    className={`text-sm font-medium transition-colors flex items-center gap-1 py-2 ${
                      catalogOpen ? 'text-white hover:text-white/80' : 'text-foreground/80 hover:text-foreground'
                    }`}
                    onMouseEnter={() => handleMouseEnter(item.megaType || '')}
                  >
                    {item.name}
                    <Icon name="ChevronDown" size={16} className={`transition-transform duration-300 ${
                      catalogOpen && activeMegaMenu === item.megaType ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : item.isRoute ? (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors ${
                      catalogOpen || aboutOpen ? 'text-white/80 hover:text-white' : 'text-foreground/80 hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      catalogOpen ? 'text-white/80 hover:text-white' : 'text-foreground/80 hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm" className={catalogOpen ? 'text-white hover:text-white hover:bg-white/10' : ''} onClick={() => alert('Поиск в разработке')}>
              <Icon name="Search" fallback="CircleHelp" size={18} />
            </Button>
            <Button 
              variant={catalogOpen ? "ghost" : "outline"} 
              size="sm"
              className={catalogOpen ? 'text-white border-white/20 hover:bg-white/10' : ''}
              onClick={() => setShowCallModal(true)}
            >
              <Icon name="Phone" fallback="PhoneCall" size={16} className="mr-2" />
              Позвонить
            </Button>
            {user ? (
              <Link to="/dashboard">
                <Button size="sm" className={catalogOpen ? 'bg-white text-primary hover:bg-white/90' : ''}>
                  <Icon name="User" size={16} className="mr-2" />
                  Кабинет
                </Button>
              </Link>
            ) : (
              <Button 
                size="sm" 
                className={catalogOpen ? 'bg-white text-primary hover:bg-white/90' : ''}
                onClick={() => setShowAuthModal(true)}
              >
                Войти
              </Button>
            )}
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className={catalogOpen ? 'text-white' : ''} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowCallModal(true)}>
                <Icon name="Phone" size={16} className="mr-2" />
                Позвонить
              </Button>
              {user ? (
                <Link to="/dashboard">
                  <Button size="sm" className="w-full">
                    <Icon name="User" size={16} className="mr-2" />
                    Кабинет
                  </Button>
                </Link>
              ) : (
                <Button size="sm" onClick={() => setShowAuthModal(true)}>
                  Войти
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      <div
        className={`hidden lg:block absolute left-0 right-0 top-full bg-primary shadow-2xl transition-all duration-300 overflow-hidden rounded-b-3xl ${
          activeMegaMenu ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        onMouseEnter={() => activeMegaMenu && handleMouseEnter(activeMegaMenu)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-6 py-8 relative">
          {activeMegaMenu === 'catalog' ? (
            <div className="flex gap-8">
              <div className="w-64 border-r border-white/20 pr-8">
                <ul className="space-y-2">
                  {mainCategories.map((category) => (
                    <li key={category.key}>
                      <button
                        className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedMainCategory === category.key
                            ? 'bg-white/20 text-white'
                            : 'text-white/70 hover:text-white hover:bg-white/10'
                        }`}
                        onMouseEnter={() => setSelectedMainCategory(category.key)}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {mainCategories.find(c => c.key === selectedMainCategory)?.sportCategories ? (
                <div className="flex-1 grid grid-cols-2 gap-8">
                  {mainCategories.find(c => c.key === selectedMainCategory)?.sportCategories?.map((sportCat, idx) => (
                    <div key={idx}>
                      <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-3">
                        {sportCat.name}
                      </h3>
                      <ul className="space-y-2">
                        {sportCat.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex-1 grid grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-3">
                      По материалам
                    </h3>
                    <ul className="space-y-2">
                      {mainCategories.find(c => c.key === selectedMainCategory)?.materials.map((material, idx) => (
                        <li key={idx}>
                          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                            {material}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="mt-6 bg-white text-primary hover:bg-white/90 w-full"
                      onClick={() => {
                        setCallModalSource('menu');
                        setShowCallModal(true);
                        handleMouseLeave();
                      }}
                    >
                      Оставить заявку
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-3">
                      Мероприятия
                    </h3>
                    <ul className="space-y-2">
                      {mainCategories.find(c => c.key === selectedMainCategory)?.occasions.map((occasion, idx) => (
                        <li key={idx}>
                          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                            {occasion}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-3">
                      Кому подарить
                    </h3>
                    <ul className="space-y-2">
                      {mainCategories.find(c => c.key === selectedMainCategory)?.recipients.map((recipient, idx) => (
                        <li key={idx}>
                          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                            {recipient}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-0">
              <div className="flex-1 pr-8 border-r border-white/10">
                <div className="grid grid-cols-2 gap-8">
                  {(activeMegaMenu === 'gifts' ? giftsCategories :
                    activeMegaMenu === 'awards' ? awardsCategories :
                    activeMegaMenu === 'decor' ? decorCategories :
                    activeMegaMenu === 'portfolio' ? portfolioCategories :
                    aboutLinks ? [{ title: 'О компании', items: aboutLinks }] : []
                  ).map((category, index) => (
                    <div key={index} className="animate-in fade-in slide-in-from-top-4 duration-300" style={{ animationDelay: `${index * 50}ms` }}>
                      <h3 className="font-bold text-sm mb-4 text-white/60 uppercase tracking-wide">
                        {category.title}
                      </h3>
                      <ul className="space-y-3">
                        {category.items.map((item: any, idx: number) => (
                          <li key={idx}>
                            <div
                              className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group cursor-pointer"
                              onMouseEnter={() => setHoveredCategory(item.name)}
                              onMouseLeave={() => setHoveredCategory(null)}
                            >
                              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <Icon name={item.icon} size={16} className="text-white/80 group-hover:text-white transition-colors" />
                              </div>
                              <span>{item.name}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`transition-all duration-300 pl-8 ${hoveredCategory ? 'w-80 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
                {hoveredCategory && (
                  <div 
                    onMouseEnter={() => setHoveredCategory(hoveredCategory)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <h4 className="font-bold text-sm mb-4 text-white/60 uppercase tracking-wide">{hoveredCategory}</h4>
                    <ul className="space-y-2">
                      {(activeMegaMenu === 'gifts' ? giftsCategories :
                        activeMegaMenu === 'awards' ? awardsCategories :
                        activeMegaMenu === 'decor' ? decorCategories :
                        activeMegaMenu === 'portfolio' ? portfolioCategories : []
                      )
                        .flatMap(cat => cat.items)
                        .find(item => item.name === hoveredCategory)
                        ?.subcategories?.map((sub: any, idx: number) => (
                          <li key={idx}>
                            <Link
                              to={sub.href}
                              className="text-sm text-white/80 hover:text-white transition-colors block py-1"
                              onClick={() => handleMouseLeave()}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-5 gap-6">
            {aboutLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Icon name={link.icon} size={24} className="text-white/80 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-white/80 group-hover:text-white transition-colors font-medium">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
      <AuthModal 
        open={showAuthModal} 
        onOpenChange={setShowAuthModal} 
        onSuccess={(userData) => setUser(userData)} 
      />
      
      {showCallModal && (
        <CallModal 
          onClose={() => {
            setShowCallModal(false);
            setCallModalSource('default');
          }} 
          source={callModalSource}
        />
      )}
    </>
  );
};

export default Header;