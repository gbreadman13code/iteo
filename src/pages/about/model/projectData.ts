import AgoyMain from "@/assets/projects/agoy/main.jpg";
import Agoy1 from "@/assets/projects/agoy/1.jpg";
import Agoy2 from "@/assets/projects/agoy/2.jpg";
import Agoy3 from "@/assets/projects/agoy/3.jpg";
import Agoy4 from "@/assets/projects/agoy/4.jpg";
import Agoy5 from "@/assets/projects/agoy/5.jpg";

// import CenterRussiaMain from '@/assets/projects/center_russia/main.jpg';

import InnopromMain from "@/assets/projects/innoprom/main.jpg";
import Innoprom1 from "@/assets/projects/innoprom/1.jpg";
import Innoprom2 from "@/assets/projects/innoprom/2.jpg";
import Innoprom3 from "@/assets/projects/innoprom/3.jpg";
import Innoprom4 from "@/assets/projects/innoprom/4.jpg";
import Innoprom5 from "@/assets/projects/innoprom/5.jpg";
import Innoprom6 from "@/assets/projects/innoprom/6.jpg";

import KorabelyMain from "@/assets/projects/korabely/main.jpg";
import Korabely1 from "@/assets/projects/korabely/1.jpg";
import Korabely2 from "@/assets/projects/korabely/2.jpg";
import Korabely3 from "@/assets/projects/korabely/3.jpg";
import Korabely4 from "@/assets/projects/korabely/4.jpg";
import Korabely5 from "@/assets/projects/korabely/5.jpg";
import Korabely6 from "@/assets/projects/korabely/6.jpg";
import Korabely7 from "@/assets/projects/korabely/7.jpg";

import KrPredstavitelstvoMain from "@/assets/projects/kr_predstavitelstvo/main.jpg";
import KrPredstavitelstvo1 from "@/assets/projects/kr_predstavitelstvo/1.jpg";
import KrPredstavitelstvo2 from "@/assets/projects/kr_predstavitelstvo/2.jpg";

import KrascvetmetMain from "@/assets/projects/krascvetmet/main.jpg";
import Krascvetmet1 from "@/assets/projects/krascvetmet/1.jpg";
import Krascvetmet2 from "@/assets/projects/krascvetmet/2.jpg";
import Krascvetmet3 from "@/assets/projects/krascvetmet/3.jpg";

import KyzylMain from "@/assets/projects/kyzyl/main.jpg";
import Kyzyl1 from "@/assets/projects/kyzyl/1.jpg";

import MaykopMain from "@/assets/projects/maykop/main.jpg";
import Maykop1 from "@/assets/projects/maykop/1.jpg";
import Maykop2 from "@/assets/projects/maykop/2.jpg";
import Maykop3 from "@/assets/projects/maykop/3.jpg";
import Maykop4 from "@/assets/projects/maykop/4.jpg";
import Maykop5 from "@/assets/projects/maykop/5.jpg";

import NorilskMain from "@/assets/projects/norilsk/main.jpg";
import Norilsk1 from "@/assets/projects/norilsk/1.jpg";
import Norilsk2 from "@/assets/projects/norilsk/2.jpg";
import Norilsk3 from "@/assets/projects/norilsk/3.jpg";

import PmefMain from "@/assets/projects/pmef/main.jpg";
import Pmef1 from "@/assets/projects/pmef/1.jpg";
import Pmef2 from "@/assets/projects/pmef/2.jpg";
import Pmef3 from "@/assets/projects/pmef/3.jpg";
import Pmef4 from "@/assets/projects/pmef/4.jpg";
import Pmef5 from "@/assets/projects/pmef/5.jpg";
import Pmef6 from "@/assets/projects/pmef/6.jpg";
import Pmef7 from "@/assets/projects/pmef/7.jpg";

import RussiaVdnhMain from "@/assets/projects/russia_vdnh/main.jpg";
import RussiaVdnh1 from "@/assets/projects/russia_vdnh/1.jpg";
import RussiaVdnh2 from "@/assets/projects/russia_vdnh/2.jpg";
import RussiaVdnh3 from "@/assets/projects/russia_vdnh/3.jpg";
import RussiaVdnh4 from "@/assets/projects/russia_vdnh/4.jpg";
import RussiaVdnh5 from "@/assets/projects/russia_vdnh/5.jpg";

