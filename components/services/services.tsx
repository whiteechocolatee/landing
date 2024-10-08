import { CustomButton } from '@/components/button/custom-button';
import { SliderProvider } from '@/context/slider-context';
import Image from 'next/image';
import { ServicesSlider } from './services-slider';
import styles from './styles.module.scss';

const servicesBadges = [
  {
    text: '100,000+ players',
    style: styles.services__badge_first,
  },
  {
    text: '1000+ participants',
    style: styles.services__badge_second,
  },
  {
    text: '20 million $ turnover',
    style: styles.services__badge_third,
  },
];

type BadgeProps = {
  text: string;
  style?: string;
};

const Badge = ({ text, style }: BadgeProps) => (
  <span className={`${styles.services__badge} ${style}`}>
    {text}
  </span>
);

export const Services = () => {
  return (
    <SliderProvider>
      <section id='functions' className={styles.services}>
        <div className={styles.services__wrapper}>
          <div className={`${styles.container} container`}>
            <div className={styles.services__title}>
              <h2 className={styles.services__title_text}>
                <span>Functions</span>
                <span>of Our Service</span>
              </h2>
              <p
                className={
                  styles.services__title_description
                }>
                Concordia-FP is a service that allows you to
                to make money at online poker without
                playing poker.
              </p>
            </div>
            <div className={styles.services__img}>
              <Image
                src='/images/services/card_bg.png'
                alt='cards'
                width={321}
                height={325}
              />
            </div>
            <div className={styles.services__cards}>
              <ServicesSlider />
            </div>
            <div className={styles.services__action}>
              {servicesBadges.map((badge, index) => (
                <Badge
                  key={index}
                  text={badge.text}
                  style={badge.style}
                />
              ))}
              <CustomButton
                classNames={styles.services__button}
                style='primary'
                href='/sign-up'>
                Choose a tariff
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </SliderProvider>
  );
};
