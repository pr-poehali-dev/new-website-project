import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const articles = [
    {
      title: 'Как выбрать идеальную награду для корпоративного мероприятия',
      excerpt: 'Разбираем ключевые критерии выбора наград: материалы, дизайн, персонализация и бюджет. Практические советы от экспертов.',
      category: 'Советы',
      date: '12 октября 2024',
      readTime: '5 мин',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
    },
    {
      title: 'Тренды в корпоративных подарках 2024',
      excerpt: 'Обзор актуальных направлений в индустрии премиальных подарков: экологичность, персонализация и технологические инновации.',
      category: 'Тренды',
      date: '8 октября 2024',
      readTime: '7 мин',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg',
    },
    {
      title: 'Хрусталь vs Стекло: в чём разница и что выбрать',
      excerpt: 'Подробное сравнение материалов для наград. Технические характеристики, внешний вид и рекомендации по применению.',
      category: 'Материалы',
      date: '5 октября 2024',
      readTime: '6 мин',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/11854546-1d75-4f54-ad2d-a50dddc6a503.jpg',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6">
            <Icon name="BookOpen" size={18} />
            <span className="text-sm font-medium">Блог и статьи</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Полезные материалы
          </h2>
          <p className="text-lg text-muted-foreground">
            Экспертные статьи о наградах, подарках и корпоративной культуре
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-foreground hover:bg-white">
                    {article.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <Button variant="ghost" className="group-hover:text-primary p-0">
                  Читать далее
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            <Icon name="Grid3x3" size={20} className="mr-2" />
            Все статьи блога
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
