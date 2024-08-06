'use client';

import { useSlider } from '@/context/slider-context';
import styles from './styles.module.scss';

type SliderNavProps = {
  className?: string;
};

export const SliderNavigation = ({
  className,
}: SliderNavProps) => {
  const { slideNext, slidePrev } = useSlider();

  return (
    <div
      className={`${styles.slider_navigation} ${className}`}>
      <button
        className={styles.slider_navigation_prev}
        onClick={slidePrev}>
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
      <button
        className={styles.slider_navigation_next}
        onClick={slideNext}>
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
  );
};
