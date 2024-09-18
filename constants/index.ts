export const companyNames = [
  'IDN Play',
  'GG Network',
  'PokerMaster',
  'Lianzhong',
  'PPPpoker',
];

export const navItems = [
  { href: '#functions', label: 'Features' },
  { href: '#dignities', label: 'Benefits' },
  { href: '#services', label: 'Services' },
  { href: '#faq', label: 'FAQ' },
];

export const servicesSlides = [
  {
    imageUrl: '/images/services/slider/slide_1.png',
    imageName: 'Slide 1',
    text: 'Selection of sites with the best conditions to maximize profits.',
  },
  {
    imageUrl: '/images/services/slider/slide_2.png',
    imageName: 'Slide 2',
    text: 'Selecting professional players with exceptional statistics that will generate revenue for you.',
  },
  {
    imageUrl: '/images/services/slider/slide_3.png',
    imageName: 'Slide 3',
    text: 'Ensuring transparency and timeliness of income payments to service users.',
  },
  {
    imageUrl: '/images/services/slider/slide_1.png',
    imageName: 'Slide 4',
    text: 'Rewarding active members who promote the platform, according to the referral program.',
  },
];

export const faqItems = [
  {
    question: 'Will I succeed?',
    answer:
      'If you are able to click a few buttons in your browser, you will earn thanks to our service. Even if you get confused at some stage, our support team will help you.',
  },
  {
    question: 'What types of income are there?',
    answer:
      'Deposit - passive weekly income as a percentage of the total deposit; Structural - income from users who activate deposit packages in your structure and are at levels below yours; Agency - for transferring funds to other users.',
  },
  {
    question: 'How and where is the income paid?',
    answer: 'Weekly to cryptocurrency wallets.',
  },
  {
    question: 'What is the amount you can start earning?',
    answer:
      'The minimum package, which will bring you passive income the very next day, costs 100 dollars.',
  },
  {
    question:
      'How do you find players who bring revenue to the service?',
    answer:
      "Technology does not stand still. We have colossal amounts of statistical data at our disposal and neural networks to process them. Each candidate is like a palm in the palm of our hand. Analyzing statistics for months and even years of a particular player's play allows us to select the best of the best.",
  },
  {
    question:
      'Where does the service get the funds from to pay users?',
    answer:
      'We invest in players that we have carefully analyzed and selected for the pool. We conclude contracts with them, under which they give us a part of their income for the use of our funds for their game. The service pays a part of this income to the participants.',
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
      'Partner limit: 5 levels',
      'Structural income: 2%',
      'Deposit income: 4.5%',
      'Agency income: 5%',
      'Validity period: 6 months',
    ],
    href: '/tariffs/1',
    type: TariffTypes.standard,
  },
  {
    name: 'Silver',
    price: 500,
    description: [
      'Partner limit: 6 levels',
      'Structural income: 2%',
      'Deposit income: 5%',
      'Agency income: 5%',
      'Validity period: 6 months',
    ],
    href: '/tariffs/2',
    type: TariffTypes.vip,
  },
  {
    name: 'Gold',
    price: 1500,
    description: [
      'Partner limit: 7 levels',
      'Structural income: 2%',
      'Deposit income: 5.5%',
      'Agency income: 5%',
      'Validity period: 6 months',
    ],
    href: '/tariffs/3',
    type: TariffTypes.prime,
  },
];

