import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { TitleBadge } from '../title-badge/title-badge';
import { SliderProvider } from '@/context/slider-context';
import { WhyUsSlider } from '@/components/whyus/whyus-slider';
import { SliderNavigation } from '@/components/slider-nav/slider-nav';
import { whyUsSlides } from '@/constants';

export const WhyUs = () => {
  return (
    <SliderProvider>
      <section className={styles.whyus}>
        <div
          className={`${styles.whyus__wrapper} container`}>
          <div className={styles.whyus__slider}>
            <div className={styles.whyus__slider_title}>
              <h2
                className={styles.whyus__slider_title_nav}>
                <p>
                  Почему Мы <span>/</span>
                </p>
                <SliderNavigation />
              </h2>
              <p
                className={
                  styles.whyus__slider_title_subtitle
                }>
                Почему именно мы и наши услуги
              </p>
            </div>
            <WhyUsSlider slides={whyUsSlides} />
          </div>
          <div className={styles.whyus__form}>
            <div className={styles.whyus__img}>
              <Image
                src={'/images/whyus/why_us.png'}
                alt='whyus'
                width={700}
                height={380}
              />
            </div>
            <div className={styles.whyus__body}>
              <h3 className={styles.whyus__title}>
                <div className={styles.whyus__title_first}>
                  <TitleBadge
                    classNames={
                      styles.whyus__title_first_badge
                    }>
                    ответим
                  </TitleBadge>
                  На все
                </div>
                <div className={styles.whyus__title_second}>
                  <TitleBadge
                    classNames={
                      styles.whyus__title_second_badge
                    }>
                    <Image
                      src={
                        '/images/faq/faq_title_icons.png'
                      }
                      alt='title icons'
                      width={80}
                      height={34}
                    />
                  </TitleBadge>
                  Ваши вопросы
                </div>
              </h3>
              {/* // TODO: add form */}
            </div>
          </div>
        </div>
      </section>
    </SliderProvider>
  );
};
