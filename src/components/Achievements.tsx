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
    }
  ];

  return (
    <>
      <div className="absolute top-4 md:top-28 right-4 md:right-8 z-20 flex flex-row gap-3">
        {achievements.map((achievement) => (
          <div 
            key={achievement.id}
            className="w-24 h-24 md:w-32 md:h-32 cursor-pointer hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            onClick={() => setSelectedAchievement(achievement)}
          >
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

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