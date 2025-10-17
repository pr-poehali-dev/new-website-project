import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useSearchParams, useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';

const AiConstructor = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [user, setUser] = useState<any>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>('');
  const [customText, setCustomText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMockup, setGeneratedMockup] = useState<string>('');

  const products = [
    {
      id: 1,
      title: 'Кубок "Триумф"',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
    },
    {
      id: 2,
      title: 'Награда "Вершина"',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
    },
    {
      id: 3,
      title: 'Статуэтка "Лидер"',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
    },
    {
      id: 4,
      title: 'Подарок "Престиж"',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
    },
  ];

  useEffect(() => {
    const productId = searchParams.get('product');
    if (productId) {
      setSelectedProduct(Number(productId));
    }
    
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [searchParams]);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    if (!selectedProduct || !logoPreview) {
      alert('Выберите изделие и загрузите логотип');
      return;
    }

    setIsGenerating(true);

    const selectedProductData = products.find(p => p.id === selectedProduct);
    const prompt = `Professional product mockup: elegant crystal award trophy with engraved logo and text. The award is ${selectedProductData?.title}. Place a company logo (abstract geometric design) in the center of the trophy. Below the logo, engrave the text: "${customText || 'За выдающиеся достижения'}". Luxury presentation on dark background with dramatic lighting, studio photography, high quality, photorealistic.`;

    try {
      const response = await fetch('https://api.poehali.dev/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setGeneratedMockup(data.url);

      await fetch('https://functions.poehali.dev/74c0a2b5-7337-4424-9131-1b5e377dfec0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user.id,
          product_id: selectedProduct,
          product_title: selectedProductData?.title,
          custom_text: customText,
          logo_url: logoPreview,
          mockup_url: data.url,
        }),
      });
    } catch (error) {
      console.error('Error generating mockup:', error);
      alert('Ошибка генерации. Попробуйте снова.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAuthSuccess = (userData: any, token: string) => {
    setUser(userData);
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
            <Icon name="Sparkles" size={18} />
            <span className="text-sm font-medium">AI Конструктор</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Создайте макет за минуту
          </h2>
          <p className="text-lg text-muted-foreground">
            Выберите изделие, загрузите логотип и текст — нейросеть создаст реалистичный макет
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Package" size={20} />
                  Шаг 1: Выберите изделие
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => setSelectedProduct(product.id)}
                      className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                        selectedProduct === product.id
                          ? 'border-primary shadow-lg scale-105'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-32 object-cover"
                      />
                      {selectedProduct === product.id && (
                        <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                          <Icon name="Check" size={16} />
                        </div>
                      )}
                      <div className="p-2 bg-background/95 backdrop-blur">
                        <p className="text-xs font-medium truncate">{product.title}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Image" size={20} />
                  Шаг 2: Загрузите логотип
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="logo-upload" className="cursor-pointer">
                      <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                        logoPreview ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}>
                        {logoPreview ? (
                          <div className="space-y-2">
                            <img src={logoPreview} alt="Logo preview" className="max-h-32 mx-auto" />
                            <p className="text-sm text-muted-foreground">Нажмите для замены</p>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <Icon name="Upload" size={32} className="mx-auto text-muted-foreground" />
                            <p className="text-sm font-medium">Нажмите для загрузки</p>
                            <p className="text-xs text-muted-foreground">PNG, JPG до 5MB</p>
                          </div>
                        )}
                      </div>
                    </Label>
                    <Input
                      id="logo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Type" size={20} />
                  Шаг 3: Добавьте текст
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="custom-text">Текст гравировки</Label>
                  <Textarea
                    id="custom-text"
                    placeholder="Например: За выдающиеся достижения 2024"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">
                    Максимум 100 символов
                  </p>
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={handleGenerate}
              disabled={!selectedProduct || !logoPreview || isGenerating}
              size="lg"
              className="w-full"
            >
              {isGenerating ? (
                <>
                  <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                  Генерируем макет...
                </>
              ) : (
                <>
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Создать макет с AI
                </>
              )}
            </Button>
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-muted to-muted/50 p-8 border-b">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Icon name="Eye" size={20} />
                    Предпросмотр макета
                  </h3>
                </div>
                <div className="aspect-square bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8">
                  {generatedMockup ? (
                    <div className="relative w-full h-full">
                      <img
                        src={generatedMockup}
                        alt="Generated mockup"
                        className="w-full h-full object-contain rounded-lg"
                      />
                      <Button
                        size="sm"
                        variant="secondary"
                        className="absolute top-4 right-4"
                        onClick={() => window.open(generatedMockup, '_blank')}
                      >
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <Icon name="ImageIcon" size={64} className="mx-auto text-muted-foreground/50" />
                      <div>
                        <p className="text-muted-foreground font-medium mb-2">
                          Макет появится здесь
                        </p>
                        <p className="text-sm text-muted-foreground/70">
                          Заполните форму и нажмите "Создать макет"
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                {generatedMockup && (
                  <div className="p-6 bg-muted/50 space-y-3">
                    <Button variant="outline" className="w-full" onClick={() => navigate('/dashboard')}>
                      <Icon name="FolderOpen" size={16} className="mr-2" />
                      Открыть в кабинете
                    </Button>
                    <Button className="w-full">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Заказать с этим дизайном
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
      <AuthModal open={showAuthModal} onOpenChange={setShowAuthModal} onSuccess={handleAuthSuccess} />
    </>
  );
};

export default AiConstructor;