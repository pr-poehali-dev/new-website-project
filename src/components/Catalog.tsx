import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import ProductModal from '@/components/ProductModal';

interface CatalogItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  created_at: string;
}

const Catalog = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [selectedProduct, setSelectedProduct] = useState<CatalogItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: CatalogItem) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'kamennaya-istoriya', label: 'Каменная история' },
    { value: 'steklyannye-nagrady', label: 'Стеклянные награды' },
    { value: 'akrilovye-izdeliya', label: 'Акриловые изделия' },
    { value: 'predmety-v-smole', label: 'Предметы в смоле' },
    { value: 'izdeliya-iz-drevesiny', label: 'Изделия из древесины' },
    { value: 'izdeliya-iz-metalla', label: 'Изделия из металла' },
    { value: 'diplomy-i-plaketki', label: 'Дипломы и плакетки' },
    { value: 'izdeliya-s-3d-obektami', label: 'Изделия с 3D объектами' },
  ];

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/1df99542-a754-4d23-8930-05b014c081d6');
        const data = await response.json();
        
        if (data.success) {
          setProducts(data.items);
        }
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    return categoryMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <section id="catalog" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-4 md:mb-6">
            <Icon name="Grid3x3" size={18} />
            <span className="text-sm font-medium">Портфолио</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Каталог наших работ
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Используйте фильтры для поиска идеального решения
          </p>
        </div>

        <div className="mb-8 md:mb-12">
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-foreground text-background shadow-lg scale-105'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end mb-6">
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
        ) : sortedProducts.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="Package" size={64} className="mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
            <p className="text-muted-foreground">
              {selectedCategory === 'all' 
                ? 'В базе данных пока нет товаров' 
                : 'В этой категории пока нет товаров'}
            </p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image_url}
                      alt={product.name}
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
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                    <div className="text-2xl font-bold text-primary mb-4">{product.price.toLocaleString('ru-RU')} ₽</div>
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

            <div className="text-center mt-12">
              <p className="text-muted-foreground">
                Показано товаров: {sortedProducts.length}
              </p>
            </div>
          </>
        )}
      </div>
      <ProductModal 
        product={selectedProduct}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Catalog;