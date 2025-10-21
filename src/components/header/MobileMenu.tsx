import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { navigation } from './HeaderData';

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  user: any;
  setShowAuthModal: (show: boolean) => void;
  setShowCallModal: (show: boolean) => void;
  setCallModalSource: (source: 'menu' | 'default') => void;
}

const MobileMenu = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  user, 
  setShowAuthModal, 
  setShowCallModal,
  setCallModalSource 
}: MobileMenuProps) => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  const handleCallClick = () => {
    setShowCallModal(true);
    setCallModalSource('menu');
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 bg-[#0a0a0a] z-50 transform transition-transform duration-300 ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
              <Icon name="Award" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">НАГРАДЫ</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-white/60 hover:text-white"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        <nav className="space-y-4 mb-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-lg text-white/80 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="space-y-4 pt-6 border-t border-white/10">
          <Button
            onClick={handleCallClick}
            variant="outline"
            className="w-full justify-start"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Заказать звонок
          </Button>

          {user ? (
            <div className="space-y-4">
              <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="LayoutDashboard" size={20} className="mr-2" />
                  Личный кабинет
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full justify-start"
              >
                <Icon name="LogOut" size={20} className="mr-2" />
                Выйти
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => {
                setShowAuthModal(true);
                setMobileMenuOpen(false);
              }}
              className="w-full"
            >
              <Icon name="User" size={20} className="mr-2" />
              Войти
            </Button>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="space-y-3 text-sm text-white/60">
            <a href="tel:+74951234567" className="flex items-center gap-2 hover:text-white">
              <Icon name="Phone" size={16} />
              +7 (495) 123-45-67
            </a>
            <a href="mailto:info@awards.ru" className="flex items-center gap-2 hover:text-white">
              <Icon name="Mail" size={16} />
              info@awards.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
