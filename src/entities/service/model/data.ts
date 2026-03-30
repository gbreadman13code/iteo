import type { Service } from './types';

import imgKeyboard from '@/assets/services/keyboard.png';
import img3D from '@/assets/services/3D_tours.png';
import imgVR from '@/assets/services/VR.png';
import imgDisplays from '@/assets/services/displays.png';
import imgDrone from '@/assets/services/drone.png';
import imgHelm from '@/assets/services/helm.png';
import imgHouse from '@/assets/services/house.png';
import imgShield from '@/assets/services/shield.png';
import imgYouTube from '@/assets/services/youtube.png';

export const services: Service[] = [
  {
    id: '1',
    title: 'Музеи и выставки',
    description: 'Разработка интерактивных экспозиций: от концепции до монтажа на объекте.',
    price: 'от 300 000 ₽',
    image: imgHouse,
  },
  {
    id: '2',
    title: 'VR/AR',
    description: 'Создание VR/AR-приложений для образования, маркетинга и туризма.',
    price: 'от 150 000 ₽',
    image: imgVR,
  },
  {
    id: '3',
    title: '3D-моделирование',
    description: 'Высокодетализированные модели для визуализации и производства.',
    price: 'от 20 000 ₽',
    image: imgDrone,
  },
  {
    id: '4',
    title: 'Frontend и Backend -поддержка',
    description: 'Поддержка и развитие веб-приложений любой сложности.',
    price: 'от 50 000 ₽/мес',
    image: imgKeyboard,
  },
  {
    id: '5',
    title: 'Аренда сенсорного оборудования',
    description: 'Интерактивные стойки и панели в аренду для мероприятий.',
    price: 'от 5 000 ₽/день',
    image: imgDisplays,
  },
  {
    id: '6',
    title: 'Подбор оборудования для инсталляций',
    description: 'Подбор, поставка и настройка оборудования для инсталляций.',
    price: 'по запросу',
    image: imgHelm,
  },
  {
    id: '7',
    title: 'Систем контроля и управления доступом',
    description: 'Проектирование и внедрение СКУД для любых объектов.',
    price: 'от 80 000 ₽',
    image: imgShield,
  },
  {
    id: '8',
    title: 'Разработка сайтов / приложений',
    description: 'Корпоративные сайты, лендинги и веб-приложения под ключ.',
    price: 'от 100 000 ₽',
    image: imgYouTube,
  },
  {
    id: '9',
    title: 'Виртуальные 3D туры',
    description: 'Фотореалистичные 3D-туры для недвижимости и музеев.',
    price: 'от 30 000 ₽',
    image: img3D,
  },
];
