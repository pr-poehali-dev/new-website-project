import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';
import CallModal from './CallModal';
import MegaMenuCatalog from './header/MegaMenuCatalog';
import MegaMenuAbout from './header/MegaMenuAbout';
import MobileMenu from './header/MobileMenu';
import { navigation } from './header/HeaderData';

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

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleNavItemHover = (megaType: string) => {
    if (megaType === 'catalog') {
      setCatalogOpen(true);
      setAboutOpen(false);
      setHoveredCategory('catalog');
    } else if (megaType === 'about') {
      setAboutOpen(true);
      setCatalogOpen(false);
      setHoveredCategory('about');
    }
  };

  const handleNavItemLeave = () => {
  };

  const handleCallClick = () => {
    setShowCallModal(true);
    setCallModalSource('default');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">НАГРАДЫ</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasMega && handleNavItemHover(item.megaType!)}
                  onMouseLeave={handleNavItemLeave}
                >
                  <a
                    href={item.href}
                    className={`text-white/80 hover:text-white transition-colors ${
                      (item.megaType === 'catalog' && catalogOpen) ||
                      (item.megaType === 'about' && aboutOpen)
                        ? 'text-white'
                        : ''
                    }`}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Button
                onClick={handleCallClick}
                variant="ghost"
                size="sm"
                className="text-white/80 hover:text-white"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>

              {user ? (
                <div className="flex items-center gap-2">
                  <Link to="/dashboard">
                    <Button variant="outline" size="sm">
                      <Icon name="LayoutDashboard" size={20} className="mr-2" />
                      Личный кабинет
                    </Button>
                  </Link>
                  <Button onClick={handleLogout} variant="ghost" size="sm">
                    <Icon name="LogOut" size={20} />
                  </Button>
                </div>
              ) : (
                <Button onClick={() => setShowAuthModal(true)} size="sm">
                  <Icon name="User" size={20} className="mr-2" />
                  Войти
                </Button>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white/60 hover:text-white"
            >
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>

        {catalogOpen && (
          <MegaMenuCatalog
            hoveredCategory={hoveredCategory}
            setHoveredCategory={setHoveredCategory}
          />
        )}

        {aboutOpen && (
          <MegaMenuAbout
            hoveredCategory={hoveredCategory}
            setHoveredCategory={setHoveredCategory}
            setShowCallModal={setShowCallModal}
            setCallModalSource={setCallModalSource}
          />
        )}
      </header>

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        user={user}
        setShowAuthModal={setShowAuthModal}
        setShowCallModal={setShowCallModal}
        setCallModalSource={setCallModalSource}
      />

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      <CallModal 
        isOpen={showCallModal} 
        onClose={() => setShowCallModal(false)} 
        source={callModalSource}
      />
    </>
  );
};

export default Header;
