export const companyNames = [
  'MergeWave',
  'Near',
  'Avrora',
  'PTN',
  'Investman',
  'Kaizen',
  'QP Digital',
  'MK',
  'Unicorn Battle',
  'Content Writing',
];

export const navItems = [
  { href: '#functions', label: 'Функции' },
  { href: '#dignities', label: 'Преимущества' },
  { href: '#services', label: 'Услуги' },
  { href: '#faq', label: 'FAQ' },
];

export const servicesSlides = [
  {
    imageUrl: '/images/services/slider/slide_1.png',
    imageName: 'Slide 1',
    text: 'Все пользователи проходят процедуру верификации. Гарантируем, что вы играете с реальными и надёжными людьми, снижая риск мошенничества.',
  },
  {
    imageUrl: '/images/services/slider/slide_2.png',
    imageName: 'Slide 2',
    text: 'Круглосуточная служба поддержки через чат, email и телефон. Быстрая помощь в решении любых вопросов, что создаёт ощущение заботы и надёжности.',
  },
  {
    imageUrl: '/images/services/slider/slide_3.png',
    imageName: 'Slide 3',
    text: 'Оставляйте отзывы и оценки после каждой игры. Позволяет Выбирайте надёжных партнёров, основываясь на опыте других пользователей.',
  },
  {
    imageUrl: '/images/services/slider/slide_1.png',
    imageName: 'Slide 4',
    text: 'Все пользователи проходят процедуру верификации. Гарантируем, что вы играете с реальными и надёжными людьми, снижая риск мошенничества.',
  },
  {
    imageUrl: '/images/services/slider/slide_2.png',
    imageName: 'Slide 5',
    text: 'Круглосуточная служба поддержки через чат, email и телефон. Быстрая помощь в решении любых вопросов, что создаёт ощущение заботы и надёжности.',
  },
  {
    imageUrl: '/images/services/slider/slide_3.png',
    imageName: 'Slide 6',
    text: 'Оставляйте отзывы и оценки после каждой игры. Позволяет Выбирайте надёжных партнёров, основываясь на опыте других пользователей.',
  },
];

export const faqItems = [
  {
    question:
      'Ullamcorper porttitor sit ut vestibulum faucibus consectetur at. Ullamcorper porttitor sit ut vestibulum faucibus consectetur',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Quis maecenas blandit amet praesent. Turpis enim ullamcorper et in id at. Lorem ipsum dolor sit amet consectetur. Quis maecenas blandit amet praesent.',
  },
  {
    question:
      'Ullamcorper porttitor sit ut vestibulum faucibus consectetur at. Ullamcorper porttitor sit ut vestibulum faucibus consectetur',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Quis maecenas blandit amet praesent. Turpis enim ullamcorper et in id at. Lorem ipsum dolor sit amet consectetur. Quis maecenas blandit amet praesent.',
  },
  {
    question:
      'Ullamcorper porttitor sit ut vestibulum faucibus consectetur at. Ullamcorper porttitor sit ut vestibulum faucibus consectetur',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Quis maecenas blandit amet praesent. Turpis enim ullamcorper et in id at. Lorem ipsum dolor sit amet consectetur. Quis maecenas blandit amet praesent.',
  },
  {
    question:
      'Ullamcorper porttitor sit ut vestibulum faucibus consectetur at. Ullamcorper porttitor sit ut vestibulum faucibus consectetur',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Quis maecenas blandit amet praesent. Turpis enim ullamcorper et in id at. Lorem ipsum dolor sit amet consectetur. Quis maecenas blandit amet praesent.',
  },
];

export enum TariffTypes {
  standard = 'standard',
  vip = 'vip',
  prime = 'prime',
}

export const tariffs = [
  {
    name: 'стандарт',
    price: 50,
    description: [
      'Accusamus et dicta minima ut quae.',
      'Accusamus et dicta minima ut quae.',
    ],
    href: '/tarrifs/1',
    type: TariffTypes.standard,
  },
  {
    name: 'VIP',
    price: 500,
    description: [
      'Accusamus et dicta minima ut quae.',
      'Accusamus et dicta minima ut quae.',
      'Accusamus et dicta minima ut quae.',
      'Accusamus et dicta minima ut quae.',
    ],
    href: '/tarrifs/2',
    type: TariffTypes.vip,
  },
  {
    name: 'PRIME',
    price: 5000,
    description: [
      'Accusamus et dicta minima ut quae.',
      'Accusamus et dicta minima ut quae.',
      'Accusamus et dicta minima ut quae.',
    ],
    href: '/tarrifs/3',
    type: TariffTypes.prime,
  },
];

