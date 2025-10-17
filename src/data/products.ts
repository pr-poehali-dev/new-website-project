export interface Product {
  id: number;
  title: string;
  material: string;
  event: string;
  recipient: string;
  price: string;
  image: string;
  category?: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Кубок "Триумф"',
    material: 'crystal',
    event: 'corporate',
    recipient: 'executives',
    category: 'steklyannye-nagrady',
    price: 'от 15 000 ₽',
    image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
  },
  {
    id: 2,
    title: 'Награда "Вершина"',
    material: 'glass',
    event: 'sports',
    recipient: 'vip',
    category: 'steklyannye-nagrady',
    price: 'от 25 000 ₽',
    image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
  },
  {
    id: 3,
    title: 'Статуэтка "Лидер"',
    material: 'combined',
    event: 'government',
    recipient: 'executives',
    category: 'kamennaya-istoriya',
    price: 'от 35 000 ₽',
    image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
  },
  {
    id: 4,
    title: 'Подарок "Престиж"',
    material: 'crystal',
    event: 'corporate',
    recipient: 'partners',
    category: 'steklyannye-nagrady',
    price: 'от 20 000 ₽',
    image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
  },
  {
    id: 5,
    title: 'Награда "Признание"',
    material: 'metal',
    event: 'cultural',
    recipient: 'employees',
    category: 'izdeliya-iz-metalla',
    price: 'от 12 000 ₽',
    image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
  },
  {
    id: 6,
    title: 'Кубок "Победа"',
    material: 'glass',
    event: 'sports',
    recipient: 'vip',
    category: 'steklyannye-nagrady',
    price: 'от 30 000 ₽',
    image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
  },
  {
    id: 7,
    title: 'Акриловая награда "Звезда"',
    material: 'acrylic',
    event: 'corporate',
    recipient: 'employees',
    category: 'akrilovye-izdeliya',
    price: 'от 8 000 ₽',
    image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
  },
  {
    id: 8,
    title: 'Предмет в смоле "Элегант"',
    material: 'resin',
    event: 'cultural',
    recipient: 'vip',
    category: 'predmety-v-smole',
    price: 'от 18 000 ₽',
    image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
  },
  {
    id: 9,
    title: 'Деревянная награда "Классик"',
    material: 'wood',
    event: 'corporate',
    recipient: 'partners',
    category: 'izdeliya-iz-drevesiny',
    price: 'от 10 000 ₽',
    image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
  },
  {
    id: 10,
    title: 'Диплом "Почётный"',
    material: 'combined',
    event: 'government',
    recipient: 'executives',
    category: 'diplomy-i-plaketki',
    price: 'от 5 000 ₽',
    image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
  },
  {
    id: 11,
    title: '3D награда "Инновация"',
    material: 'combined',
    event: 'corporate',
    recipient: 'executives',
    category: 'izdeliya-s-3d-obektami',
    price: 'от 28 000 ₽',
    image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
  },
  {
    id: 12,
    title: 'Каменная награда "Вечность"',
    material: 'stone',
    event: 'government',
    recipient: 'vip',
    category: 'kamennaya-istoriya',
    price: 'от 45 000 ₽',
    image: 'https://cdn.poehali.dev/projects/a7feed0c-8052-42f4-853e-4b4eebf26e01/files/556cdf38-baa0-489c-afe4-1ad9fcb5d03c.jpg',
  },
];

export const materials = [
  { value: 'all', label: 'Все материалы' },
  { value: 'crystal', label: 'Хрусталь' },
  { value: 'glass', label: 'Стекло' },
  { value: 'metal', label: 'Металл' },
  { value: 'acrylic', label: 'Акрил' },
  { value: 'wood', label: 'Дерево' },
  { value: 'stone', label: 'Камень' },
  { value: 'resin', label: 'Смола' },
  { value: 'combined', label: 'Комбинированные' },
];

export const events = [
  { value: 'all', label: 'Все мероприятия' },
  { value: 'corporate', label: 'Корпоративные' },
  { value: 'sports', label: 'Спортивные' },
  { value: 'government', label: 'Государственные' },
  { value: 'cultural', label: 'Культурные' },
];

export const recipients = [
  { value: 'all', label: 'Все получатели' },
  { value: 'executives', label: 'Руководителям' },
  { value: 'partners', label: 'Партнёрам' },
  { value: 'employees', label: 'Сотрудникам' },
  { value: 'vip', label: 'VIP персонам' },
];
