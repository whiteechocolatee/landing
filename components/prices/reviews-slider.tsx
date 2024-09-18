'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useSlider } from '@/context/slider-context';

import { reviews } from '@/constants';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './styles.module.scss';

export const ReviewsSlider = () => {
  const { swiperRef } = useSlider();

  return (
    <div className={styles.prices__slider}>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={24}
        slidesPerView={2}
        navigation
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        pagination={{ clickable: true }}>
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className={styles.prices__reviews_card}>
            <div
              className={styles.prices__reviews_card_title}>
              <div
                className={
                  styles.prices__reviews_card_title_info
                }>
                <Image
                  src={review.clientImg}
                  alt={review.name}
                  width={52}
                  height={52}
                />
                <h4
                  className={
                    styles.prices__reviews_card_title_name
                  }>
                  {review.name}
                  <span>{review.position}</span>
                </h4>
              </div>
              {/* Если будут необходимы ссылки на ревью */}
              {/* <div
                className={
                  styles.prices__reviews_card_title_socials
                }>
                {review.socials &&
                  review.socials.map((social, index) => {
                    return (
                      social && (
                        <a
                          href={social.socialLink}
                          key={index}
                          className={
                            styles.prices__reviews_card_title_social
                          }>
                          <Image
                            src={social.socialSvg}
                            alt={`${review.name}'s ${social.socialName} profile`}
                            width={16}
                            height={16}
                          />
                        </a>
                      )
                    );
                  })}
              </div> */}
            </div>
            <div
              className={
                styles.prices__reviews_card_review
              }>
              {review.text}
            </div>
            <div
              className={styles.prices__reviews_card_more}>
              <a
                href={review.readMore}
                className={
                  styles.prices__reviews_more_link
                }>
                read more
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
