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
    text: 'Подбор площадок с лучшими условиями для максимизации прибыли.',
  },
  {
    imageUrl: '/images/services/slider/slide_2.png',
    imageName: 'Slide 2',
    text: 'Отбор профессиональных игроков, имеющих исключительные статистические данные, которые будут приносить вам доход.',
  },
  {
    imageUrl: '/images/services/slider/slide_3.png',
    imageName: 'Slide 3',
    text: 'Обеспечение прозрачности и своевременности выплат доходов пользователям сервиса.',
  },
  {
    imageUrl: '/images/services/slider/slide_1.png',
    imageName: 'Slide 4',
    text: 'Вознаграждение активных участников, способствующих продвижению платформы, согласно реферальной программы.',
  },
];

export const faqItems = [
  {
    question: 'Получится ли у меня?',
    answer:
      'Если вы способны нажать несколько кнопок в браузере, то вы будете зарабатывать благодаря нашему сервису. Даже, если на каком-то этапе вы запутаетесь, наша служба поддержки вам поможет.',
  },
  {
    question: 'Какие есть виды доходов?',
    answer:
      'Депозитный - пассивный еженедельный доход в виде процентов от общего депозита;\n\nСтруктурный - доход от пользователей, которые активируют депозитные пакеты в Вашей структуре и находятся на уровнях ниже Вашего;\n\nАгентский - за переводы средств другим пользователям.',
  },
  {
    question: 'Как и куда выплачивается доход?',
    answer: 'Еженедельно на криптокошельки.',
  },
  {
    question:
      'Какова сумма, с которой можно начать зарабатывать?',
    answer:
      'Минимальный пакет, который уже на следующий день будет приносить вам пассивный доход, стоит 100 долларов.',
  },
  {
    question:
      'Как вы находите игроков, которые приносят доход сервису?',
    answer:
      'Технологии не стоят на месте. В нашем распоряжении колоссальные объемы статистических данных и нейросети для их обработки. Каждый кандидат для нас, как на ладони. Анализ статистики за месяцы и даже годы игры конкретного игрока, позволяет отбирать лучших из лучших.',
  },
  {
    question:
      'Откуда сервис берет средства для выплат пользователям?',
    answer:
      'Мы инвестируем в тех игроков, которых тщательно проанализировали и отобрали в пул. Мы заключаем с ними контракты, по которым они за пользование нашими средствами для своей игры, отдают нам часть своего дохода. Часть из этого дохода сервис выплачивает участникам.',
  },
];

export enum TariffTypes {
  standard = 'standard',
  vip = 'vip',
  prime = 'prime',
}

export const tariffs = [
  {
    name: 'Bronze',
    price: 100,
    description: [
      'Лимит партнеров: 5 уровней',
      'Структурный доход: 2%',
      'Депозитный доход: 4.5%',
      'Агентский доход: 5%',
      'Срок действия: 6 месяцев',
    ],
    href: '/tarrifs/1',
    type: TariffTypes.standard,
  },
  {
    name: 'Silver',
    price: 500,
    description: [
      'Лимит партнеров: 6 уровней',
      'Структурный доход: 2%',
      'Депозитный доход: 5%',
      'Агентский доход: 5%',
      'Срок действия: 6 месяцев',
    ],
    href: '/tarrifs/2',
    type: TariffTypes.vip,
  },
  {
    name: 'Gold',
    price: 1500,
    description: [
      'Лимит партнеров: 7 уровней',
      'Структурный доход: 2%',
      'Депозитный доход: 5.5%',
      'Агентский доход: 5%',
      'Срок действия: 6 месяцев',
    ],
    href: '/tarrifs/3',
    type: TariffTypes.prime,
  },
];

