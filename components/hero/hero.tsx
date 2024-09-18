import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { CustomButton } from '@/components/button/custom-button';
import { companyNames } from '@/constants';

import styles from './styles.module.scss';

import clientsImg from '../../public/images/hero/hero_clients.png';
import leftImg from '../../public/images/hero/hero_left_img.png';
import rightImg from '../../public/images/hero/hero_right_img.png';
import { TitleBadge } from '../title-badge/title-badge';

export const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.container}>
      <div className={styles.hero__description}>
        <h2 className={styles.hero__title}>
          Making Dreams Come True{' '}
          <span className={styles.hero__title_divider}>
            -
          </span>{' '}
          <TitleBadge classNames={styles.hero__title_badge}>
            play to earn
          </TitleBadge>
          <p className={styles.hero__title_second}>
            Supporting the start of work
          </p>
        </h2>
        <h4 className={styles.hero__subtitle}>
          Risks minimized, potential maximized
        </h4>
        <div className={styles.hero__clients}>
          <Image
            src={clientsImg}
            alt='clients'
            width={122}
            height={48}
            priority
          />
          <p className={styles.hero__clients_text}>
            1000+ participants
          </p>
        </div>
        <div className={styles.hero__call_to_action}>
          <CustomButton
            classNames={styles.hero__button}
            style='primary'
            href='/sign-up'>
            Try it for free
          </CustomButton>
          <div className={styles.hero__divider} />
          <p className={styles.hero__text}>
            Professionals play, and you earn.
          </p>
        </div>
      </div>
      <ImageContainer
        src={leftImg}
        alt='hero'
        className={styles.hero__image_left}
      />
      <ImageContainer
        src={rightImg}
        alt='hero'
        className={styles.hero__image_right}
      />
    </div>
    <CompaniesList companyNames={companyNames} />
  </section>
);

interface ImageContainerProps {
  src: StaticImageData;
  alt: string;
  className: string;
}

const ImageContainer = ({
  src,
  alt,
  className,
}: ImageContainerProps) => (
  <div className={`${className} ${styles.hero__image}`}>
    <Image
      src={src}
      alt={alt}
      width={393}
      height={386}
      loading='lazy'
    />
  </div>
);

interface CompaniesListProps {
  companyNames: string[];
}

const CompaniesList = ({
  companyNames,
}: CompaniesListProps) => (
  <div className={styles.hero__companies}>
    {companyNames.map((company, index) => (
      <React.Fragment key={company}>
        <span>{company}</span>
        {index < companyNames.length - 1 && (
          <span> / </span>
        )}
      </React.Fragment>
    ))}
  </div>
);
