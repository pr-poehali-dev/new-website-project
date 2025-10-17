import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    company: [
      { name: 'О компании', href: '#about' },
      { name: 'Производство', href: '#production' },
      { name: 'Награды и достижения', href: '#' },
      { name: 'Отзывы', href: '#reviews' },
    ],
    catalog: [
      { name: 'Награды', href: '#catalog' },
      { name: 'Корпоративные подарки', href: '#catalog' },
      { name: 'Авторские изделия', href: '#catalog' },
      { name: 'Корпоративный декор', href: '#catalog' },
    ],
    info: [
      { name: 'Блог', href: '#blog' },
      { name: 'Доставка', href: '#' },
      { name: 'Оплата', href: '#' },
      { name: 'Контакты', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <Icon name="Award" className="text-primary-foreground" size={24} />
              </div>
              <span className="text-xl font-bold">Арт Стеклов</span>
            </Link>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Производство эксклюзивных наград и подарков из хрусталя и стекла для первых лиц с 2003 года
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Icon name="Send" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Компания</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Каталог</h3>
            <ul className="space-y-3">
              {navigation.catalog.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Информация</h3>
            <ul className="space-y-3">
              {navigation.info.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Арт Стеклов. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Договор оферты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
