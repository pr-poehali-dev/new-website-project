import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Categories = () => {
  const categories = [
    {
      title: 'Корпоративные награды',
      description: 'Премиум награды для сотрудников и партнёров',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1d84d336-2620-4e6b-af4a-8c3d3e2a0d3c.jpg',
      icon: 'Award'
    },
    {
      title: 'Подарки для первых лиц',
      description: 'Эксклюзивные подарки топ-менеджерам',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/b306177a-ee6c-432b-934c-d8a68394a600.jpg',
      icon: 'Crown'
    },
    {
      title: 'Премиальные арт-объекты и декор',
      description: 'Уникальные предметы искусства для интерьера',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1f588e1e-bfa6-47ca-8035-df519c1b35ba.jpg',
      icon: 'Sparkles'
    },
    {
      title: 'Сувениры',
      description: 'Брендированная продукция и бизнес-сувениры',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=600&fit=crop',
      icon: 'Gift'
    }
  ];

  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 pb-6 md:pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <Card 
              key={idx} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 hover:border-primary/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {category.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;