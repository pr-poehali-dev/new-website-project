import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

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
  const catalogItem = category ? catalogData[category as keyof typeof catalogData] : null;

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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name={catalogItem.icon} size={64} className="text-primary/20" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Образец {item}</h3>
                    <p className="text-muted-foreground mb-4">
                      Описание изделия и его характеристики
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">от 5 000 ₽</span>
                      <Button size="sm">
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
