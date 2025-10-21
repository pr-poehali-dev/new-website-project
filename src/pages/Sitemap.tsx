import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Sitemap = () => {
  const sitemapSections = [
    {
      title: 'Каталог',
      links: [
        { 
          name: 'Корпоративные награды',
          items: [
            'Стекло',
            'Металл',
            'Дерево',
            'Камень',
            'Смола',
            'Акрил',
            '3Д Печать',
          ]
        },
        {
          name: 'Спортивные награды',
          items: [
            'Переходящие кубки',
            'Киберспорт',
          ]
        },
        {
          name: 'Переходящие кубки',
          items: [
            'Корпоративные переходящие кубки',
            'Спортивные переходящие кубки',
          ]
        },
        {
          name: 'Дипломы и грамоты',
          items: [
            'Плакетки и дипломы',
            'Подарочное панно',
          ]
        },
        {
          name: 'Подарки',
          items: [
            'Для первых лиц',
            'Подарочные наборы',
            'Протокольные подарки',
            'Корпоративные подарки',
          ]
        },
        {
          name: 'Сувениры',
          items: [
            'Корпоративные сувениры',
            'Сувениры к профессиональным праздникам',
            'Настольные сувениры',
          ]
        },
        {
          name: 'Декор',
          items: [
            'Корпоративный декор',
            'Авторские арт-объекты',
            'Панно',
          ]
        },
      ]
    },
    {
      title: 'Награды по материалам',
      links: [
        { name: 'Каменная история', href: '/catalog/kamennaya-istoriya' },
        { name: 'Стеклянные награды', href: '/catalog/steklyannye-nagrady' },
        { name: 'Акриловые изделия', href: '/catalog/akrilovye-izdeliya' },
        { name: 'Предметы в смоле', href: '/catalog/predmety-v-smole' },
        { name: 'Изделия из древесины', href: '/catalog/izdeliya-iz-drevesiny' },
        { name: 'Изделия из металла', href: '/catalog/izdeliya-iz-metalla' },
      ]
    },
    {
      title: 'О компании',
      links: [
        { name: 'О компании', href: '#about' },
        { name: 'Услуги', href: '#services' },
        { name: 'Производство', href: '#production' },
        { name: 'Блог', href: '#blog' },
        { name: 'Контакты', href: '#contact' },
      ]
    },
    {
      title: 'Информация',
      links: [
        { name: 'Награды и достижения', href: '#' },
        { name: 'Отзывы', href: '#reviews' },
        { name: 'Доставка', href: '#' },
        { name: 'Оплата', href: '#' },
        { name: 'Политика конфиденциальности', href: '#' },
        { name: 'Договор оферты', href: '#' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
              <Icon name="ArrowLeft" size={16} />
              Вернуться на главную
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Карта сайта</h1>
            <p className="text-lg text-muted-foreground">
              Полная структура сайта со всеми разделами и страницами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="FolderOpen" size={16} className="text-primary" />
                  </div>
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      {link.items ? (
                        <div>
                          <div className="font-medium text-foreground mb-2">
                            {link.name}
                          </div>
                          <ul className="space-y-2 ml-4">
                            {link.items.map((subItem, subIdx) => (
                              <li key={subIdx}>
                                <a
                                  href="#"
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                                >
                                  <Icon name="ChevronRight" size={14} />
                                  {subItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                        >
                          <Icon name="ChevronRight" size={14} />
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Info" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Не нашли нужный раздел?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Свяжитесь с нами, и мы поможем найти то, что вы ищете, или создадим индивидуальное решение специально для вас.
                </p>
                <Link 
                  to="/#contact" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Связаться с нами
                  <Icon name="ArrowRight" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