export const reviews = [
  {
    name: 'андрей андреевич',
    position: 'CEO',
    clientImg: '/images/prices/client_img.png',
    text: 'Lorem ipsum dolor sit amet consectetur. Quis maecenas blandit amet praesent. Quis maecenas blandit amet praesent.',
    readMore: 'https://google.com',
    socials: [
      {
        socialSvg: `/images/prices/Vector.svg`,
        socialLink: 'https://google.com',
      },
      {
        socialSvg: `/images/prices/inst.svg`,
        socialLink: 'https://google.com',
      },
      {
        socialSvg: `/images/prices/chrome.svg`,
        socialLink: 'https://google.com',
      },
    ],
  },
  {
    name: 'андрей андреевич',
    position: 'CEO',
    clientImg: '/images/prices/client_img.png',
    text: 'Lorem ipsum dolor sit amet consectetur. Quis maecenas blandit amet praesent. Quis maecenas blandit amet praesent.',
    readMore: 'https://google.com',
    socials: [
      {
        socialSvg: `/images/prices/Vector.svg`,
        socialLink: 'https://google.com',
      },
      {
        socialSvg: `/images/prices/inst.svg`,
        socialLink: 'https://google.com',
      },
      {
        socialSvg: `/images/prices/chrome.svg`,
        socialLink: 'https://google.com',
      },
    ],
  },
  {
    name: 'андрей андреевич',
    position: 'CEO',
    clientImg: '/images/prices/client_img.png',
    text: 'Lorem ipsum dolor sit amet consectetur. Quis maecenas blandit amet praesent. Quis maecenas blandit amet praesent.',
    readMore: 'https://google.com',
    socials: [
      {
        socialSvg: `/images/prices/Vector.svg`,
        socialLink: 'https://google.com',
      },
      {
        socialSvg: `/images/prices/inst.svg`,
        socialLink: 'https://google.com',
      },
      {
        socialSvg: `/images/prices/chrome.svg`,
        socialLink: 'https://google.com',
      },
    ],
  },
];

export const whyUsSlides = [
  {
    img: '/images/whyus/whyus_slider.png',
    title:
      'Мы связываем вас с наибольшей базой проф игроков',
  },
  {
    img: '/images/whyus/whyus_slider.png',
    title:
      'Мы связываем вас с наибольшей базой проф игроков',
  },
  {
    img: '/images/whyus/whyus_slider.png',
    title:
      'Мы связываем вас с наибольшей базой проф игроков',
  },
];

export const dignityCardPluses = [
  'Широкий выбор игроков, играйте с людьми со всего мира в любое время.',
  'Лёгкий и быстрый поиск партнёров.',
  'Игра с равными по навыкам.',
  'Защита личных данных и конфиденциальность.',
  'Активное сообщество и круглосуточная помощь.',
];

export const dignityCardMinuses = [
  'Меньше возможностей найти партнёров для игры в удобное время.',
  'Вероятность встретить партнёров с неподходящим уровнем навыков.',
  'Трудно оценить надёжность и опыт других игроков.',
  'затягування випуску проєкту і набору висоти',
  'Меньше возможностей получить помощь и советы от сообщества и поддержки.',
];

export const stepsSlider = [
  {
    id: 1,
    label: 'Шаг 1',
    content: {
      img: '/images/steps/step_1.png',
      text: 'Заполни информацию 1',
    },
  },
  {
    id: 2,
    label: 'Шаг 2',
    content: {
      img: '/images/steps/step_1.png',
      text: 'Заполни информацию 2',
    },
  },
  {
    id: 3,
    label: 'Шаг 3',
    content: {
      img: '/images/steps/step_1.png',
      text: 'Заполни информацию 3',
    },
  },
  {
    id: 4,
    label: 'Шаг 4',
    content: {
      img: '/images/steps/step_1.png',
      text: 'Заполни информацию 4',
    },
  },
  {
    id: 5,
    label: 'Шаг 5',
    content: {
      img: '/images/steps/step_1.png',
      text: 'Заполни информацию 5',
    },
  },
];

export const pricesChips = [
  {
    label: 'chip',
    class: 'chip_1',
    img: '/images/prices/prices_1.png',
  },
  {
    label: 'chip',
    class: 'chip_2',
    img: '/images/prices/prices_2.png',
  },
  {
    label: 'chip',
    class: 'chip_3',
    img: '/images/prices/prices_3.png',
  },
  {
    label: 'chip',
    class: 'chip_4',
    img: '/images/prices/prices_4.png',
  },
  {
    label: 'chip',
    class: 'chip_5',
    img: '/images/prices/prices_5.png',
  },
];

export const footerInfo = [
  {
    title: 'Адрес',
    content: 'г. Киев, ул. Льва Толстого 16',
  },
  {
    title: 'Телефон',
    content: '+38 (099) 999-99-99',
  },
  {
    title: 'E-mail',
    content: 'Xxh2y@example.com',
  },
];
