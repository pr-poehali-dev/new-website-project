import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const categories = [
  {
    id: 'kamennaya-istoriya',
    title: 'Каменная история',
    description: 'Элегантные награды из натурального камня',
    icon: 'Mountain',
  },
  {
    id: 'steklyannye-nagrady',
    title: 'Стеклянные награды',
    description: 'Изысканные награды из хрусталя и стекла',
    icon: 'GlassWater',
  },
  {
    id: 'akrilovye-izdeliya',
    title: 'Акриловые изделия',
    description: 'Современные награды из акрила',
    icon: 'Box',
  },
  {
    id: 'predmety-v-smole',
    title: 'Предметы в смоле',
    description: 'Уникальные изделия с инкапсуляцией',
    icon: 'Droplet',
  },
  {
    id: 'izdeliya-iz-drevesiny',
    title: 'Изделия из древесины',
    description: 'Награды и сувениры из натурального дерева',
    icon: 'Trees',
  },
  {
    id: 'izdeliya-iz-metalla',
    title: 'Изделия из металла',
    description: 'Престижные металлические награды',
    icon: 'Medal',
  },
  {
    id: 'diplomy-i-plaketki',
    title: 'Дипломы и плакетки',
    description: 'Официальные награды и благодарности',
    icon: 'Award',
  },
  {
    id: 'izdeliya-s-3d-obektami',
    title: 'Изделия с 3Д объектами',
    description: 'Награды с объёмными элементами',
    icon: 'Box',
  },
];

const CatalogAll = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter(cat => {
    const matchesSearch = cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cat.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Каталог продукции</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Выберите категорию наград и подарков для вашего мероприятия
              </p>
            </div>

            <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Поиск по каталогу..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('all')}
                  className="rounded-full whitespace-nowrap"
                >
                  Все категории
                </Button>
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(cat.id)}
                    className="rounded-full whitespace-nowrap"
                  >
                    {cat.title}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredCategories.map((category) => (
                <Card 
                  key={category.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary"
                  onClick={() => navigate(`/catalog/${category.id}`)}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        <Icon name={category.icon} size={40} className="text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                      <p className="text-muted-foreground mb-6">{category.description}</p>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Смотреть каталог
                        <Icon name="ArrowRight" size={18} className="ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={64} className="mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
                <p className="text-muted-foreground">Попробуйте изменить поисковый запрос</p>
              </div>
            )}

            <div className="text-center bg-primary/5 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Не нашли подходящую категорию?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Свяжитесь с нами, и мы поможем создать уникальную награду по вашему запросу
              </p>
              <Button size="lg" className="rounded-full">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CatalogAll;
