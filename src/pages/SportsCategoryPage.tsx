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

      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
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
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-blue-500/10 border border-orange-500/20 rounded-full mb-6">
                  <Icon name="Trophy" size={16} className="text-orange-500" />
                  <span className="text-sm font-medium bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                    Спортивные награды
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  {category.heroTitle}
                </h1>
                <p className="text-2xl text-muted-foreground mb-4 font-light">
                  {category.heroSubtitle}
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {category.heroDescription}
                </p>
                
                <button
                  onClick={() => setShowCallModal(true)}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all inline-flex items-center gap-2 shadow-lg shadow-orange-500/30"
                >
                  Заказать награды
                  <Icon name="ArrowRight" size={20} />
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 blur-3xl"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  {category.heroImages.map((image, index) => (
                    <div 
                      key={index}
                      className="relative overflow-hidden rounded-2xl aspect-square transform hover:scale-105 transition-transform duration-300"
                      style={{
                        marginTop: index % 2 === 0 ? '0' : '2rem'
                      }}
                    >
                      <img 
                        src={image} 
                        alt={`${category.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.features.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-blue-500/0 group-hover:from-orange-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300"></div>
                  
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={feature.icon as any} size={28} className="text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Наши работы
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Награды, которые вдохновляют на новые победы
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.gallery.map((item, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-muted/30 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon name="Eye" size={20} className="text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Trophy" size={32} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы создать награду вашей мечты?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Расскажите о вашем турнире, и мы создадим награды, которые станут символом победы
            </p>
            
            <button
              onClick={() => setShowCallModal(true)}
              className="px-10 py-5 bg-white text-orange-600 rounded-lg font-semibold hover:bg-white/90 transition-all inline-flex items-center gap-3 text-lg shadow-2xl hover:shadow-white/20"
            >
              Обсудить проект
              <Icon name="ArrowRight" size={24} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SportsCategoryPage;
