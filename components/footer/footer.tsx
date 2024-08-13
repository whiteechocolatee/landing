import Link from 'next/link';
import styles from './styles.module.scss';
import { footerInfo, navItems } from '@/constants';
import { Logo } from '../header/header';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div
        className={`${styles.footer__wrapper} container`}>
        <div className={styles.footer__first}>
          <Logo />
          <nav className={styles.footer__nav}>
            <ul className={styles.footer__list}>
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className={styles.footer__item}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <a
                href='https://t.me/concordiafp'
                target='_blank'>
                <svg
                  width='30'
                  height='23'
                  viewBox='0 0 30 23'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M29.002 2.46938L24.3066 20.6944C23.8814 22.3446 21.963 23.008 20.6032 22.1667C19.4898 21.4778 17.174 20.1174 12.6306 17.6751C11.7269 17.1893 11.4031 15.9234 12.1786 15.0668L14.4414 12.5673L10.7307 14.6006C9.53324 15.2568 8.05258 15.639 6.52403 15.3199C4.44936 14.8867 2.5015 14.11 1.91352 13.8655C0.43335 13.2501 0.634978 11.2898 1.925 10.7625L26.8364 0.579753C28.0604 0.0794338 29.3321 1.1883 29.002 2.46938ZM2.53039 12.2436C2.46496 12.2703 2.46249 12.361 2.52776 12.3881C3.08675 12.6205 4.92478 13.3515 6.85103 13.7536C7.91618 13.976 9.0076 13.7204 9.96184 13.1975L20.7524 7.28469C20.9897 7.15466 21.2273 7.45563 21.0456 7.65624L13.3648 16.1406C13.3299 16.1791 13.3424 16.2412 13.3882 16.2658C17.947 18.7164 20.2935 20.0936 21.445 20.806C21.9323 21.1075 22.6142 20.8502 22.7572 20.2953L27.4526 2.0702C27.4542 2.06383 27.4479 2.05831 27.4418 2.0608L2.53039 12.2436Z'
                    fill='#1F1D1C'
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footer__second}>
          {/* TODO: add form */}
          <div className={styles.footer__info}>
            {footerInfo.map((item, index) => (
              <div
                key={index}
                className={styles.footer__item}>
                <p>{item.title}:</p>
                <a href='#'>{item.content}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
