import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const navigation = [
    { name: 'Каталог', href: '#catalog', hasMega: true },
    { name: 'AI Конструктор', href: '/constructor', isRoute: true },
    { name: 'Услуги', href: '#services' },
    { name: 'Производство', href: '#production' },
    { name: 'О компании', href: '#about' },
    { name: 'Блог', href: '#blog' },
    { name: 'Контакты', href: '#contact' },
  ];

  const catalogCategories = [
    {
      title: 'По материалам',
      items: [
        { name: 'Хрустальные награды', icon: 'Gem' },
        { name: 'Стеклянные изделия', icon: 'GlassWater' },
        { name: 'Металлические награды', icon: 'Medal' },
        { name: 'Комбинированные', icon: 'Layers' },
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

  const handleMouseEnter = () => {
    setCatalogOpen(true);
  };

  const handleMouseLeave = () => {
    setCatalogOpen(false);
  };

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${
      catalogOpen ? 'bg-primary border-primary' : 'bg-white/95 border-border'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              catalogOpen ? 'bg-white/20' : 'bg-primary'
            }`}>
              <Icon name="Award" className={catalogOpen ? 'text-white' : 'text-primary-foreground'} size={24} />
            </div>
            <span className={`text-xl font-bold transition-colors ${catalogOpen ? 'text-white' : 'text-foreground'}`}>
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
                    onMouseEnter={handleMouseEnter}
                  >
                    {item.name}
                    <Icon name="ChevronDown" size={16} className={`transition-transform duration-300 ${catalogOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : item.isRoute ? (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors ${
                      catalogOpen ? 'text-white/80 hover:text-white' : 'text-foreground/80 hover:text-foreground'
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
            <Button variant="ghost" size="sm" className={catalogOpen ? 'text-white hover:text-white hover:bg-white/10' : ''}>
              <Icon name="Search" fallback="CircleHelp" size={18} />
            </Button>
            <Button 
              variant={catalogOpen ? "ghost" : "outline"} 
              size="sm"
              className={catalogOpen ? 'text-white border-white/20 hover:bg-white/10' : ''}
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
              <Button variant="outline" size="sm">
                <Icon name="Phone" size={16} className="mr-2" />
                Позвонить
              </Button>
              <Button size="sm">
                Оставить заявку
              </Button>
            </div>
          </div>
        )}
      </div>

      <div
        className={`hidden lg:block absolute left-0 right-0 top-full bg-primary shadow-2xl transition-all duration-300 overflow-hidden ${
          catalogOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-4 gap-8">
            {catalogCategories.map((category, index) => (
              <div key={index} className="animate-in fade-in slide-in-from-top-4 duration-300" style={{ animationDelay: `${index * 50}ms` }}>
                <h3 className="font-bold text-sm mb-4 text-white/60 uppercase tracking-wide">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#catalog"
                        className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
                      >
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <Icon name={item.icon} size={16} className="text-white/80 group-hover:text-white transition-colors" />
                        </div>
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
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
    </>
  );
};

export default Header;