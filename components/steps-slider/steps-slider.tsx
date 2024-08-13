'use client';

import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './styles.module.scss';
import { stepsSlider } from '@/constants';
import Image from 'next/image';

export const StepSlider = () => {
  const [activeStep, setActiveStep] = useState(0);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const steps = document.querySelectorAll(
      `.${styles.step}`,
    );
    steps.forEach((step, index) => {
      const line = step.querySelector(
        `.${styles.stepLine}`,
      ) as HTMLElement;
      if (line) {
        if (index < activeStep) {
          line.style.width = '100%';
        } else {
          line.style.width = '0%';
        }
      }
    });

    if (activeStep > 0) {
      const prevStepLine = steps[
        activeStep - 1
      ].querySelector(`.${styles.stepLine}`) as HTMLElement;
      if (prevStepLine) {
        prevStepLine.style.width = '100%';
      }
      setTimeout(() => {
        const currentStepLine = steps[
          activeStep
        ].querySelector(
          `.${styles.stepLine}`,
        ) as HTMLElement;
        if (currentStepLine) {
          currentStepLine.style.width = '50%';
        }
      }, 300);
    } else {
      const currentStepLine = steps[
        activeStep
      ].querySelector(`.${styles.stepLine}`) as HTMLElement;
      if (currentStepLine) {
        currentStepLine.style.width = '50%';
      }
    }
  }, [activeStep]);

  return (
    <div className={styles.stepslider}>
      <div className={styles.steps_title}>
        <h2 className={styles.steps_title_text}>
          <p>Воспользуйтесь</p>
          <div className={styles.steps_title_icons}>
            <span>
              <svg
                width='17'
                height='17'
                viewBox='0 0 17 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M2.83203 10.625H14.1654'
                  stroke='#1F1D1C'
                  strokeWidth='0.944444'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M2.83203 6.375H14.1654'
                  stroke='#1F1D1C'
                  strokeWidth='0.944444'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M11.3346 2.125L9.91797 14.875'
                  stroke='#1F1D1C'
                  strokeWidth='0.944444'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M7.08464 2.125L5.66797 14.875'
                  stroke='#1F1D1C'
                  strokeWidth='0.944444'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </span>
            <span>
              <svg
                width='17'
                height='17'
                viewBox='0 0 17 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.7623 3.26573C14.4005 2.90378 13.971 2.61665 13.4982 2.42075C13.0254 2.22485 12.5187 2.12402 12.0069 2.12402C11.4951 2.12402 10.9884 2.22485 10.5156 2.42075C10.0428 2.61665 9.61327 2.90378 9.25149 3.26573L8.50065 4.01657L7.74982 3.26573C7.01904 2.53495 6.02789 2.1244 4.9944 2.1244C3.96092 2.1244 2.96977 2.53495 2.23899 3.26573C1.50821 3.99652 1.09766 4.98767 1.09766 6.02115C1.09766 7.05463 1.50821 8.04578 2.23899 8.77657L2.98982 9.5274L8.50065 15.0382L14.0115 9.5274L14.7623 8.77657C15.1243 8.41478 15.4114 7.98523 15.6073 7.51244C15.8032 7.03966 15.904 6.53291 15.904 6.02115C15.904 5.50939 15.8032 5.00264 15.6073 4.52986C15.4114 4.05707 15.1243 3.62752 14.7623 3.26573V3.26573Z'
                  stroke='#1F1D1C'
                  strokeWidth='0.944444'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </span>
          </div>
          <p>Услугами</p>
          <p>легко</p>
          <p className={styles.steps_title_text_subtitle}>
            доход уже в первые 24 часа
          </p>
        </h2>
      </div>
      <div className={`${styles.steps_wrapper} container`}>
        <button
          className={styles.navigationButton}
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={activeStep === 0}>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M5.41667 4.58325L0 9.99992L5.41667 15.4166L6.00583 14.8274L1.595 10.4166H20V9.58325H1.595L6.00583 5.17242L5.41667 4.58325Z'
              fill='#1F1D1C'
            />
          </svg>
        </button>
        <div className={styles.steps}>
          {stepsSlider.map((step, index) => (
            <div
              key={step.id}
              className={`${styles.step} ${
                activeStep >= index ? styles.active : ''
              }`}>
              <div className={styles.stepCircle}>
                <div className={styles.stepCircleInner} />
              </div>
              <div className={styles.stepLabel}>
                {step.label}
              </div>
              {index !== stepsSlider.length - 1 && (
                <div className={styles.stepLine}></div>
              )}
            </div>
          ))}
        </div>
        <button
          className={styles.navigationButton}
          onClick={() => swiperRef.current?.slideNext()}
          disabled={activeStep === stepsSlider.length - 1}>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.5833 15.4167L20 10L14.5833 4.58333L13.9942 5.1725L18.405 9.58333L0 9.58333V10.4167L18.405 10.4167L13.9942 14.8275L14.5833 15.4167Z'
              fill='#1F1D1C'
            />
          </svg>
        </button>
      </div>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) =>
          setActiveStep(swiper.activeIndex)
        }
        className={styles.swiperContainer}
        onSwiper={(swiper) => (swiperRef.current = swiper)}>
        {stepsSlider.map((step) => (
          <SwiperSlide
            key={step.id}
            className={styles.slide}>
            <div className={styles.stepContent}>
              <p>{step.content.text}</p>
              <Image
                src={step.content.img}
                alt={step.content.text}
                width={422}
                height={231}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
