'use client';

import { CustomButton } from '@/components/button/custom-button';
import { ReviewsSlider } from '@/components/prices/reviews-slider';
import { TitleBadge } from '@/components/title-badge/title-badge';

import {
  pricesChips,
  tariffs,
  TariffTypes,
} from '@/constants';
import {
  SliderProvider,
  useSlider,
} from '@/context/slider-context';

import styles from './styles.module.scss';
import Image from 'next/image';
import { SliderNavigation } from '../slider-nav/slider-nav';

export const Prices = () => {
  return (
    <SliderProvider>
      <section className={styles.prices}>
        <div className={styles.prices__wrapper}>
          <div className={`${styles.container} container`}>
            <h2 className={styles.prices__title}>
              Наши Услуги
            </h2>
            <p className={styles.prices__subtitle}>
              Расширьте возможности с нашими решениями
            </p>
            <div className={styles.prices__cards}>
              {pricesChips.map((chip) => (
                <div
                  className={`${styles.prices__chip} ${
                    styles[chip.class]
                  }`}>
                  <Image
                    src={chip.img}
                    alt={chip.label}
                    fill
                  />
                </div>
              ))}
              {tariffs.map((tariff) => {
                return (
                  <PriceCard
                    key={tariff.price}
                    {...tariff}
                  />
                );
              })}
            </div>
            <div className={styles.prices__reviews}>
              <h3 className={styles.prices__reviews_title}>
                <div
                  className={
                    styles.prices__reviews_title_first
                  }>
                  <span>Реальные</span>
                  <TitleBadge
                    classNames={
                      styles.prices__reviews_title_badge
                    }>
                    Реальные отзывы
                  </TitleBadge>
                </div>
                <div
                  className={
                    styles.prices__reviews_title_second
                  }>
                  <span>клиенты</span>
                  <SliderNavigation />
                </div>
              </h3>
              <div
                className={styles.prices__reviews_slider}>
                <h3
                  className={
                    styles.prices__reviews_all_reviews
                  }>
                  Все отзывы
                  <Image
                    className={
                      styles.prices__reviews_all_reviews_img
                    }
                    src='/images/prices/price_mouse.png'
                    alt='mouse'
                    loading='lazy'
                    width={36}
                    height={36}
                  />
                </h3>
                <div
                  className={
                    styles.prices__reviews_wrapper
                  }>
                  <ReviewsSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SliderProvider>
  );
};

type PriceCardProps = {
  name: string;
  price: number;
  description: string[];
  href: string;
  type: TariffTypes;
};

const PriceCard = ({
  name,
  price,
  description,
  href,
  type,
}: PriceCardProps) => (
  <div
    className={`${styles.prices__card} ${
      type === 'prime' ? styles.prices__card_prime : ''
    }`}>
    <div className={styles.prices__card_body}>
      <h3 className={styles.prices__card_title}>{name}</h3>
      <p className={styles.prices__card_price}>
        <span>${price}</span>/мес
      </p>
      <ul className={styles.prices__card_list}>
        {description.map((item, index) => (
          <li
            key={index}
            className={styles.prices__card_item}>
            <span
              className={styles.prices__card_icon_wrapper}>
              {(type === TariffTypes.vip ||
                type === TariffTypes.prime) &&
              index === 0 ? (
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M4.569 3.90364C4.43885 3.77348 4.22782 3.77348 4.09767 3.90364L0 8.0013L4.09767 12.099C4.22782 12.2291 4.43885 12.2291 4.569 12.099C4.69916 11.9688 4.69916 11.7578 4.569 11.6276L1.276 8.33464H15.6667C15.8508 8.33464 16 8.1854 16 8.0013C16 7.81721 15.8508 7.66797 15.6667 7.66797H1.276L4.569 4.37497C4.69916 4.24481 4.69916 4.03379 4.569 3.90364Z'
                    fill='#1F1D1C'
                  />
                </svg>
              ) : (
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M13.3346 4L6.0013 11.3333L2.66797 8'
                    stroke='#1F1D1C'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              )}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <CustomButton
      classNames={styles.prices__card_button}
      href={href}
      style='primary'>
      выбрать тариф
    </CustomButton>
  </div>
);
