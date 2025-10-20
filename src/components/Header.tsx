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

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const navigation = [
    { name: 'Каталог', href: '#catalog', hasMega: true, megaType: 'catalog' },
    { name: 'О компании', href: '#about', hasMega: true, megaType: 'about' },
  ];

  const catalogCategories = [
    {
      title: 'По материалам',
      items: [
        { name: 'Каменная история', icon: 'Mountain', href: '/catalog/kamennaya-istoriya', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg', 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg'] },
        { name: 'Стеклянные награды', icon: 'GlassWater', href: '/catalog/steklyannye-nagrady', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg', 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg'] },
        { name: 'Акриловые изделия', icon: 'Box', href: '/catalog/akrilovye-izdeliya', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'] },
        { name: 'Предметы в смоле', icon: 'Droplet', href: '/catalog/predmety-v-smole', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg'] },
        { name: 'Изделия из древесины', icon: 'Trees', href: '/catalog/izdeliya-iz-drevesiny', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'] },
        { name: 'Изделия из металла', icon: 'Medal', href: '/catalog/izdeliya-iz-metalla', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg'] },
        { name: 'Дипломы и плакетки', icon: 'Award', href: '/catalog/diplomy-i-plaketki', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'] },
        { name: 'Изделия с 3Д объектами', icon: 'Box', href: '/catalog/izdeliya-s-3d-obektami', images: ['https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b00aafce-33eb-48cc-a06a-06a38c77e9cd.jpg'] },
      ],
    },
    {
      title: 'По мероприятиям',
      items: [
        { name: 'Корпоративные награды', icon: 'Building2' },
        { name: 'Спортивные кубки', icon: 'Trophy' },
        { name: 'Государственные награды', icon: 'Shield' },
        { name: 'Культурные мероприятия', icon: 'Music' },
      ],
    },
    {
      title: 'По получателям',
      items: [
        { name: 'Руководителям', icon: 'UserCog' },
        { name: 'Партнёрам', icon: 'Handshake' },
        { name: 'Сотрудникам', icon: 'Users' },
        { name: 'VIP персонам', icon: 'Crown' },
      ],
    },
    {
      title: 'Особые категории',
      items: [
        { name: 'Авторские подарки', icon: 'Sparkles' },
        { name: 'Корпоративные сувениры', icon: 'Gift' },
        { name: 'Корпоративный декор', icon: 'Palette' },
        { name: 'Награды и достижения', icon: 'Award' },
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

  const handleMouseEnter = (type: string) => {
    if (type === 'catalog') {
      setCatalogOpen(true);
      setAboutOpen(false);
    } else if (type === 'about') {
      setAboutOpen(true);
      setCatalogOpen(false);
    }
  };

  const handleMouseLeave = () => {
    setCatalogOpen(false);
    setAboutOpen(false);
  };

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${
      catalogOpen || aboutOpen ? 'bg-primary border-primary' : 'bg-white/95 border-border'
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
                      catalogOpen || aboutOpen ? 'text-white hover:text-white/80' : 'text-foreground/80 hover:text-foreground'
                    }`}
                    onMouseEnter={() => handleMouseEnter(item.megaType || '')}
                  >
                    {item.name}
                    <Icon name="ChevronDown" size={16} className={`transition-transform duration-300 ${
                      (item.megaType === 'catalog' && catalogOpen) || (item.megaType === 'about' && aboutOpen) ? 'rotate-180' : ''
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
                      catalogOpen || aboutOpen ? 'text-white/80 hover:text-white' : 'text-foreground/80 hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm" className={catalogOpen || aboutOpen ? 'text-white hover:text-white hover:bg-white/10' : ''} onClick={() => alert('Поиск в разработке')}>
              <Icon name="Search" fallback="CircleHelp" size={18} />
            </Button>
            <Button 
              variant={catalogOpen || aboutOpen ? "ghost" : "outline"} 
              size="sm"
              className={catalogOpen || aboutOpen ? 'text-white border-white/20 hover:bg-white/10' : ''}
              onClick={() => setShowCallModal(true)}
            >
              <Icon name="Phone" fallback="PhoneCall" size={16} className="mr-2" />
              Позвонить
            </Button>
            {user ? (
              <Link to="/dashboard">
                <Button size="sm" className={catalogOpen || aboutOpen ? 'bg-white text-primary hover:bg-white/90' : ''}>
                  <Icon name="User" size={16} className="mr-2" />
                  Кабинет
                </Button>
              </Link>
            ) : (
              <Button 
                size="sm" 
                className={catalogOpen || aboutOpen ? 'bg-white text-primary hover:bg-white/90' : ''}
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
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className={catalogOpen || aboutOpen ? 'text-white' : ''} />
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
          catalogOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        onMouseEnter={() => handleMouseEnter('catalog')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-6 py-8 relative">
          <div className="flex gap-12">
            <div className="grid grid-cols-3 gap-8 flex-1">
              {catalogCategories.filter((_, index) => !hoveredCategory || index === 0).map((category, index) => (
                <div key={index} className="animate-in fade-in slide-in-from-top-4 duration-300" style={{ animationDelay: `${index * 50}ms` }}>
                  <h3 className="font-bold text-sm mb-4 text-white/60 uppercase tracking-wide">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.href || '#catalog'}
                          className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
                          onClick={() => handleMouseLeave()}
                          onMouseEnter={() => setHoveredCategory(item.name)}
                          onMouseLeave={() => setHoveredCategory(null)}
                        >
                          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <Icon name={item.icon} size={16} className="text-white/80 group-hover:text-white transition-colors" />
                          </div>
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className={`transition-all duration-300 ${hoveredCategory ? 'w-96 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
              {hoveredCategory && (
                <div 
                  className="bg-white rounded-2xl p-6 shadow-2xl h-full"
                  onMouseEnter={() => setHoveredCategory(hoveredCategory)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <h4 className="font-bold text-lg mb-4 text-foreground">{hoveredCategory}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {catalogCategories
                      .flatMap(cat => cat.items)
                      .find(item => item.name === hoveredCategory)
                      ?.images?.map((image, idx) => (
                        <div key={idx} className="aspect-square rounded-xl overflow-hidden">
                          <img
                            src={image}
                            alt={hoveredCategory}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`hidden lg:block absolute left-0 right-0 top-full bg-primary shadow-2xl transition-all duration-300 overflow-hidden rounded-b-3xl ${
          aboutOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        onMouseEnter={() => handleMouseEnter('about')}
        onMouseLeave={handleMouseLeave}
      >
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
        <CallModal onClose={() => setShowCallModal(false)} />
      )}
    </>
  );
};

export default Header;