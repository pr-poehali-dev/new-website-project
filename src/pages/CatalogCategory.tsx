import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ProductModal from '@/components/ProductModal';

const categoryData: Record<string, any> = {
  'steklo': {
    title: 'Стекло',
    description: 'Изысканные награды из хрусталя и стекла высочайшего качества',
    icon: 'GlassWater',
    material: 'glass',
  },
  'metall': {
    title: 'Металл',
    description: 'Престижные металлические награды с индивидуальным дизайном',
    icon: 'Medal',
    material: 'metal',
  },
  'derevo': {
    title: 'Дерево',
    description: 'Награды и сувениры из натурального дерева премиум-класса',
    icon: 'Trees',
    material: 'wood',
  },
  'kamen': {
    title: 'Камень',
    description: 'Элегантные награды из натурального камня для особых случаев',
    icon: 'Mountain',
    material: 'stone',
  },
  'smola': {
    title: 'Смола',
    description: 'Уникальные изделия с инкапсуляцией в эпоксидной смоле',
    icon: 'Droplet',
    material: 'resin',
  },
  'akril': {
    title: 'Акрил',
    description: 'Современные награды из акрила с безграничными возможностями',
    icon: 'Box',
    material: 'acrylic',
  },
  '3d-pechat': {
    title: '3Д Печать',
    description: 'Инновационные награды созданные с помощью 3D технологий',
    icon: 'Box',
    material: '3d',
  },
  'kubki-s-chashami': {
    title: 'Кубки с чашами',
    description: 'Классические кубки для спортивных и корпоративных мероприятий',
    icon: 'Trophy',
    subcategories: [
      { name: 'Переходящие кубки', slug: 'perekhodyashchie-kubki' },
      { name: 'Киберспорт', slug: 'kibersport' },
    ]
  },
  'perekhodyashchie-kubki': {
    title: 'Переходящие кубки',
    description: 'Переходящие кубки для соревнований и корпоративных турниров',
    icon: 'Trophy',
    subcategories: [
      { name: 'Корпоративные переходящие кубки', slug: 'korporativnye-perekhodyashchie-kubki' },
      { name: 'Спортивные переходящие кубки', slug: 'sportivnye-perekhodyashchie-kubki' },
    ]
  },
  'korporativnye-perekhodyashchie-kubki': {
    title: 'Корпоративные переходящие кубки',
    description: 'Престижные переходящие кубки для корпоративных соревнований',
    icon: 'Trophy',
  },
  'sportivnye-perekhodyashchie-kubki': {
    title: 'Спортивные переходящие кубки',
    description: 'Спортивные переходящие кубки для чемпионатов и турниров',
    icon: 'Trophy',
  },
  'kibersport': {
    title: 'Киберспорт',
    description: 'Современные награды для киберспортивных турниров',
    icon: 'Gamepad2',
  },
  'plaketki-i-diplomy': {
    title: 'Плакетки и дипломы',
    description: 'Официальные награды и благодарности для церемоний',
    icon: 'Award',
  },
  'podarochnoe-panno': {
    title: 'Подарочное панно',
    description: 'Эксклюзивные панно для протокольных подарков',
    icon: 'Frame',
  },
  'dlya-pervykh-lits': {
    title: 'Для первых лиц',
    description: 'Эксклюзивные подарки для руководителей и VIP-персон',
    icon: 'Crown',
  },
  'podarochnye-nabory': {
    title: 'Подарочные наборы',
    description: 'Премиальные подарочные наборы в фирменной упаковке',
    icon: 'Gift',
  },
  'protokolnye-podarki': {
    title: 'Протокольные подарки',
    description: 'Официальные подарки для государственных и деловых мероприятий',
    icon: 'Briefcase',
  },
  'korporativnye-podarki': {
    title: 'Корпоративные подарки',
    description: 'Подарки для сотрудников и партнеров с корпоративной символикой',
    icon: 'Building2',
  },
  'korporativnye-suveniry': {
    title: 'Корпоративные сувениры',
    description: 'Брендированные сувениры для укрепления имиджа компании',
    icon: 'Star',
  },
  'suveniry-k-professionalnym-prazdnikam': {
    title: 'Сувениры к профессиональным праздникам',
    description: 'Тематические сувениры к профессиональным датам',
    icon: 'Calendar',
  },
  'nastolnye-suveniry': {
    title: 'Настольные сувениры',
    description: 'Элегантные настольные сувениры для офиса',
    icon: 'Sparkles',
  },
  'korporativnyy-dekor': {
    title: 'Корпоративный декор',
    description: 'Оформление офисов и корпоративных пространств',
    icon: 'Palette',
  },
  'avtorskie-art-obekty': {
    title: 'Авторские арт-объекты',
    description: 'Уникальные художественные объекты от известных мастеров',
    icon: 'Sparkles',
  },
  'panno': {
    title: 'Панно',
    description: 'Декоративные панно для интерьера',
    icon: 'Frame',
  },
};

const CatalogCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const categoryInfo = category ? categoryData[category] : null;

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

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Категория не найдена</h1>
            <Button onClick={() => navigate('/catalog')}>Вернуться в каталог</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (categoryInfo.subcategories) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <Link to="/catalog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
                <Icon name="ArrowLeft" size={16} />
                Вернуться в каталог
              </Link>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Icon name={categoryInfo.icon} size={32} className="text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">{categoryInfo.title}</h1>
                  <p className="text-muted-foreground mt-2">{categoryInfo.description}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryInfo.subcategories.map((subcat: any) => (
                <Link key={subcat.slug} to={`/catalog/${subcat.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="ChevronRight" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{subcat.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Перейти к категории
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
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
          <div className="mb-8">
            <Link to="/catalog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
              <Icon name="ArrowLeft" size={16} />
              Вернуться в каталог
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Icon name={categoryInfo.icon} size={32} className="text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">{categoryInfo.title}</h1>
                <p className="text-muted-foreground mt-2">{categoryInfo.description}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-muted-foreground">
              {loading ? 'Загрузка...' : `Найдено товаров: ${catalogItems.length}`}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-background"
            >
              <option value="default">По умолчанию</option>
              <option value="price-asc">Цена: по возрастанию</option>
              <option value="price-desc">Цена: по убыванию</option>
              <option value="name">По названию</option>
            </select>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-square bg-muted animate-pulse" />
                  <CardContent className="p-4">
                    <div className="h-4 bg-muted rounded animate-pulse mb-2" />
                    <div className="h-3 bg-muted rounded animate-pulse w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : catalogItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {catalogItems.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  onClick={() => handleProductClick(item)}
                >
                  <div className="aspect-square bg-muted overflow-hidden">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {item.price && (
                      <p className="text-lg font-bold mt-2 text-primary">
                        от {item.price.toLocaleString()} ₽
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Package" size={48} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Товары скоро появятся</h3>
              <p className="text-muted-foreground mb-6">
                Мы работаем над наполнением этого раздела
              </p>
              <Button onClick={() => navigate('/catalog')}>
                Посмотреть другие категории
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default CatalogCategory;
