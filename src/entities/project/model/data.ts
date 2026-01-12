import type { Project } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Корпоративный сайт ITEO',
    description: 'Разработка интерактивного корпоративного сайта с 3D элементами.',
    imageUrl: '/assets/project1.jpg',
    year: 2024,
    tags: ['React', 'TS', '3D'],
  },
  {
    id: '2',
    title: 'Мобильное приложение',
    description: 'Приложение для доставки еды.',
    imageUrl: '/assets/project2.jpg',
    year: 2023,
    tags: ['React Native', 'Mobile'],
  },
  // Add more mock data as needed
];
