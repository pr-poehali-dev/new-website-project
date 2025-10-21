import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ProductModal from '@/components/ProductModal';

const eventsData = {
  'korporativnye': {
    title: 'Корпоративные мероприятия',
    description: 'Награды для корпоративных событий и торжеств',
    icon: 'Building2',
  },
  'sportivnye': {
    title: 'Спортивные мероприятия',
    description: 'Кубки и награды для спортивных соревнований',
    icon: 'Trophy',
  },
  'gosudarstvennye': {
    title: 'Государственные мероприятия',
    description: 'Официальные награды для государственных церемоний',
    icon: 'Building',
  },
  'kulturnye': {
    title: 'Культурные мероприятия',
    description: 'Награды для культурных событий и фестивалей',
    icon: 'Music',
  },
  'otkrytie-obekta': {
    title: 'Открытие объекта',
    description: 'Памятные награды для торжественных открытий',
    icon: 'Key',
  },
  'zavershenie-proekta': {
    title: 'Завершение проекта',
    description: 'Награды за успешное завершение проектов',
    icon: 'CheckCircle',
  },
  'yubiley': {
    title: 'Юбилей',
    description: 'Юбилейные награды и подарки',
    icon: 'Calendar',
  },
};

const Events = () => {
  const { event } = useParams();
  const navigate = useNavigate();
  const eventItem = event ? eventsData[event as keyof typeof eventsData] : null;

  const [sortBy, setSortBy] = useState('default');
  const [eventItems, setEventItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (item: any) => {
    setSelectedProduct(item);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const loadEventItems = async () => {
      if (!event) {
        setLoading(false);
        return;
      }

      try {
        const url = `https://functions.poehali.dev/1df99542-a754-4d23-8930-05b014c081d6?event=${event}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.success) {
          setEventItems(data.items);
        }
      } catch (error) {
        console.error('Failed to load event items:', error);
      } finally {
        setLoading(false);
      }
    };

    loadEventItems();
  }, [event]);

  if (!eventItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Мероприятие не найдено</h1>
            <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const sortedItems = [...eventItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return (a.price || 0) - (b.price || 0);
      case 'price-desc':
        return (b.price || 0) - (a.price || 0);
      case 'name':
        return (a.name || '').localeCompare(b.name || '');
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Icon name={eventItem.icon} size={24} className="text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">{eventItem.title}</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {eventItem.description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="text-sm text-muted-foreground">
              {loading ? 'Загрузка...' : `Найдено товаров: ${eventItems.length}`}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Сортировка:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-background text-sm"
              >
                <option value="default">По умолчанию</option>
                <option value="price-asc">Цена: по возрастанию</option>
                <option value="price-desc">Цена: по убыванию</option>
                <option value="name">По названию</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-square bg-muted animate-pulse" />
                  <CardContent className="p-6">
                    <div className="h-6 bg-muted rounded animate-pulse mb-2" />
                    <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : eventItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Package" size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
              <p className="text-muted-foreground mb-6">
                В данной категории пока нет товаров. Попробуйте выбрать другую категорию.
              </p>
              <Button onClick={() => navigate('/catalog')}>
                Перейти в каталог
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="group overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleProductClick(item)}
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon name="Image" size={48} className="text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                    {item.price && (
                      <p className="text-xl font-bold text-primary">
                        {item.price.toLocaleString('ru-RU')} ₽
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Events;
