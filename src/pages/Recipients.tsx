import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ProductModal from '@/components/ProductModal';

const recipientsData = {
  'rukovoditelyu': {
    title: 'Награды руководителю',
    description: 'Престижные награды и подарки для руководителей компаний',
    icon: 'UserCog',
  },
  'osnovatelyu': {
    title: 'Награды основателю',
    description: 'Эксклюзивные награды для основателей и учредителей',
    icon: 'Lightbulb',
  },
  'aktsioneru': {
    title: 'Награды акционеру',
    description: 'Памятные подарки для акционеров компании',
    icon: 'TrendingUp',
  },
  'investoru': {
    title: 'Награды инвестору',
    description: 'Благодарственные награды для инвесторов',
    icon: 'Coins',
  },
  'partneram': {
    title: 'Награды партнерам',
    description: 'Награды для деловых партнеров и контрагентов',
    icon: 'Handshake',
  },
  'sotrudnikam': {
    title: 'Награды сотрудникам',
    description: 'Награды и подарки для сотрудников компании',
    icon: 'Users',
  },
};

const Recipients = () => {
  const { recipient } = useParams();
  const navigate = useNavigate();
  const recipientItem = recipient ? recipientsData[recipient as keyof typeof recipientsData] : null;

  const [sortBy, setSortBy] = useState('default');
  const [recipientItems, setRecipientItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (item: any) => {
    setSelectedProduct(item);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const loadRecipientItems = async () => {
      if (!recipient) {
        setLoading(false);
        return;
      }

      try {
        const url = `https://functions.poehali.dev/1df99542-a754-4d23-8930-05b014c081d6?recipient=${recipient}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.success) {
          setRecipientItems(data.items);
        }
      } catch (error) {
        console.error('Failed to load recipient items:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRecipientItems();
  }, [recipient]);

  if (!recipientItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Категория не найдена</h1>
            <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const sortedItems = [...recipientItems].sort((a, b) => {
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
                <Icon name={recipientItem.icon} size={24} className="text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">{recipientItem.title}</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {recipientItem.description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="text-sm text-muted-foreground">
              {loading ? 'Загрузка...' : `Найдено товаров: ${recipientItems.length}`}
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
          ) : recipientItems.length === 0 ? (
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

export default Recipients;
