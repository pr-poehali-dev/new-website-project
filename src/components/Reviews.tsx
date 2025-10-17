import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Reviews = () => {
  const reviews = [
    {
      name: 'Аркадий Медведев',
      position: 'Генеральный директор',
      company: 'ООО "Технопром"',
      rating: 5,
      text: 'Заказывали корпоративные награды для ежегодной церемонии. Результат превзошёл все ожидания! Качество изделий на высшем уровне, индивидуальный подход к каждому проекту. Рекомендуем всем партнёрам.',
      date: '15 сентября 2024',
    },
    {
      name: 'Елена Соколова',
      position: 'Руководитель отдела закупок',
      company: 'Государственная корпорация',
      rating: 5,
      text: 'Работаем с компанией уже 5 лет. Всегда безупречное качество, соблюдение всех сроков и требований. Особенно ценим возможность реализации самых сложных дизайнерских решений.',
      date: '3 октября 2024',
    },
    {
      name: 'Виктор Блинов',
      position: 'Президент спортивной федерации',
      company: 'Федерация бокса России',
      rating: 5,
      text: 'Эксклюзивные кубки для чемпионата получились невероятными! Участники были в восторге. Профессиональный подход, креативные решения и высокое качество исполнения.',
      date: '22 августа 2024',
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-6">
            <Icon name="MessageSquare" size={18} />
            <span className="text-sm font-medium">Отзывы клиентов</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Что говорят о нас
          </h2>
          <p className="text-lg text-muted-foreground">
            Наши клиенты — ведущие компании и государственные организации России
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-2 hover:border-primary/20 hover:shadow-xl transition-all">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                      "{review.text}"
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-sm">{review.name}</div>
                        <div className="text-xs text-muted-foreground">{review.position}</div>
                        <div className="text-xs text-muted-foreground">{review.company}</div>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground mt-3">
                      {review.date}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Средняя оценка</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">250+</div>
            <div className="text-sm text-muted-foreground">Положительных отзывов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
