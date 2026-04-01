import AgoyMain from '@/assets/projects/agoy/main.jpg';
import Agoy1 from '@/assets/projects/agoy/1.jpg';
import Agoy2 from '@/assets/projects/agoy/2.jpg';
import Agoy3 from '@/assets/projects/agoy/3.jpg';
import Agoy4 from '@/assets/projects/agoy/4.jpg';
import Agoy5 from '@/assets/projects/agoy/5.jpg';

// import CenterRussiaMain from '@/assets/projects/center_russia/main.jpg';

import InnopromMain from '@/assets/projects/innoprom/main.jpg';
import Innoprom1 from '@/assets/projects/innoprom/1.jpg';
import Innoprom2 from '@/assets/projects/innoprom/2.jpg';
import Innoprom3 from '@/assets/projects/innoprom/3.jpg';
import Innoprom4 from '@/assets/projects/innoprom/4.jpg';
import Innoprom5 from '@/assets/projects/innoprom/5.jpg';
import Innoprom6 from '@/assets/projects/innoprom/6.jpg';

import KorabelyMain from '@/assets/projects/korabely/main.jpg';
import Korabely1 from '@/assets/projects/korabely/1.jpg';
import Korabely2 from '@/assets/projects/korabely/2.jpg';
import Korabely3 from '@/assets/projects/korabely/3.jpg';
import Korabely4 from '@/assets/projects/korabely/4.jpg';
import Korabely5 from '@/assets/projects/korabely/5.jpg';
import Korabely6 from '@/assets/projects/korabely/6.jpg';
import Korabely7 from '@/assets/projects/korabely/7.jpg';

import KrPredstavitelstvoMain from '@/assets/projects/kr_predstavitelstvo/main.jpg';
import KrPredstavitelstvo1 from '@/assets/projects/kr_predstavitelstvo/1.jpg';
import KrPredstavitelstvo2 from '@/assets/projects/kr_predstavitelstvo/2.jpg';

import KrascvetmetMain from '@/assets/projects/krascvetmet/main.jpg';
import Krascvetmet1 from '@/assets/projects/krascvetmet/1.jpg';
import Krascvetmet2 from '@/assets/projects/krascvetmet/2.jpg';
import Krascvetmet3 from '@/assets/projects/krascvetmet/3.jpg';

import KyzylMain from '@/assets/projects/kyzyl/main.jpg';
import Kyzyl1 from '@/assets/projects/kyzyl/1.jpg';

import MaykopMain from '@/assets/projects/maykop/main.jpg';
import Maykop1 from '@/assets/projects/maykop/1.jpg';
import Maykop2 from '@/assets/projects/maykop/2.jpg';
import Maykop3 from '@/assets/projects/maykop/3.jpg';
import Maykop4 from '@/assets/projects/maykop/4.jpg';
import Maykop5 from '@/assets/projects/maykop/5.jpg';

import NorilskMain from '@/assets/projects/norilsk/main.jpg';
import Norilsk1 from '@/assets/projects/norilsk/1.jpg';
import Norilsk2 from '@/assets/projects/norilsk/2.jpg';
import Norilsk3 from '@/assets/projects/norilsk/3.jpg';
import Norilsk4 from '@/assets/projects/norilsk/4.jpg';
import Norilsk5 from '@/assets/projects/norilsk/5.jpg';
import Norilsk6 from '@/assets/projects/norilsk/6.jpg';

import PmefMain from '@/assets/projects/pmef/main.jpg';
import Pmef1 from '@/assets/projects/pmef/1.jpg';
import Pmef2 from '@/assets/projects/pmef/2.jpg';
import Pmef3 from '@/assets/projects/pmef/3.jpg';
import Pmef4 from '@/assets/projects/pmef/4.jpg';
import Pmef5 from '@/assets/projects/pmef/5.jpg';
import Pmef6 from '@/assets/projects/pmef/6.jpg';
import Pmef7 from '@/assets/projects/pmef/7.jpg';

