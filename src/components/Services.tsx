import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'individualnaya-razrabotka',
      icon: 'Sparkles',
      title: 'Индивидуальная разработка',
      description: 'Создаём уникальные подарки, которые отражают ценности вашей компании',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'
    },
    {
      id: 'nagrady-dlya-ceremoniy',
      icon: 'Award',
      title: 'Награды для церемоний',
      description: 'Престижные награды для важных мероприятий и торжественных событий',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg'
    },
    {
      id: 'korporativnye-nagrady',
      icon: 'Trophy',
      title: 'Корпоративные награды',
      description: 'Награды для признания достижений сотрудников и партнёров',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'
    },
    {
      id: 'korporativnye-suveniry',
      icon: 'Gift',
      title: 'Корпоративные сувениры',
      description: 'Премиальные сувениры для партнёров, клиентов и сотрудников',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg'
    },
    {
      id: 'avtorskie-izdeliya',
      icon: 'Palette',
      title: 'Авторские изделия',
      description: 'Уникальные произведения искусства из стекла по индивидуальному проекту',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg'
    },
    {
      id: 'korporativnyy-dekor',
      icon: 'Building2',
      title: 'Корпоративный декор',
      description: 'Оформление офисов премиальными арт-объектами и декоративными изделиями',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg'
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Layers" size={18} className="text-primary" />
            <span className="text-sm font-medium text-primary">Услуги</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Полный спектр решений
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            От классических наград до эксклюзивных авторских изделий
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                  onClick={() => navigate(`/service/${service.id}`)}
                >
                  Подробнее
                  <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
