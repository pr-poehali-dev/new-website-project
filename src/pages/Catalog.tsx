import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { products, materials, events, recipients } from '@/data/products';

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

  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState('all');
  const [selectedRecipient, setSelectedRecipient] = useState('all');

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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {products.filter(p => {
                const categoryMatch = p.category === category;
                const materialMatch = selectedMaterial === 'all' || p.material === selectedMaterial;
                const eventMatch = selectedEvent === 'all' || p.event === selectedEvent;
                const recipientMatch = selectedRecipient === 'all' || p.recipient === selectedRecipient;
                return categoryMatch && materialMatch && eventMatch && recipientMatch;
              }).map((product) => (
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

            {products.filter(p => {
              const categoryMatch = p.category === category;
              const materialMatch = selectedMaterial === 'all' || p.material === selectedMaterial;
              const eventMatch = selectedEvent === 'all' || p.event === selectedEvent;
              const recipientMatch = selectedRecipient === 'all' || p.recipient === selectedRecipient;
              return categoryMatch && materialMatch && eventMatch && recipientMatch;
            }).length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-lg text-muted-foreground">
                  По выбранным фильтрам ничего не найдено
                </p>
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
    </div>
  );
};

export default Catalog;