import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface CatalogItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
}

const Portfolio = () => {
  const [products, setProducts] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { value: 'all', label: 'Все', icon: 'Layers' },
    { value: 'kamennaya-istoriya', label: 'Камень', icon: 'Mountain' },
    { value: 'steklyannye-nagrady', label: 'Стекло', icon: 'GlassWater' },
    { value: 'akrilovye-izdeliya', label: 'Акрил', icon: 'Box' },
    { value: 'izdeliya-iz-metalla', label: 'Металл', icon: 'Medal' },
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
    return selectedCategory === 'all' || product.category === selectedCategory;
  });

  useEffect(() => {
    if (filteredProducts.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProducts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [filteredProducts.length]);

  const getVisibleProducts = () => {
    if (filteredProducts.length === 0) return [];
    
    const items = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + filteredProducts.length) % filteredProducts.length;
      items.push({ product: filteredProducts[index], offset: i });
    }
    return items;
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <Icon name="Loader2" size={48} className="animate-spin text-primary mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Image" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Портфолио</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Наши работы
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
            Более 500 реализованных проектов премиальных наград
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                }`}
              >
                <Icon name={cat.icon} size={16} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <Icon name="Package" size={64} className="mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-lg text-muted-foreground">Нет товаров в этой категории</p>
          </div>
        ) : (
          <>
            <div className="relative h-[450px] md:h-[550px] mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                {getVisibleProducts().map(({ product, offset }) => {
                  const isCenter = offset === 0;
                  const scale = isCenter ? 1 : offset === -1 || offset === 1 ? 0.85 : 0.7;
                  const opacity = isCenter ? 1 : offset === -1 || offset === 1 ? 0.6 : 0.3;
                  const translateX = offset * 320;
                  const zIndex = 10 - Math.abs(offset);
                  const rotateY = offset * 15;

                  return (
                    <div
                      key={`${product.id}-${offset}`}
                      className="absolute transition-all duration-700 ease-out cursor-pointer"
                      style={{
                        transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                        opacity,
                        zIndex,
                      }}
                      onClick={() => setCurrentIndex((currentIndex + offset + filteredProducts.length) % filteredProducts.length)}
                    >
                      <div className="w-[280px] md:w-[320px] rounded-2xl overflow-hidden shadow-2xl bg-white">
                        <div className="relative h-[320px] md:h-[380px] overflow-hidden">
                          <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          
                          {isCenter && (
                            <div className="absolute top-4 right-4">
                              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                                {product.price.toLocaleString('ru-RU')} ₽
                              </div>
                            </div>
                          )}
                        </div>

                        <div className={`p-5 transition-all duration-500 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                          <h3 className="text-lg font-bold mb-2 leading-tight line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center gap-2 mb-12">
              {filteredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-primary'
                      : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                  aria-label={`Перейти к проекту ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Проектов</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Лет опыта</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">300+</div>
            <div className="text-sm text-muted-foreground">Клиентов</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Качество</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
