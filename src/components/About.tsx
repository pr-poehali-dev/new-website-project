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
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-6">
              <Icon name="Building2" size={18} />
              <span className="text-sm font-medium">О нашей компании</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Компания <span className="text-primary">Элитных наград</span> с 2003 года
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Компания «Элитных наград» — это ведущий производитель эксклюзивных наград, подарков и корпоративной продукции из хрусталя и стекла в России.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Наши изделия отличаются непревзойденным качеством исполнения, элегантным дизайном и индивидуальным подходом. Каждый проект создается командой профессионалов с многолетним опытом работы в сфере премиальной продукции.
            </p>

            <div className="space-y-4">
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
          </div>

          <div className="relative">
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