export const reviews = [
  {
    name: 'Николай',
    position: 'Новосибирск',
    clientImg: '/images/prices/client_img.png',
    text: 'Узнал об этом сервисе от своего знакомого. Я сам дальнобойщик и от онлайн покера далек так же, как Камаз от самоката. Но вот идея получать очень приличный пассивный доход за счет тех, кто не в состоянии контролировать свой азарт, меня очень заинтересовала. Дополнительные ползарплаты на дороге не валяются. Уже скоро месяц, как я в проекте. Очень доволен.',
    readMore: 'https://google.com',
    socials: [
      //
      // Пример как выводить соц сети
      //
      // {
      //   socialSvg: `/images/prices/Vector.svg`,
      //   socialLink: 'https://google.com',
      // },
      // {
      //   socialSvg: `/images/prices/Vector.svg`,
      //   socialLink: 'https://google.com',
      // },
      // {
      //   socialSvg: `/images/prices/Vector.svg`,
      //   socialLink: 'https://google.com',
      // },
    ],
  },
  {
    name: 'Артур',
    position: 'Блогер, криптоинвестор. Москва',
    clientImg: '/images/prices/client_1.png',
    text: 'Я зарабатываю на онлайн проектах уже более 8 лет. Из каждой щели лезут крипто-проекты со своей супер-гипер-пупер монетой, которая вот-вот поставит раком биткоин. И все ее держатели озолотятся в кратчайшие сроки. Чем это заканчивается объяснять не нужно. Здесь же для меня главное, что есть рабочий бизнес, приносящий доход и, соответственно, есть чем выплачивать в отличие от монеток-пустышек.',
    readMore: 'https://google.com',
    socials: [],
  },
  {
    name: 'Дима',
    position: 'Игрок в онлайн покер. Бали',
    clientImg: '/images/prices/client_2.png',
    text: 'Я сам в теме покера уже 13 лет. Как же я давно мечтаю попасть на эти сладкие азиатские поля, где обыгрывать фишей можно как в незабываемые 2010-е. Но для игроков с постсоветского пространства туда закрыта дорога. Благо нашелся этот способ. Мне даже играть не нужно, а постоянный доход идет. Снимаю шляпу перед командой. Просто красавцы!',
    readMore: 'https://google.com',
    socials: [],
  },
  {
    name: 'Колян',
    position: 'Челяба',
    clientImg: '/images/prices/client_3.png',
    text: 'Последние пару проектов оказались пирамидами. Слил почти все деньги. Полгода в заднице. Этот проект уже изучал дотошно и со всех сторон. Оказалось очень перспективно, плюс всё только-только запустилось. Начал практически с последних ста долларов. Я даже сам не понял, как всего за две недели их утроил. Подо мной оказалось много людей, хотя сам я никому о проекте не говорил. Всё потому что маркетинг устроен так, что мне “капает” доход с каждого доллара, который проинвестировали люди после меня. Короче, тут личное дело каждого, но я свой шанс не упустил.',
    readMore: 'https://google.com',
    socials: [],
  },
];

export const whyUsSlides = [
  {
    img: '/images/whyus/whyus_slider.png',
    title:
      'Платформа является надстройкой, соединяющей вас с покерными профессионалами, которые приносят пассивный доход пользователям нашего сервиса.',
  },
  {
    img: '/images/whyus/whyus_slider.png',
    title:
      'Успешность модели обеспечена тщательным подбором кандидатов на основе анализа статистических данных их игры нейросетями. ',
  },
  {
    img: '/images/whyus/whyus_slider.png',
    title:
      'Азия — самые азартные игроки с самыми большими деньгами.',
  },
];

export const dignityCardPluses = [
  'Платформа соединяет хорошего игрока, плохого игрока и вас, как посредника, который на этом зарабатывает.',
  'Не нужно самому разбираться в покере.',
  'Вам не приходится соприкасаться с игрой. Доход генерируется без вашего непосредственного участия.',
  'Гарантированный еженедельный доход до 6% в неделю.',
  'Реферальная программа вознаграждений за привлечение новых пользователей.',
  'Все риски ложатся на сервис, а не на вас.',
];

export const dignityCardMinuses = [
  'Вам придется погрузиться в изучение покера самостоятельно.',
  'Неизбежные проигрыши, взлеты и падения.',
  'Вы не сможете попасть на "денежные" азиатские площадки, изобилующие игроками низкого уровня.',
  'Чтобы хоть как-то зарабатывать в покере самому, вам нужно будет инвестировать туда не только деньги, но и всё имеющееся у вас время.',
  'Ваша психика подвергнется чудовищным испытаниям на стрессоустойчивость.',
  'Вы - один в поле воин.',
];

export const stepsSlider = [
  {
    id: 1,
    label: 'Шаг 1',
    content: {
      img: '/images/steps/step_1.png',
      text: 'Регистрация',
    },
  },
  {
    id: 2,
    label: 'Шаг 2',
    content: {
      img: '/images/steps/step_1.png',
      text: 'Пополнение баланса',
    },
  },
  {
    id: 3,
    label: 'Шаг 3',
    content: {
      img: '/images/steps/step_1.png',
      text: 'Выбор пакета',
    },
  },
  {
    id: 4,
    label: 'Шаг 4',
    content: {
      img: '/images/steps/step_1.png',
      text: 'Ежедневные начисления',
    },
  },
  {
    id: 5,
    label: 'Шаг 5',
    content: {
      img: '/images/steps/step_1.png',
      text: 'Еженедельный вывод дохода',
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
    content: 'Wanchai, Hong Kong',
  },
  {
    title: 'E-mail',
    content: 'contact@concordia-fp.com',
  },
];