import RussiaVdnhMain from '@/assets/projects/russia_vdnh/main.jpg';
import RussiaVdnh2 from '@/assets/projects/russia_vdnh/2.jpg';
import RussiaVdnh3 from '@/assets/projects/russia_vdnh/3.jpg';
import RussiaVdnh4 from '@/assets/projects/russia_vdnh/4.jpg';
import RussiaVdnh6 from '@/assets/projects/russia_vdnh/6.jpg';
import RussiaVdnh7 from '@/assets/projects/russia_vdnh/7.jpg';
import RussiaVdnh8 from '@/assets/projects/russia_vdnh/8.jpg';

import ZharPticaMain from '@/assets/projects/zhar_ptica/main.jpg';
import ZharPtica1 from '@/assets/projects/zhar_ptica/1.jpg';
import ZharPtica2 from '@/assets/projects/zhar_ptica/2.jpg';
import ZharPtica3 from '@/assets/projects/zhar_ptica/3.jpg';
import ZharPtica4 from '@/assets/projects/zhar_ptica/4.jpg';
import ZharPtica5 from '@/assets/projects/zhar_ptica/5.jpg';
import ZharPtica6 from '@/assets/projects/zhar_ptica/6.jpg';
import ZharPtica7 from '@/assets/projects/zhar_ptica/7.jpg';

import CenterRussiaMain from '@/assets/projects/center_russia/main.jpg';
import CenterRussia1 from '@/assets/projects/center_russia/1.jpg';
import CenterRussia2 from '@/assets/projects/center_russia/2.jpg';
import CenterRussia3 from '@/assets/projects/center_russia/3.jpg';
import CenterRussia4 from '@/assets/projects/center_russia/4.jpg';
import CenterRussia5 from '@/assets/projects/center_russia/5.jpg';

export interface ProjectData {
  id: string;
  title: {
    main: string;
    subtitle: string;
    short: string;
  };
  description: string;
  list: string[];
  images: {
    main: string;
    photos: string[];
  };
}

