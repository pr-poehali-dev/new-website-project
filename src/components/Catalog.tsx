import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { products, materials, events, recipients } from '@/data/products';

const Catalog = () => {
  const navigate = useNavigate();
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState('all');
  const [selectedRecipient, setSelectedRecipient] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = products.filter((product) => {
    const materialMatch = selectedMaterial === 'all' || product.material === selectedMaterial;
    const eventMatch = selectedEvent === 'all' || product.event === selectedEvent;
    const recipientMatch = selectedRecipient === 'all' || product.recipient === selectedRecipient;
    return materialMatch && eventMatch && recipientMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') {
      const priceA = parseInt(a.price.replace(/\D/g, ''));
      const priceB = parseInt(b.price.replace(/\D/g, ''));
      return priceA - priceB;
    }
    if (sortBy === 'price-desc') {
      const priceA = parseInt(a.price.replace(/\D/g, ''));
      const priceB = parseInt(b.price.replace(/\D/g, ''));
      return priceB - priceA;
    }
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
          <div className="hidden md:flex flex-wrap gap-3 justify-center mb-6">
            {materials.map((material) => (
              <button
                key={material.value}
                onClick={() => setSelectedMaterial(material.value)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedMaterial === material.value
                    ? 'bg-foreground text-background shadow-lg scale-105'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105'
                }`}
              >
                {material.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex flex-wrap gap-3 justify-center mb-6">
            {events.map((event) => (
              <button
                key={event.value}
                onClick={() => setSelectedEvent(event.value)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedEvent === event.value
                    ? 'bg-foreground text-background shadow-lg scale-105'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105'
                }`}
              >
                {event.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex flex-wrap gap-3 justify-center">
            {recipients.map((recipient) => (
              <button
                key={recipient.value}
                onClick={() => setSelectedRecipient(recipient.value)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedRecipient === recipient.value
                    ? 'bg-foreground text-background shadow-lg scale-105'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105'
                }`}
              >
                {recipient.label}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
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
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <div className="text-2xl font-bold text-primary mb-4">{product.price}</div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => navigate(`/constructor?product=${product.id}`)}
                  >
                    <Icon name="Sparkles" size={18} className="mr-2" />
                    AI Макет
                  </Button>
                  <Button className="flex-1">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-lg text-muted-foreground">
              По выбранным фильтрам ничего не найдено
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Загрузить ещё
            <Icon name="ChevronDown" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;