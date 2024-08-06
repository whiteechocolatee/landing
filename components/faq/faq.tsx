'use client';

import { faqItems } from '@/constants';

import Image from 'next/image';
import { useState } from 'react';

import styles from './styles.module.scss';

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<
    number | null
  >(null);

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id='faq' className={styles.faq}>
      <div className={`${styles.faq__wrapper} container`}>
        <div className={styles.faq__body}>
          {faqItems.map((item, index) => (
            <FaqCard
              question={item.question}
              answer={item.answer}
              index={index + 1}
              key={index}
              isActive={activeIndex === index}
              onClick={() => toggleCard(index)}
            />
          ))}
        </div>
        <div className={styles.faq__form}>
          <div className={styles.faq__right}>
            <Image
              className={styles.faq__dice}
              src='/images/faq/faq_dice.png'
              alt='faq'
              width={99}
              height={88}
            />
            <div className={styles.faq__title}>
              <h2 className={styles.faq__title_first}>
                <span>Частые</span>
                <div className={styles.faq__title_player}>
                  <Image
                    src='/images/faq/faq_player.png'
                    alt='player'
                    width={32}
                    height={32}
                  />
                  <div
                    className={
                      styles.faq__title_player_info
                    }>
                    <div
                      className={
                        styles.faq__title_player_name
                      }>
                      Игрок
                    </div>
                    <div
                      className={
                        styles.faq__title_player_price
                      }>
                      +50 000$
                    </div>
                  </div>
                </div>
              </h2>
              <h2 className={styles.faq__title_second}>
                <Image
                  src='/images/faq/faq_title_icons.png'
                  alt='question'
                  width={80}
                  height={24}
                />
                <span>Вопросы</span>
              </h2>
            </div>
          </div>
          <div className={styles.faq__title_wrapper}>
            {/* TODO: add form */}
          </div>
        </div>
      </div>
    </section>
  );
};

type FaqCardProps = {
  index: number;
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
};

const FaqCard = ({
  index,
  question,
  answer,
  isActive,
  onClick,
}: FaqCardProps) => (
  <div
    className={`${styles.faq__card} ${
      isActive ? styles.active : ''
    }`}
    onClick={onClick}
    style={{ cursor: 'pointer' }}>
    <div className={styles.faq__card_title}>
      <span className={styles.faq__card_number}>
        {index}
      </span>
      <div className={styles.faq__card_arrow}>
        <Image
          src='/images/services/slider/thin_big_right.svg'
          alt='arrow'
          width={20}
          height={20}
          className={isActive ? styles.rotated : ''}
        />
      </div>
    </div>
    <div className={styles.faq__card_text}>
      {!isActive ? (
        <p className={styles.faq__card_question}>
          {question}
        </p>
      ) : (
        <p className={styles.faq__card_answer}>{answer}</p>
      )}
    </div>
  </div>
);