import ZharPticaMain from "@/assets/projects/zhar_ptica/main.jpg";
import ZharPtica1 from "@/assets/projects/zhar_ptica/1.jpg";
import ZharPtica2 from "@/assets/projects/zhar_ptica/2.jpg";
import ZharPtica3 from "@/assets/projects/zhar_ptica/3.jpg";
import ZharPtica4 from "@/assets/projects/zhar_ptica/4.jpg";
import ZharPtica5 from "@/assets/projects/zhar_ptica/5.jpg";
import ZharPtica6 from "@/assets/projects/zhar_ptica/6.jpg";
import ZharPtica7 from "@/assets/projects/zhar_ptica/7.jpg";

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
    id: "russia_vdnh",
    title: {
      main: "ЭКСПОЗИЦИЯ КРАСНОЯРСКОГО КРАЯ",
      subtitle: "НА ВЫСТАВКЕ «РОССИЯ» НА ВДНХ В МОСКВЕ",
      short: "Выставка «Россия» на ВДНХ",
    },
    description:
      "Инновационный кинетический макет «Красноярск 2018–2028» был успешно реализован совместно с мастерской M3D.",
    list: [
      "Разработка интерактивной локации «Сила сибирских рек»",
      "Создание интерактивной презентации",
      "3D-моделирование, анимации, производство видеоматериалов",
      "Подбор, закупка и монтаж оборудования",
    ],
    images: {
      main: RussiaVdnhMain,
      photos: [RussiaVdnh1, RussiaVdnh2, RussiaVdnh3, RussiaVdnh4, RussiaVdnh5],
    },
  },
  {
    id: "norilsk",
    title: {
      main: "ИНТЕРАКТИВНЫЙ МАКЕТ-ПРЕЗЕНТАЦИЯ",
      subtitle: "ДЛЯ ГОРОДА НОРИЛЬСКА",
      short: "Макет Норильска",
    },
    description:
      "Совместная работа с мастерской М3D позволила более подробно рассказать об уникальной архитектуре Норильска и её обновлении в последние годы.",
    list: [
      "Создание интерактивной презентации",
      "Подбор, закупка оборудования",
      "Разработка системы управления освещением для макета",
      "Моушн-дизайн",
    ],
    images: {
      main: NorilskMain,
      photos: [Norilsk1, Norilsk2, Norilsk3],
    },
  },
  // {
  //     id: 'center_russia',
  //     title: {
  //         main: 'Национальный центр',
  //         subtitle: 'Россия',
  //         short: '2024',
  //     },
  //     description: 'Проект национального центра с передовыми технологиями.',
  //     list: [],
  //     images: {
  //         main: CenterRussiaMain,
  //         photos: [],
  //     },
  // },
  {
    id: "agoy",
    title: {
      main: "ИНТЕРАКТИВНАЯ ПРЕЗЕНТАЦИЯ",
      subtitle: "ДЛЯ МЕЖДУНАРОДНОГО ПРОЕКТА ОТЕЛЯ «ПАЛАЦЦО ДЕ АГОЙ»",
      short: "Макет для отеля «Палаццо Де Агой»",
    },
    description:
      "Совместный проект с командой М3D включает в себя интерактивную презентацию, детальный макет и видеографику.",
    list: [
      "Создание интерактивной презентации",
      "3D-моделирование, разработка контента для видеостен",
      "Разработка системы управления освещением для макета",
    ],
    images: {
      main: AgoyMain,
      photos: [Agoy1, Agoy2, Agoy3, Agoy4, Agoy5],
    },
  },
  {
    id: "innoprom",
    title: {
      main: "ИННОПРОМ",
      subtitle: "Выставочный стенд",
      short: "Иннопром",
    },
    description: "Интерактивный стенд на выставке Иннопром.",
    list: ["Разработка интерактивной презентации"],
    images: {
      main: InnopromMain,
      photos: [
        Innoprom1,
        Innoprom2,
        Innoprom3,
        Innoprom4,
        Innoprom5,
        Innoprom6,
      ],
    },
  },
  {
    id: "korabely",
    title: {
      main: "СОЗДАНИЕ ЭКСПОЗИЦИИ",
      subtitle: "ДЛЯ ОБРАЗОВАТЕЛЬНОГО ЦЕНТРА «КОРАБЕЛЫ ПРИОНЕЖЬЯ»",
      short: "Экспозиция «Корабелы Прионежья»",
    },
    description:
      "Комплексное наполнение интерактивных пространств с уникальной информационной подачей в тематике различных эпох.",
    list: [
      "Разработка интерактивных локаций",
      "Разработка интерактивной презентации",
      "3D-моделирование, производство видеоматериалов и анимации",
      "Подбор, закупка и монтаж оборудования",
    ],
    images: {
      main: KorabelyMain,
      photos: [
        Korabely1,
        Korabely2,
        Korabely3,
        Korabely4,
        Korabely5,
        Korabely6,
        Korabely7,
      ],
    },
  },
  {
    id: "kr_predstavitelstvo",
    title: {
      main: "ПОСТОЯННОЕ ПРЕДСТАВИТЕЛЬСТВО КРАСНОЯРСКОГО КРАЯ",
      subtitle: "ПРИ ПРАВИТЕЛЬСТВЕ РОССИЙСКОЙ ФЕДЕРАЦИИ",
      short: "Представительство Красноярского края",
    },
    description: "Разработка интерактивной презентации",
    list: [],
    images: {
      main: KrPredstavitelstvoMain,
      photos: [KrPredstavitelstvo1, KrPredstavitelstvo2],
    },
  },
  {
    id: "krascvetmet",
    title: {
      main: "ВИРТУАЛЬНАЯ ЭКСКУРСИЯ ПО ПРОИЗВОДСТВУ",
      subtitle: "ДЛЯ КОМПАНИИ «КРАСЦВЕТМЕТ»",
      short: "VR-тур для компании «Красцветмет»",
    },
    description:
      "Виртуальная экскурсия дает возможность побывать на уникально производстве компании и погрузиться в рабочий процесс через фото и видео в формате 360°",
    list: [
      "Создание тура для очков виртуальной реальности",
      "Съемка видео в формате 360°",
      "Съемка фото в формате 360°",
      "Формирование карты экскурсии и интерактивов",
    ],
    images: {
      main: KrascvetmetMain,
      photos: [Krascvetmet1, Krascvetmet2, Krascvetmet3],
    },
  },
  {
    id: "kyzyl",
    title: {
      main: "МАКЕТ-ПРЕЗЕНТАЦИЯ",
      subtitle: "НОВОГО МИКРОРАЙОНА КЫЗЫЛА",
      short: "Макет микрорайона Кызыла",
    },
    description:
      "Совместная работа с макетной мастерской М3D позволила создать необычное визуальное решение для презентации проекта",
    list: ["Моушн-дизайн и видеографика", "Подбор и установка видеостен"],
    images: {
      main: KyzylMain,
      photos: [Kyzyl1],
    },
  },
  {
    id: "maykop",
    title: {
      main: "Майкоп",
      subtitle: "Городская среда",
      short: "2022",
    },
    description: "Проекты развития городской среды.",
    list: [],
    images: {
      main: MaykopMain,
      photos: [Maykop1, Maykop2, Maykop3, Maykop4, Maykop5],
    },
  },
  {
    id: "pmef",
    title: {
      main: "ИНТЕРАКТИВНАЯ ПРЕЗЕНТАЦИЯ",
      subtitle: "«ЕНИСЕЙСКАЯ СИБИРЬ» НА ПМЭФ-2023",
      short: "ПМЭФ-2023",
    },
    description: "Презентация инвестиционного потенциала.",
    list: [
      "Сенсорные панели с интерактивной презентацией",
      "VR-шлемы и панорамы Красноярска и края в формате 360°",
    ],
    images: {
      main: PmefMain,
      photos: [Pmef1, Pmef2, Pmef3, Pmef4, Pmef5, Pmef6, Pmef7],
    },
  },
  {
    id: "zhar_ptica",
    title: {
      main: "МОДЕРНИЗАЦИЯ",
      subtitle: "ДЕТСКОЙ БИБЛИОТЕКИ «ЖАР-ПТИЦА»",
      short: "Библиотека «Жар-птица»",
    },
    description:
      "В рамках модернизации детской библиотеки созданы информационные игровые пространства: погружение в мир сказок происходит при помощи современных технологий.",
    list: [
      "Подбор оборудования",
      "Создание визуальных материалов",
      "Реализация технического решения под ключ",
      "Разработка игр",
      "Создание локации с технологий нейросетей",
    ],
    images: {
      main: ZharPticaMain,
      photos: [
        ZharPtica1,
        ZharPtica2,
        ZharPtica3,
        ZharPtica4,
        ZharPtica5,
        ZharPtica6,
        ZharPtica7,
      ],
    },
  },
];
