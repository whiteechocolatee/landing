'use client';

import { useSlider } from '@/context/slider-context';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from './styles.module.scss';
import Image from 'next/image';

interface WhyUsSliderProps {
  slides: { img: string; title: string }[];
  spaceBetween?: number;
  slidesPerView?: number;
  loop?: boolean;
}

export const WhyUsSlider = ({
  slides,
  spaceBetween = 24,
  slidesPerView = 1,
  loop = true,
}: WhyUsSliderProps) => {
  const { swiperRef } = useSlider();

  return (
    <div className={styles.whyus__slider}>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        // modules={[Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation
        loop={loop}
        pagination={{ clickable: true }}>
        {slides.map((slide, index) => (
          <SwiperSlide
            className={styles.whyus__slider_slide}
            key={index}>
            <Image
              src={slide.img}
              alt={slide.title}
              width={60}
              height={60}
            />
            {slide.title}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
