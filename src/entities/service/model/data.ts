import type { Service } from './types';

import imgMusei from '@/assets/projects/norilsk/main.jpg';
import imgVR from '@/assets/projects/russia_vdnh/main.jpg';
import img3D from '@/assets/projects/innoprom/main.jpg';
import imgFrontend from '@/assets/projects/korabely/main.jpg';
import imgArenda from '@/assets/projects/agoy/main.jpg';
import imgPodbor from '@/assets/projects/center_russia/main.jpg';
import imgSKUD from '@/assets/projects/kr_predstavitelstvo/main.jpg';
import imgRazrabotka from '@/assets/projects/maykop/main.jpg';
import imgVirtualTours from '@/assets/projects/zhar_ptica/main.jpg';

export const services: Service[] = [
  {
    id: '1',
    title: 'Музеи и выставки',
    description: 'Разработка интерактивных экспозиций: от концепции до монтажа на объекте.',
    price: 'от 300 000 ₽',
    image: imgMusei,
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
    image: img3D,
  },
  {
    id: '4',
    title: 'Frontend и Backend -поддержка',
    description: 'Поддержка и развитие веб-приложений любой сложности.',
    price: 'от 50 000 ₽/мес',
    image: imgFrontend,
  },
  {
    id: '5',
    title: 'Аренда сенсорного оборудования',
    description: 'Интерактивные стойки и панели в аренду для мероприятий.',
    price: 'от 5 000 ₽/день',
    image: imgArenda,
  },
  {
    id: '6',
    title: 'Подбор оборудования для инсталляций',
    description: 'Подбор, поставка и настройка оборудования для инсталляций.',
    price: 'по запросу',
    image: imgPodbor,
  },
  {
    id: '7',
    title: 'Систем контроля и управления доступом',
    description: 'Проектирование и внедрение СКУД для любых объектов.',
    price: 'от 80 000 ₽',
    image: imgSKUD,
  },
  {
    id: '8',
    title: 'Разработка сайтов / приложений',
    description: 'Корпоративные сайты, лендинги и веб-приложения под ключ.',
    price: 'от 100 000 ₽',
    image: imgRazrabotka,
  },
  {
    id: '9',
    title: 'Виртуальные 3D туры',
    description: 'Фотореалистичные 3D-туры для недвижимости и музеев.',
    price: 'от 30 000 ₽',
    image: imgVirtualTours,
  },
];
