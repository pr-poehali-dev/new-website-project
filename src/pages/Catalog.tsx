import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ProductModal from '@/components/ProductModal';

const catalogData = {
  'kamennaya-istoriya': {
    title: 'Каменная история',
    description: 'Элегантные награды из натурального камня для особых случаев',
    icon: 'Mountain',
  },
  'steklyannye-nagrady': {
    title: 'Стеклянные награды',
    description: 'Изысканные награды из хрусталя и стекла',
    icon: 'GlassWater',
  },
  'akrilovye-izdeliya': {
    title: 'Акриловые изделия',
    description: 'Современные награды из акрила',
    icon: 'Box',
  },
  'predmety-v-smole': {
    title: 'Предметы в смоле',
    description: 'Уникальные изделия с инкапсуляцией в эпоксидной смоле',
    icon: 'Droplet',
  },
  'izdeliya-iz-drevesiny': {
    title: 'Изделия из древесины',
    description: 'Награды и сувениры из натурального дерева',
    icon: 'Trees',
  },
  'izdeliya-iz-metalla': {
    title: 'Изделия из металла',
    description: 'Престижные металлические награды',
    icon: 'Medal',
  },
  'diplomy-i-plaketki': {
    title: 'Дипломы и плакетки',
    description: 'Официальные награды и благодарности',
    icon: 'Award',
  },
  'izdeliya-s-3d-obektami': {
    title: 'Изделия с 3Д объектами',
    description: 'Награды с объёмными элементами',
    icon: 'Box',
  },
};

const Catalog = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const catalogItem = category ? catalogData[category as keyof typeof catalogData] : null;

  const [sortBy, setSortBy] = useState('default');
  const [catalogItems, setCatalogItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (item: any) => {
    setSelectedProduct(item);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const loadCatalogItems = async () => {
      if (!category) {
        setLoading(false);
        return;
      }

      try {
        const url = `https://functions.poehali.dev/1df99542-a754-4d23-8930-05b014c081d6?category=${category}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.success) {
          setCatalogItems(data.items);
        }
      } catch (error) {
        console.error('Failed to load catalog items:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCatalogItems();
  }, [category]);

  if (!catalogItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Категория не найдена</h1>
            <Button asChild>
              <a href="/">На главную</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Icon name={catalogItem.icon} size={40} className="text-primary" />
              </div>
              <h1 className="text-5xl font-bold mb-4">{catalogItem.title}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {catalogItem.description}
              </p>
            </div>

            <div className="flex justify-end mb-8">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Сортировка:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-foreground border-0 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                >
                  <option value="default">По умолчанию</option>
                  <option value="price-asc">Цена: по возрастанию</option>
                  <option value="price-desc">Цена: по убыванию</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Icon name="Loader2" size={48} className="animate-spin text-primary" />
              </div>
            ) : catalogItems.length === 0 ? (
              <div className="text-center py-12">
                <Icon name="Package" size={64} className="mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
                <p className="text-muted-foreground">В этой категории пока нет товаров</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12">
                {catalogItems.sort((a, b) => {
                  if (sortBy === 'price-asc') return a.price - b.price;
                  if (sortBy === 'price-desc') return b.price - a.price;
                  return 0;
                }).map((item) => (
                  <Card 
                    key={item.id} 
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={() => handleProductClick(item)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4">
                        <Button size="icon" variant="secondary" className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <Icon name="Heart" size={20} />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                      <div className="text-2xl font-bold text-primary mb-4">{item.price.toLocaleString('ru-RU')} ₽</div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/constructor');
                          }}
                        >
                          <Icon name="Sparkles" size={18} className="mr-2" />
                          AI Макет
                        </Button>
                        <Button 
                          className="flex-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Icon name="Eye" size={18} className="mr-2" />
                          Подробнее
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <div className="text-center bg-primary/5 rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Наши специалисты помогут подобрать идеальную награду для вашего мероприятия
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="MessageSquare" size={20} className="mr-2" />
                  Написать
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ProductModal 
        product={selectedProduct}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Catalog;