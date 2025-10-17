import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const Production = () => {
  const steps = [
    {
      icon: 'Lightbulb',
      title: 'Концепция',
      description: 'Разрабатываем уникальный дизайн с учетом ваших пожеланий и бренда',
    },
    {
      icon: 'Palette',
      title: 'Дизайн',
      description: '3D-моделирование и визуализация будущего изделия',
    },
    {
      icon: 'Hammer',
      title: 'Производство',
      description: 'Изготовление на высокоточном оборудовании из премиальных материалов',
    },
    {
      icon: 'CheckCircle',
      title: 'Контроль качества',
      description: 'Многоступенчатая проверка каждого изделия',
    },
    {
      icon: 'Package',
      title: 'Упаковка',
      description: 'Индивидуальная подарочная упаковка премиум-класса',
    },
    {
      icon: 'Truck',
      title: 'Доставка',
      description: 'Безопасная доставка в любую точку России',
    },
  ];

  return (
    <section id="production" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6">
              <Icon name="Factory" size={18} />
              <span className="text-sm font-medium">Производство</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Полный цикл производства
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Собственное производство с современным оборудованием позволяет контролировать качество на каждом этапе и гарантировать точное соблюдение сроков.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Мы используем передовые технологии обработки стекла и хрусталя, что позволяет создавать изделия любой сложности — от классических форм до авангардных решений.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-6 border-2">
                <div className="text-3xl font-bold text-primary mb-2">500м²</div>
                <div className="text-sm text-muted-foreground">Площадь производства</div>
              </div>
              <div className="bg-card rounded-2xl p-6 border-2">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Режим работы</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/11854546-1d75-4f54-ad2d-a50dddc6a503.jpg"
                alt="Производство"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 text-8xl font-bold text-muted/10 select-none">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={step.icon} size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Production;
