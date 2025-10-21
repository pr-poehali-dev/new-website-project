import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Achievement {
  id: string;
  image: string;
  title: string;
  description: string;
}

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const achievements: Achievement[] = [
    {
      id: 'top-350',
      image: 'https://cdn.poehali.dev/files/252c4ba8-f41d-41ad-9a35-73d14801a646.png',
      title: 'ТОП-350 бизнеса России',
      description: 'ТОП-350 бизнеса России по результатам Всероссийского рейтинга МСП "Индекс дела" 2025'
    },
    {
      id: 'top-region',
      image: 'https://cdn.poehali.dev/files/1fced23b-bf3e-46ae-aa78-4271683340b0.png',
      title: 'ТОП Бизнес региона',
      description: 'ТОП Бизнес региона по результатам Всероссийского рейтинга МСП "Индекс дела" 2025'
    },
    {
      id: 'yandex-rating',
      image: 'https://cdn.poehali.dev/files/252c4ba8-f41d-41ad-9a35-73d14801a646.png',
      title: '5 звёзд на Яндекс Картах',
      description: 'Надежный поставщик, 5 звезд рейтинга по отзывам Яндекс Карт'
    },
    {
      id: 'experience',
      image: 'https://cdn.poehali.dev/files/1fced23b-bf3e-46ae-aa78-4271683340b0.png',
      title: 'Более 10 лет на рынке',
      description: 'Более 10 лет опыта в производстве эксклюзивных наград и подарков'
    }
  ];

  return (
    <>
      <section className="bg-background py-8 md:py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className="flex flex-col items-center gap-3 cursor-pointer group"
                onClick={() => setSelectedAchievement(achievement)}
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs md:text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {achievement.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedAchievement} onOpenChange={() => setSelectedAchievement(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedAchievement?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-lg overflow-hidden">
                <img
                  src={selectedAchievement?.image || ''}
                  alt={selectedAchievement?.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {selectedAchievement?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Achievements;
