import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallModal from '@/components/CallModal';
import Icon from '@/components/ui/icon';
import { sportsCategories } from '@/data/sportsCategories';
import NotFound from './NotFound';

const SportsCategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [showCallModal, setShowCallModal] = useState(false);
  
  if (!categoryId || !sportsCategories[categoryId]) {
    return <NotFound />;
  }

  const category = sportsCategories[categoryId];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <CallModal 
        isOpen={showCallModal} 
        onClose={() => setShowCallModal(false)}
      />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="ArrowLeft" size={16} />
                Назад
              </Link>
            </div>
            
            <div 
              className="relative min-h-[600px] rounded-3xl overflow-hidden p-12 md:p-16 flex flex-col justify-between"
              style={{
                backgroundImage: `url(${category.heroImages[0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
              
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                  <Icon name="Trophy" size={16} className="text-white" />
                  <span className="text-sm font-medium text-white">
                    Спортивные награды премиум-класса
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  {category.heroTitle}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
                  {category.heroSubtitle}
                </p>
                <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
                  {category.heroDescription}
                </p>
                
                <button
                  onClick={() => setShowCallModal(true)}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-medium hover:bg-white/20 transition-all inline-flex items-center gap-2"
                >
                  Обсудить проект
                  <Icon name="ArrowRight" size={20} />
                </button>
              </div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                {category.features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-3">
                      <Icon name={feature.icon as any} size={20} className="text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1 text-sm">{feature.title}</h3>
                    <p className="text-white/70 text-xs">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.gallery.map((item, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon name="Eye" size={18} className="text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Премиум качество</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Создадим награды для вашего турнира
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Наши мастера разработают уникальные спортивные награды, которые станут символом ваших побед и достижений
            </p>
            
            <button
              onClick={() => setShowCallModal(true)}
              className="px-10 py-5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-3 text-lg shadow-xl hover:shadow-2xl"
            >
              Получить консультацию
              <Icon name="ArrowRight" size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-background rounded-2xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Индивидуальный дизайн</h3>
                <p className="text-sm text-muted-foreground">Создаем по вашему эскизу или разработаем новый</p>
              </div>

              <div className="p-6 bg-background rounded-2xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gem" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Благородные материалы</h3>
                <p className="text-sm text-muted-foreground">Металл, стекло, камень — только лучшее</p>
              </div>

              <div className="p-6 bg-background rounded-2xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Точные сроки</h3>
                <p className="text-sm text-muted-foreground">Гарантируем изготовление к вашему событию</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SportsCategoryPage;
