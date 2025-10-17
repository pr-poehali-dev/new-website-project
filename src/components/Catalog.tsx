import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Catalog = () => {
  const navigate = useNavigate();
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState('all');
  const [selectedRecipient, setSelectedRecipient] = useState('all');

  const materials = [
    { value: 'all', label: 'Все материалы' },
    { value: 'crystal', label: 'Хрусталь' },
    { value: 'glass', label: 'Стекло' },
    { value: 'metal', label: 'Металл' },
    { value: 'combined', label: 'Комбинированные' },
  ];

  const events = [
    { value: 'all', label: 'Все мероприятия' },
    { value: 'corporate', label: 'Корпоративные' },
    { value: 'sports', label: 'Спортивные' },
    { value: 'government', label: 'Государственные' },
    { value: 'cultural', label: 'Культурные' },
  ];

  const recipients = [
    { value: 'all', label: 'Все получатели' },
    { value: 'executives', label: 'Руководителям' },
    { value: 'partners', label: 'Партнёрам' },
    { value: 'employees', label: 'Сотрудникам' },
    { value: 'vip', label: 'VIP персонам' },
  ];

  const products = [
    {
      id: 1,
      title: 'Кубок "Триумф"',
      material: 'crystal',
      event: 'corporate',
      recipient: 'executives',
      price: 'от 15 000 ₽',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
    },
    {
      id: 2,
      title: 'Награда "Вершина"',
      material: 'glass',
      event: 'sports',
      recipient: 'vip',
      price: 'от 25 000 ₽',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
    },
    {
      id: 3,
      title: 'Статуэтка "Лидер"',
      material: 'combined',
      event: 'government',
      recipient: 'executives',
      price: 'от 35 000 ₽',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
    },
    {
      id: 4,
      title: 'Подарок "Престиж"',
      material: 'crystal',
      event: 'corporate',
      recipient: 'partners',
      price: 'от 20 000 ₽',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
    },
    {
      id: 5,
      title: 'Награда "Признание"',
      material: 'metal',
      event: 'cultural',
      recipient: 'employees',
      price: 'от 12 000 ₽',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
    },
    {
      id: 6,
      title: 'Кубок "Победа"',
      material: 'glass',
      event: 'sports',
      recipient: 'vip',
      price: 'от 30 000 ₽',
      image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const materialMatch = selectedMaterial === 'all' || product.material === selectedMaterial;
    const eventMatch = selectedEvent === 'all' || product.event === selectedEvent;
    const recipientMatch = selectedRecipient === 'all' || product.recipient === selectedRecipient;
    return materialMatch && eventMatch && recipientMatch;
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
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

        {filteredProducts.length === 0 && (
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