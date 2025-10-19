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
        <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-6 md:mb-8">
          <Icon name="Building2" size={18} />
          <span className="text-sm font-medium">О нашей компании</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Компания <span className="text-primary">Арт Стеклов</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Производитель наград и подарков для выдающихся людей с 2015 года.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Это не просто награды — это осмысленные подарки для тех, чьи решения влияют на ход событий. Для первых лиц: основателей, акционеров, партнёров, руководителей, дипломатов.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[400px]">
            <img
              src="https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg"
              alt="Премиальная награда"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] order-2 lg:order-1">
            <img
              src="https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/1a8fc33a-c8f9-4cfb-a621-77668cdf7095.jpg"
              alt="Награды в интерьере"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Каждое изделие Art Steklov — это знак достижений, который отражает характер, силу и уверенность. Мы создаём награды, которые решают важную задачу: как выразить уважение человеку, у которого уже всё есть.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Мы специализируемся на именных, смысловых наградах — не сувенирах, не премиальных безликих аксессуарах, а символах статуса, признания и уважения. Наш подход — это индивидуальное проектирование, материалы, которые сохраняют свою значимость и статус на протяжении лет.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-muted/30 rounded-2xl p-6 hover:bg-muted/50 transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name={feature.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
