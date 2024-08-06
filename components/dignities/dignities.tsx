import Image from 'next/image';
import { StepSlider } from '../steps-slider/steps-slider';
import { TitleBadge } from '../title-badge/title-badge';
import styles from './styles.module.scss';
import {
  dignityCardMinuses,
  dignityCardPluses,
} from '@/constants';

export const Dignities = () => {
  return (
    <section id='dignities' className={styles.dignities}>
      <div className={styles.dignities__wrapper}>
        <div
          className={`${styles.dignities__body} container`}>
          <div className={styles.dignities__title}>
            <h2 className={styles.dignities__title_text}>
              <div
                className={
                  styles.dignities__title_text_first
                }>
                <TitleBadge
                  classNames={
                    styles.dignities__title_first_badge
                  }>
                  <Image
                    src={
                      '/images/dignities/dignities_title.png'
                    }
                    alt='dignities'
                    width={88}
                    height={30}
                  />
                </TitleBadge>
                <p>
                  <span>-</span>Наши
                </p>
              </div>
              <div
                className={
                  styles.dignities__title_text_second
                }>
                <p>преимущества</p>
                <TitleBadge
                  classNames={
                    styles.dignities__title_second_badge
                  }>
                  <Image
                    src={'/images/faq/faq_player.png'}
                    alt='dignities'
                    width={32}
                    height={32}
                  />
                  Игрок
                </TitleBadge>
              </div>
            </h2>
            <p className={styles.dignities__title_subtitle}>
              Обзор ключевых возможностей и преимуществ,
              которые мы предлагаем
            </p>
          </div>
          <div className={styles.dignities__cards}>
            <div
              className={`${styles.dignities__card_pluses} ${styles.dignities__card}`}>
              <TitleBadge
                classNames={styles.dignities__card_badge}>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M13.4193 3.5L7.8776 9.04167L4.96094 6.125L0.585938 10.5'
                    stroke='#1F1D1C'
                    strokeWidth='0.7'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9.91406 3.5H13.4141V7'
                    stroke='#1F1D1C'
                    strokeWidth='0.7'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Работая с нами
              </TitleBadge>
              <div
                className={styles.dignities__card_content}>
                <ul className={styles.dignities__card_list}>
                  {dignityCardPluses.map((item, index) => (
                    <li
                      key={index}
                      className={
                        styles.dignities__card_list_item
                      }>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M20.6644 5.2526C21.0772 5.61952 21.1143 6.25159 20.7474 6.66437L10.0808 18.6644C9.89099 18.8779 9.61898 19 9.33334 19C9.04771 19 8.7757 18.8779 8.58593 18.6644L3.2526 12.6644C2.88568 12.2516 2.92286 11.6195 3.33565 11.2526C3.74843 10.8857 4.3805 10.9229 4.74742 11.3356L9.33334 16.4948L19.2526 5.33565C19.6195 4.92286 20.2516 4.88568 20.6644 5.2526Z'
                          fill='#CFE7CD'
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.dignities__card_icon}>
              <div
                className={
                  styles.dignities__card_icon_wrapper
                }>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M16.0013 22.6667C11.2148 22.6667 7.33464 18.7865 7.33464 14V6.07407C7.33464 5.38319 7.33464 5.03774 7.45956 4.76984C7.59204 4.48574 7.82038 4.2574 8.10448 4.12492C8.37238 4 8.71782 4 9.40871 4H22.5939C23.2848 4 23.6302 4 23.8981 4.12492C24.1822 4.2574 24.4106 4.48574 24.543 4.76984C24.668 5.03774 24.668 5.38319 24.668 6.07407V14C24.668 18.7865 20.7878 22.6667 16.0013 22.6667ZM16.0013 22.6667V28M22.668 28H9.33464M29.3346 6.66667V13.3333M2.66797 6.66667V13.3333'
                    stroke='#1F1D1C'
                    strokeWidth='1.33333'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
            <div
              className={`${styles.dignities__card_minuses} ${styles.dignities__card}`}>
              <TitleBadge
                classNames={styles.dignities__card_badge}>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M13.4193 3.5L7.8776 9.04167L4.96094 6.125L0.585938 10.5'
                    stroke='#1F1D1C'
                    strokeWidth='0.7'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9.91406 3.5H13.4141V7'
                    stroke='#1F1D1C'
                    strokeWidth='0.7'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Работая без нас
              </TitleBadge>
              <div
                className={styles.dignities__card_content}>
                <ul className={styles.dignities__card_list}>
                  {dignityCardMinuses.map((item, index) => (
                    <li
                      key={index}
                      className={
                        styles.dignities__card_list_item
                      }>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z'
                          fill='#FFC2CD'
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            id='services'
            className={styles.dignities__steps}>
            <StepSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
