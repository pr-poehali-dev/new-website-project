import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: 'Award',
      title: 'Награды',
      description: 'Эксклюзивные награды для мероприятий, конкурсов и церемоний',
      categories: ['Кубки', 'Медали', 'Дипломы', 'Статуэтки'],
    },
    {
      icon: 'Gift',
      title: 'Корпоративные подарки',
      description: 'Премиальные подарки для партнеров и сотрудников компании',
      categories: ['VIP подарки', 'Сувениры', 'Наборы', 'Аксессуары'],
    },
    {
      icon: 'Sparkles',
      title: 'Авторские изделия',
      description: 'Уникальные произведения искусства из хрусталя и стекла',
      categories: ['Скульптуры', 'Панно', 'Декор', 'Инсталляции'],
    },
    {
      icon: 'Building',
      title: 'Корпоративный декор',
      description: 'Оформление офисов и общественных пространств',
      categories: ['Вывески', 'Таблички', 'Стелы', 'Логотипы'],
    },
  ];

  return (
    <section id="services" className="py-12 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center md:text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 md:mb-6">
            <Icon name="Layers" size={18} />
            <span className="text-sm font-medium">Наши услуги</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6">
            Полный спектр решений
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            От классических наград до эксклюзивных авторских изделий — создаём произведения искусства под любые задачи
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon name={service.icon} size={32} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-muted px-3 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {services.map((service, index) => (
            <Card key={index} className="flex-shrink-0 w-[280px] snap-center">
              <CardContent className="p-5">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={24} className="text-primary" />
                </div>
                
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.categories.slice(0, 3).map((category, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-muted px-2.5 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="w-full">
                  Подробнее
                  <Icon name="ArrowRight" size={14} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;