export const reviews = [
  {
    name: 'Nikolay',
    position: 'Novosibirsk',
    clientImg: '/images/prices/client_img.png',
    text: 'I learned about this service from a friend of mine. I am a truck driver, and I’m as far from online poker as a Kamaz is from a scooter. But the idea of earning a very decent passive income from those who cannot control their gambling really intrigued me. Extra half a paycheck doesn’t just lie on the road. It’s almost a month since I joined the project, and I am very satisfied.',
    readMore: 'https://google.com',
    socials: [
      //
      // Example of how to display social media
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
    name: 'Arthur',
    position: 'Blogger, crypto investor. Moscow',
    clientImg: '/images/prices/client_1.png',
    text: 'I’ve been earning money from online projects for over 8 years. Every corner is filled with crypto projects with their super-duper coins that are supposed to outdo Bitcoin. And all its holders will get rich in no time. No need to explain how that ends. Here, the main thing for me is that there’s a working business generating income and, therefore, something to pay out, unlike worthless coins.',
    readMore: 'https://google.com',
    socials: [],
  },
  {
    name: 'Dima',
    position: 'Online poker player. Bali',
    clientImg: '/images/prices/client_2.png',
    text: 'I’ve been in the poker scene for 13 years. I’ve long dreamed of playing on those sweet Asian tables, where beating fish is as easy as it was in the unforgettable 2010s. But for players from the post-Soviet space, the way there is closed. Thankfully, this method came along. I don’t even need to play, and the constant income flows in. Hats off to the team. Truly impressive!',
    readMore: 'https://google.com',
    socials: [],
  },
  {
    name: 'Kolyan',
    position: 'Chelyabinsk',
    clientImg: '/images/prices/client_3.png',
    text: 'The last few projects turned out to be pyramids. I lost almost all my money. Half a year in a bad situation. I thoroughly studied this project from all sides. It turned out to be very promising, and everything has just started. I began with almost my last hundred dollars. I didn’t even realize how I tripled it in just two weeks. There were many people under me, even though I didn’t tell anyone about the project. That’s because the marketing is structured so that I get income from every dollar invested after me. Well, it’s a personal decision for everyone, but I didn’t miss my chance.',
    readMore: 'https://google.com',
    socials: [],
  },
];

export const whyUsSlides = [
  {
    img: '/images/whyus/whyus_slider.png',
    title:
      'The platform is an interface that connects you with poker professionals who generate passive income for users of our service.',
  },
  {
    img: '/images/whyus/whyus_slider.png',
    title:
      'The success of the model is ensured by careful candidate selection based on the statistical analysis of their gameplay using neural networks.',
  },
  {
    img: '/images/whyus/whyus_slider.png',
    title:
      'Asia — the most passionate players with the most money.',
  },
];

export const dignityCardPluses = [
  'The platform connects a good player, a bad player, and you, as an intermediary who earns from it.',
  'You don’t need to understand poker yourself.',
  'You don’t have to be involved in the game. Income is generated without your direct participation.',
  'Guaranteed weekly income up to 6% per week.',
  'Referral rewards program for attracting new users.',
  'All risks are borne by the service, not by you.',
];

export const dignityCardMinuses = [
  'You will have to immerse yourself in learning poker on your own.',
  'Inevitable losses, ups, and downs.',
  'You won’t be able to access the “money” Asian sites filled with low-level players.',
  'To make at least some money from poker yourself, you’ll need to invest not only money but all the time you have.',
  'Your mental resilience will be severely tested.',
  'You are a lone fighter.',
];

export const stepsSlider = [
  {
    id: 1,
    label: 'Step 1',
    content: {
      img: '/images/steps/step_1.png',
      text: 'Registration',
    },
  },
  {
    id: 2,
    label: 'Step 2',
    content: {
      img: '/images/steps/step_1.png',
      text: 'Balance top-up',
    },
  },
  {
    id: 3,
    label: 'Step 3',
    content: {
      img: '/images/steps/step_1.png',
      text: 'Package selection',
    },
  },
  {
    id: 4,
    label: 'Step 4',
    content: {
      img: '/images/steps/step_1.png',
      text: 'Daily accruals',
    },
  },
  {
    id: 5,
    label: 'Step 5',
    content: {
      img: '/images/steps/step_1.png',
      text: 'Weekly income withdrawal',
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
    title: 'Address',
    content: 'Wanchai, Hong Kong',
  },
  {
    title: 'E-mail',
    content: 'contact@concordia-fp.com',
  },
];
