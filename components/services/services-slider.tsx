'use client';

import { servicesSlides } from '@/constants';
import { useSlider } from '@/context/slider-context';
import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderNavigation } from '../slider-nav/slider-nav';
import styles from './styles.module.scss';

export const ServicesSlider = () => {
  const { swiperRef } = useSlider();

  return (
    <div className={styles.services__slider}>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={24}
        slidesPerView={3}
        navigation
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}>
        {servicesSlides.map((slide) => (
          <SwiperSlide
            key={slide.imageName}
            className={styles.services__card}>
            <div
              className={styles.services__card_img_wrapper}>
              <Image
                loading='lazy'
                className={styles.services__card_img}
                src={slide.imageUrl}
                alt={slide.imageName}
                width={72}
                height={72}
              />
            </div>
            <p className={styles.services__card_text}>
              {slide.text}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.services__slider_buttons}>
        <SliderNavigation
          className={styles.services__slider_navigation}
        />
      </div>
    </div>
  );
};
