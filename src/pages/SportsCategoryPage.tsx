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
                  className="bg-background rounded-2xl overflow-hidden group hover:shadow-xl transition-all"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.materials.map((material, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Для каких турниров</h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Создаем награды для любых спортивных мероприятий
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {category.occasions.map((occasion, index) => (
                <div 
                  key={index}
                  className="group"
                >
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={occasion.image}
                      alt={occasion.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{occasion.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {occasion.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {occasion.examples.map((example, idx) => (
                      <span 
                        key={idx}
                        className="text-sm text-muted-foreground"
                      >
                        {example}{idx < occasion.examples.length - 1 ? ' •' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} />
                </div>
                <h3 className="font-bold mb-2">Индивидуальный дизайн</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Создаем по вашему эскизу или разработаем новый концепт
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gem" size={24} />
                </div>
                <h3 className="font-bold mb-2">Премиум материалы</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Только качественные металлы, камень и современные материалы
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={24} />
                </div>
                <h3 className="font-bold mb-2">Точные сроки</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Гарантируем изготовление к дате вашего турнира
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Создадим награды для вашего турнира
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Обсудим задачу, предложим варианты и подготовим дизайн-проект
            </p>
            
            <button
              onClick={() => setShowCallModal(true)}
              className="px-12 py-5 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-all inline-flex items-center gap-2"
            >
              Получить консультацию
              <Icon name="Phone" size={20} />
            </button>
            
            <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">15 лет</div>
                <div className="opacity-80">Опыт работы</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="opacity-80">Спортивных турниров</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">1000+</div>
                <div className="opacity-80">Изготовленных наград</div>
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