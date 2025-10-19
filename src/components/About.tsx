import Icon from '@/components/ui/icon';

const About = () => {
  const features = [
    {
      icon: 'Gem',
      title: 'Премиальное качество',
      description: 'Используем только лучшие материалы и проверенные технологии производства',
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Каждый проект разрабатывается с учетом пожеланий и ценностей клиента',
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Предоставляем гарантию на всю продукцию и полное сопровождение проекта',
    },
    {
      icon: 'Clock',
      title: 'Точные сроки',
      description: 'Соблюдаем договоренности и всегда укладываемся в установленные сроки',
    },
  ];

  return (
    <section id="about" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-4 md:mb-6">
              <Icon name="Building2" size={18} />
              <span className="text-sm font-medium">О нашей компании</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Компания <span className="text-primary">Арт Стеклов</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Производитель наград и подарков для выдающихся людей с 2015 года.
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Это не просто награды — это осмысленные подарки для тех, чьи решения влияют на ход событий. Для первых лиц: основателей, акционеров, партнёров, руководителей, дипломатов. Тех, кого уважают и чьё признание невозможно выразить банальностью.
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Каждое изделие Art Steklov — это знак достижений, который отражает характер, силу и уверенность. Мы создаём награды, которые решают важную задачу: как выразить уважение человеку, у которого уже всё есть.
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Мы специализируемся на именных, смысловых наградах — не сувенирах, не премиальных безликих аксессуарах, а символах статуса, признания и уважения. Наш подход — это индивидуальное проектирование, материалы, которые сохраняют свою значимость и статус на протяжении лет.
            </p>

            <div className="hidden md:block space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:hidden flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
              {features.map((feature, index) => (
                <div key={index} className="flex-shrink-0 w-[260px] snap-center bg-muted/30 rounded-2xl p-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Icon name={feature.icon} size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg"
                alt="Премиальная награда"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;