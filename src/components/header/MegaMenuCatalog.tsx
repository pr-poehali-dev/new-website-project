import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { mainCategories } from './HeaderData';

interface MegaMenuCatalogProps {
  hoveredCategory: string | null;
  setHoveredCategory: (category: string | null) => void;
}

const MegaMenuCatalog = ({ hoveredCategory, setHoveredCategory }: MegaMenuCatalogProps) => {
  const [selectedMainCategory, setSelectedMainCategory] = useState<string>('corporate');

  return (
    <div 
      className="absolute left-0 right-0 top-full mt-0 bg-[#0a0a0a]/95 backdrop-blur-sm border-t border-white/10 shadow-2xl z-50"
      onMouseLeave={() => setHoveredCategory(null)}
    >
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3 border-r border-white/10 pr-8">
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-4">
              Категории
            </h3>
            <ul className="space-y-2">
              {mainCategories.map((category) => (
                <li key={category.key}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedMainCategory === category.key
                        ? 'bg-primary/10 text-primary'
                        : 'text-white/80 hover:bg-white/5'
                    }`}
                    onMouseEnter={() => setSelectedMainCategory(category.key)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-9 grid grid-cols-3 gap-8">
            {selectedMainCategory === 'corporate' && (
              <>
                <div>
                  <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-3">
                    Материалы
                  </h3>
                  <ul className="space-y-2">
                    {mainCategories.find(c => c.key === selectedMainCategory)?.materials?.map((material, idx) => (
                      <li key={idx}>
                        <a href={material.href} className="text-sm text-white/80 hover:text-white transition-colors">
                          {material.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-3">
                    По мероприятиям
                  </h3>
                  <ul className="space-y-2">
                    {mainCategories.find(c => c.key === selectedMainCategory)?.occasions?.map((occasion, idx) => (
                      <li key={idx}>
                        <a href={occasion.href} className="text-sm text-white/80 hover:text-white transition-colors">
                          {occasion.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-3">
                    Кому подарить
                  </h3>
                  <ul className="space-y-2">
                    {mainCategories.find(c => c.key === selectedMainCategory)?.recipients?.map((recipient, idx) => (
                      <li key={idx}>
                        <a href={recipient.href} className="text-sm text-white/80 hover:text-white transition-colors">
                          {recipient.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {selectedMainCategory !== 'corporate' && (
              <div className="col-span-3">
                <div className="grid grid-cols-3 gap-6">
                  {mainCategories.find(c => c.key === selectedMainCategory)?.sportCategories?.map((sportCat, idx) => (
                    <div key={idx}>
                      <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-3">
                        {sportCat.name}
                      </h3>
                      <ul className="space-y-2">
                        {sportCat.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <a href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Icon name="Star" size={16} />
                <span>Популярные награды</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Icon name="Sparkles" size={16} />
                <span>Новинки</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Icon name="TrendingUp" size={16} />
                <span>Бестселлеры</span>
              </a>
            </div>
            <a 
              href="/catalog" 
              className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              Смотреть все категории
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuCatalog;