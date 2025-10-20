
-- Добавляем товары по всем категориям
INSERT INTO catalog_items (name, description, price, category, image_url) VALUES
-- Стеклянные награды
('Стеклянная звезда', 'Элегантная награда из хрусталя в форме звезды', 15000, 'steklyannye-nagrady', 'https://files.poehali.dev/glass-star.jpg'),
('Хрустальная пирамида', 'Престижная награда из оптического стекла', 22000, 'steklyannye-nagrady', 'https://files.poehali.dev/crystal-pyramid.jpg'),
('Стеклянный кубок', 'Классическая награда для победителей', 18000, 'steklyannye-nagrady', 'https://files.poehali.dev/glass-cup.jpg'),

-- Каменная история
('Мраморная плита', 'Награда из натурального мрамора с гравировкой', 25000, 'kamennaya-istoriya', 'https://files.poehali.dev/marble-plate.jpg'),
('Гранитный постамент', 'Престижная награда из гранита', 30000, 'kamennaya-istoriya', 'https://files.poehali.dev/granite-base.jpg'),
('Оникс со стеклом', 'Комбинированная награда камень + стекло', 28000, 'kamennaya-istoriya', 'https://files.poehali.dev/onyx-glass.jpg'),

-- Акриловые изделия
('Акриловый блок', 'Современная награда из прозрачного акрила', 12000, 'akrilovye-izdeliya', 'https://files.poehali.dev/acrylic-block.jpg'),
('Цветной акрил', 'Яркая награда с цветными слоями', 14000, 'akrilovye-izdeliya', 'https://files.poehali.dev/colored-acrylic.jpg'),
('Акриловая стелла', 'Высокая награда из акрила', 16000, 'akrilovye-izdeliya', 'https://files.poehali.dev/acrylic-stella.jpg'),

-- Предметы в смоле
('Медаль в смоле', 'Инкапсуляция памятной медали', 20000, 'predmety-v-smole', 'https://files.poehali.dev/medal-in-resin.jpg'),
('Логотип в эпоксидке', 'Объёмный логотип в прозрачной смоле', 18000, 'predmety-v-smole', 'https://files.poehali.dev/logo-resin.jpg'),
('Цветы в смоле', 'Уникальная награда с сухоцветами', 22000, 'predmety-v-smole', 'https://files.poehali.dev/flowers-resin.jpg'),

-- Изделия из древесины
('Деревянный щит', 'Классическая награда из дуба', 17000, 'izdeliya-iz-drevesiny', 'https://files.poehali.dev/wooden-shield.jpg'),
('Кедровая табличка', 'Награда из ароматного кедра', 15000, 'izdeliya-iz-drevesiny', 'https://files.poehali.dev/cedar-plaque.jpg'),
('Ореховый постамент', 'Элитная награда из ореха', 19000, 'izdeliya-iz-drevesiny', 'https://files.poehali.dev/walnut-base.jpg'),

-- Изделия из металла
('Бронзовая медаль', 'Литая награда из бронзы', 24000, 'izdeliya-iz-metalla', 'https://files.poehali.dev/bronze-medal.jpg'),
('Стальной кубок', 'Полированный кубок из нержавейки', 26000, 'izdeliya-iz-metalla', 'https://files.poehali.dev/steel-cup.jpg'),
('Золотая звезда', 'Позолоченная награда', 35000, 'izdeliya-iz-metalla', 'https://files.poehali.dev/gold-star.jpg'),

-- Дипломы и плакетки
('Диплом А4', 'Официальный диплом с рамкой', 8000, 'diplomy-i-plaketki', 'https://files.poehali.dev/diploma-a4.jpg'),
('Благодарность', 'Плакетка с благодарностью', 10000, 'diplomy-i-plaketki', 'https://files.poehali.dev/gratitude.jpg'),
('Почётная грамота', 'Грамота в подарочной упаковке', 9000, 'diplomy-i-plaketki', 'https://files.poehali.dev/certificate.jpg'),

-- Изделия с 3D объектами
('3D логотип', 'Объёмный логотип компании', 21000, 'izdeliya-s-3d-obektami', 'https://files.poehali.dev/3d-logo.jpg'),
('Рельефная награда', 'Награда с 3D рельефом', 23000, 'izdeliya-s-3d-obektami', 'https://files.poehali.dev/relief-award.jpg'),
('Объёмная фигура', 'Награда с объёмной фигурой', 27000, 'izdeliya-s-3d-obektami', 'https://files.poehali.dev/3d-figure.jpg');
