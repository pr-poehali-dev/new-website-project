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
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'
    },
    {
      icon: 'Gift',
      title: 'Корпоративные подарки',
      description: 'Премиальные подарки для партнеров и сотрудников компании',
      categories: ['VIP подарки', 'Сувениры', 'Наборы', 'Аксессуары'],
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg'
    },
    {
      icon: 'Sparkles',
      title: 'Авторские изделия',
      description: 'Уникальные произведения искусства из стекла',
      categories: ['Скульптуры', 'Панно', 'Декор', 'Инсталляции'],
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'
    },
    {
      icon: 'Building',
      title: 'Корпоративный декор',
      description: 'Оформление офисов и общественных пространств',
      categories: ['Вывески', 'Таблички', 'Стелы', 'Логотипы'],
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg'
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
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
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
            <Card key={index} className="flex-shrink-0 w-[280px] snap-center overflow-hidden flex flex-col">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon name={service.icon} size={20} className="text-primary" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
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
