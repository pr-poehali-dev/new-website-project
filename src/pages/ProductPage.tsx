import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
}

const ProductPage = () => {
  const { category, productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const loadProduct = async () => {
      if (!category || !productId) {
        setLoading(false);
        return;
      }

      try {
        const url = `https://functions.poehali.dev/1df99542-a754-4d23-8930-05b014c081d6?category=${category}`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.success) {
          const foundProduct = data.items.find((item: Product) => item.id === parseInt(productId));
          setProduct(foundProduct || null);
        }
      } catch (error) {
        console.error('Failed to load product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [category, productId]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Icon name="Loader2" size={64} className="animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Icon name="Package" size={64} className="mx-auto text-muted-foreground/50 mb-4" />
            <h1 className="text-4xl font-bold mb-4">Товар не найден</h1>
            <Button onClick={() => navigate(`/catalog/${category}`)}>
              Вернуться в каталог
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const images = [product.image_url];

  const advantages = [
    {
      icon: 'Award',
      title: 'Премиум качество',
      description: 'Изготовлено из высококачественных материалов с вниманием к деталям'
    },
    {
      icon: 'Sparkles',
      title: 'Уникальный дизайн',
      description: 'Каждое изделие создается индивидуально и неповторимо'
    },
    {
      icon: 'Shield',
      title: 'Долговечность',
      description: 'Изделие сохранит первозданный вид на долгие годы'
    },
    {
      icon: 'Palette',
      title: 'Персонализация',
      description: 'Возможность нанесения логотипа и индивидуальной гравировки'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Button 
              variant="ghost" 
              className="mb-8"
              onClick={() => navigate(`/catalog/${category}`)}
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад к каталогу
            </Button>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="sticky top-24">
                  <div className="aspect-square rounded-3xl overflow-hidden bg-muted mb-4">
                    <img
                      src={images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {images.length > 1 && (
                    <div className="flex gap-4">
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(idx)}
                          className={`aspect-square w-20 rounded-xl overflow-hidden border-2 transition-all ${
                            selectedImage === idx 
                              ? 'border-primary scale-105' 
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Badge className="mb-4">В наличии</Badge>
                <h1 className="text-5xl font-bold mb-6">{product.name}</h1>
                <div className="text-4xl font-bold text-primary mb-8">
                  {product.price.toLocaleString('ru-RU')} ₽
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex gap-4 mb-12">
                  <Button size="lg" className="flex-1">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Заказать
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1" onClick={() => navigate('/constructor')}>
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    AI Макет
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="Heart" size={20} />
                  </Button>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <Icon name="Info" size={20} className="mr-2" />
                      Информация о товаре
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Артикул:</span>
                        <span className="font-medium">#{product.id.toString().padStart(6, '0')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Категория:</span>
                        <span className="font-medium">Предметы в смоле</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Срок изготовления:</span>
                        <span className="font-medium">10-14 дней</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Гарантия:</span>
                        <span className="font-medium">1 год</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-center">Преимущества</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advantages.map((advantage, idx) => (
                  <Card key={idx} className="text-center hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Icon name={advantage.icon} size={32} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Свяжитесь с нами, и наши специалисты помогут подобрать идеальное решение для вашей задачи
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
                  <Button size="lg" variant="outline">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
