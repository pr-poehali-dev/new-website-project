import Icon from '@/components/ui/icon';
import { aboutCategories, serviceCategories } from './HeaderData';

interface MegaMenuAboutProps {
  hoveredCategory: string | null;
  setHoveredCategory: (category: string | null) => void;
  setShowCallModal: (show: boolean) => void;
  setCallModalSource: (source: 'menu' | 'default') => void;
}

const MegaMenuAbout = ({ 
  hoveredCategory, 
  setHoveredCategory, 
  setShowCallModal, 
  setCallModalSource 
}: MegaMenuAboutProps) => {
  const handleCallClick = () => {
    setShowCallModal(true);
    setCallModalSource('menu');
    setHoveredCategory(null);
  };

  return (
    <div 
      className="absolute left-0 right-0 top-full mt-0 bg-[#0a0a0a]/95 backdrop-blur-sm border-t border-white/10 shadow-2xl z-50"
      onMouseLeave={() => setHoveredCategory(null)}
    >
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-6">
            {aboutCategories.map((category, idx) => (
              <div key={idx} className="mb-8">
                <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-4">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item, itemIdx) => (
                    <a
                      key={itemIdx}
                      href={item.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon name={item.icon} size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-primary transition-colors">
                          {item.name}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-6">
            {serviceCategories.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-4">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item, itemIdx) => (
                    <a
                      key={itemIdx}
                      href={item.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon name={item.icon} size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-primary transition-colors">
                          {item.name}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button 
                onClick={handleCallClick}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Icon name="Phone" size={16} />
                <span>Заказать звонок</span>
              </button>
              <a 
                href="mailto:info@awards.ru" 
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={16} />
                <span>info@awards.ru</span>
              </a>
            </div>
            <a 
              href="/about" 
              className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              Подробнее о компании
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuAbout;