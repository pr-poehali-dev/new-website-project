import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);

  const navigation = [
    { name: 'Каталог', href: '#catalog', hasMega: true },
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Award" className="text-primary-foreground" size={24} />
            </div>
            <span className="text-xl font-bold">Арт Стеклов</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasMega ? (
                  <button
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
                    onMouseEnter={() => setCatalogOpen(true)}
                    onMouseLeave={() => setCatalogOpen(false)}
                  >
                    {item.name}
                    <Icon name="ChevronDown" size={16} className={`transition-transform ${catalogOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Icon name="Search" size={18} />
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
            <Button size="sm">
              Оставить заявку
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
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

      {catalogOpen && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-border shadow-2xl"
          onMouseEnter={() => setCatalogOpen(true)}
          onMouseLeave={() => setCatalogOpen(false)}
        >
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-4 gap-8">
              {catalogCategories.map((category, index) => (
                <div key={index}>
                  <h3 className="font-bold text-sm mb-4 text-muted-foreground uppercase tracking-wide">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href="#catalog"
                          className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors group"
                        >
                          <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            <Icon name={item.icon} size={16} className="group-hover:text-primary transition-colors" />
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
      )}
    </header>
  );
};

export default Header;