export const projects: ProjectData[] = [
  {
    id: 'russia_vdnh',
    title: {
      main: 'ЭКСПОЗИЦИЯ<br/>КРАСНОЯРСКОГО КРАЯ',
      subtitle: 'Международная выставка-форум «Россия» <br/> на ВДНХ, г. Москва',
      short: '«Россия» на ВДНХ',
    },
    description: `
      <p>Красноярский край настолько велик, настолько масштабен и красив, что было непросто собрать на одной площадке всё то, чем мы, сибиряки, по-настоящему гордимся.</p>
      <p>И у нас получилось!<p>
      <p>Стенд был отмечен как один из лучших среди всех стендов выставки и наглядно показал родной край посетителям выставки в Москве, а позже вернулся домой, в Красноярск, где стал частью Национального центра «Россия».</p>
      <p>Отдельный повод для гордости заключался в том, что практически все работы были выполнены компаниями из Красноярска.</p>
    `,
    list: [
      'Создание кинетического мультимедийного макета «Красноярск 2018–2028» <br/>(реализован в партнерстве с макетной мастерской Mакет3D)',
      'Разработка интерактивной презентации для локации «Сила сибирских рек»',
      'Создание интерактивной локации «Космос и Небо»',
      'Создание интерактивной локации «Шкаф Астафьева»',
      '3D-моделирование, анимации, производство видеоматериалов',
      'Подбор, закупка и монтаж оборудования',
    ],
    images: {
      main: RussiaVdnhMain,
      photos: [ RussiaVdnh2, RussiaVdnh3, RussiaVdnh4, RussiaVdnh6, RussiaVdnh7, RussiaVdnh8],
    },
  },
  {
    id: 'norilsk',
    title: {
      main: 'МУЛЬТИМЕДИЙНЫЙ<br/>МАКЕТ НОРИЛЬСКА',
      subtitle: 'VIII Всероссийский фестиваль<br/>«Архитектурное наследие»',
      short: 'Макет Норильска',
    },
    description: `
    <p>В 2025 году Норильск дебютировал на VIII Всероссийском фестивале «Архитектурное наследие», который проводит Союз архитекторов России. Мероприятие собрало более тысячи специалистов из разных регионов страны и зарубежья.</p>
    <p>Команда Красноярского края представила проект «Наследие Арктики. Архитектурный код Норильска», удостоенный <b>Золотого диплома в номинации «Проекты научной реставрации архитектурного и ландшафтного наследия»</b></p>
    `,
    list: [
      'Аэросъемка Норильска, фото 360 градусов',
      'Разработка интерактивной презентации',
      'Проектирование автоматизированной системы освещения мультимедийного макета',
      '3D-моделирование, анимации, производство видеоматериалов',
      'Подбор, закупка и монтаж оборудования'
    ],
    images: {
      main: NorilskMain,
      photos: [Norilsk1, Norilsk2, Norilsk3, Norilsk4, Norilsk5, Norilsk6],
    },
  },
  {
    id: 'center_russia',
    title: {
      main: 'НАЦИОНАЛЬНЫЙ ЦЕНТР «РОССИЯ»',
      subtitle: 'Филиал в городе Красноярске',
      short: 'Национальный центр «Россия»',
    },
    description: `
    <p>Национальный центр «Россия» в Красноярском крае — это современное пространство о прошлом, настоящем и будущем региона. Здесь проходят выставки, лекции, конференции и творческие встречи, раскрывающие потенциал края и страны.</p>
    <p>Масштабная выставка «Энергия людей — энергия Красноярского края» реализована здесь на площади более 5 тысяч квадратных метров.</p>
    <p>Команда Итео принимала активное участие в проектировании и планировании выставки, а также непосредственно реализовала более 30 интерактивных локаций.</p>
    `,
    list: [
      'Создание более 30 интерактивных локаций',
      'Разработка кинетических экспонатов',
      '3D-моделирование, анимации, производство видеоматериалов',
      'Подбор, закупка и монтаж оборудования',
    ],
    images: {
      main: CenterRussiaMain,
      photos: [CenterRussia1, CenterRussia2, CenterRussia3, CenterRussia4, CenterRussia5],
    },
  },
  {
    id: 'agoy',
    title: {
      main: 'ИНТЕРАКТИВНАЯ ПРЕЗЕНТАЦИЯ',
      subtitle: 'ДЛЯ МЕЖДУНАРОДНОГО ПРОЕКТА ОТЕЛЯ «Палаццо Де Агой»',
      short: 'Макет для отеля «Палаццо Де Агой»',
    },
    description: 'Совместный проект с командой М3D включает в себя интерактивную презентацию, детальный макет и видеографику, позволяющие познакомиться поближе с Палаццо Де Агой.',
    list: ['Создание интерактивной презентации', '3D-моделирование, разработка контента для видеостен', 'Разработка системы управления освещением для макета'],
    images: {
      main: AgoyMain,
      photos: [Agoy1, Agoy2, Agoy3, Agoy4, Agoy5],
    },
  },
  {
    id: 'innoprom',
    title: {
      main: 'ИННОПРОМ',
      subtitle: 'Выставочный стенд',
      short: 'Иннопром',
    },
    description: 'Международная промышленная выставка ежегодно дает возможность рассказать про отрасль через современные информационные технологии. Интерактивные решения в сфере промышленности позволяют сделать даже уникальные и наукоемкие решения более наглядными для гостей выставок и форумов.',
    list: ['Разработка интерактивной презентации'],
    images: {
      main: InnopromMain,
      photos: [Innoprom1, Innoprom2, Innoprom3, Innoprom4, Innoprom5, Innoprom6],
    },
  },
  {
    id: 'korabely',
    title: {
      main: 'СОЗДАНИЕ ЭКСПОЗИЦИИ',
      subtitle: 'для образовательного центра «Корабелы Прионежья»',
      short: 'Экспозиция «Корабелы Прионежья»',
    },
    description: 'Комплексное наполнение интерактивных пространств с уникальной информационной подачей в тематике различных эпох.',
    list: ['Разработка интерактивных локаций', 'Разработка интерактивной презентации', '3D-моделирование, производство видеоматериалов и анимации', 'Подбор, закупка и монтаж оборудования'],
    images: {
      main: KorabelyMain,
      photos: [Korabely1, Korabely2, Korabely3, Korabely4, Korabely5, Korabely6, Korabely7],
    },
  },
  {
    id: 'kr_predstavitelstvo',
    title: {
      main: 'ПОСТОЯННОЕ ПРЕДСТАВИТЕЛЬСТВО КРАСНОЯРСКОГО КРАЯ',
      subtitle: 'при правительстве Российской Федерации',
      short: 'Представительство Красноярского края',
    },
    description: 'Постоянное представительство Красноярского края в городе Москва можно назвать лицом нашего региона. Применение современных технологий — это прекрасная возможность рассказать о нашем регионе больше, применяя современные мультимедийные приемы.',
    list: ['Разработка интерактивной презентации'],
    images: {
      main: KrPredstavitelstvoMain,
      photos: [KrPredstavitelstvo1, KrPredstavitelstvo2],
    },
  },
  {
    id: 'krascvetmet',
    title: {
      main: 'ВИРТУАЛЬНАЯ ЭКСКУРСИЯ ПО ПРОИЗВОДСТВУ',
      subtitle: 'для компании «Красцветмет»',
      short: 'VR-тур для компании «Красцветмет»',
    },
    description: 'Виртуальная экскурсия дает возможность побывать на уникальном производстве компании и погрузиться в рабочий процесс.',
    list: ['Создание тура для очков виртуальной реальности', 'Съемка видео и фото в формате 360°', 'Формирование карты экскурсии и интерактивов'],
    images: {
      main: KrascvetmetMain,
      photos: [Krascvetmet1, Krascvetmet2, Krascvetmet3],
    },
  },
  {
    id: 'kyzyl',
    title: {
      main: 'МАКЕТ-ПРЕЗЕНТАЦИЯ',
      subtitle: 'нового микрорайона Кызыла',
      short: 'Макет микрорайона Кызыла',
    },
    description: 'Совместная работа с макетной мастерской М3D позволила создать необычное визуальное решение для презентации проекта',
    list: ['Моушн-дизайн и видеографика', 'Подбор и установка видеостен'],
    images: {
      main: KyzylMain,
      photos: [Kyzyl1],
    },
  },
  {
    id: 'maykop',
    title: {
      main: 'МУЗЕЙНО-ВЫСТАВОЧНЫЙ КОМПЛЕКС',
      subtitle: 'Хазрета Меджидовича Совмена',
      short: 'Музей Хазрета Совмена',
    },
    description: 'Создание уникальных экспозиций об этапах жизни и становления известного выдающегося человека: от детства до благотворительной деятельности со стилистической информационной подачей.',
    list: ['Разработка семи уникальных интерактивных локаций', '3D-моделирование, разработка контента', 'Подбор, закупка и монтаж оборудования'],
    images: {
      main: MaykopMain,
      photos: [Maykop1, Maykop2, Maykop3, Maykop4, Maykop5],
    },
  },
  {
    id: 'pmef',
    title: {
      main: 'ИНТЕРАКТИВНАЯ ПРЕЗЕНТАЦИЯ',
      subtitle: '«Енисейская Сибирь» на ПМЭФ',
      short: 'ПМЭФ',
    },
    description:
      'Наша команда ежегодно реализует проекты в рамках проведения форума. Каждый раз это возможность реализовать идеи и показать гостям что-то новое. За последние несколько лет мы приняли участие в создании интерактивных презентаций, мультимедийных инсталляций, виртуальных туров и игр на интерактивных панелях.',
    list: ['Сенсорные панели с интерактивной презентацией', 'VR-шлемы и панорамы Красноярска и края в формате 360°'],
    images: {
      main: PmefMain,
      photos: [Pmef1, Pmef2, Pmef3, Pmef4, Pmef5, Pmef6, Pmef7],
    },
  },
  {
    id: 'zhar_ptica',
    title: {
      main: 'МОДЕРНИЗАЦИЯ',
      subtitle: 'детской библиотеки «Жар-птица»',
      short: 'Библиотека «Жар-птица»',
    },
    description:
      'В рамках модернизации данной детской библиотеки были созданы информационные игровые пространства. Погружение в мир сказок происходит при помощи современных технологий и механик, подходящих для широкого спектра детей и даже взрослых. Знаменитые герои и злодеи нашего фольклора сопровождают посетителя в этом путешествие.',
    list: ['Подбор оборудования', 'Создание визуальных материалов', 'Реализация технического решения под ключ', 'Разработка игр', 'Создание локации с технологией нейросетей'],
    images: {
      main: ZharPticaMain,
      photos: [ZharPtica1, ZharPtica2, ZharPtica3, ZharPtica4, ZharPtica5, ZharPtica6, ZharPtica7],
    },
  },
];
