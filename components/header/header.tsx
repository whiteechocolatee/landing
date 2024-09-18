'use client';

import { navItems } from '@/constants';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CustomButton } from '../button/custom-button';
import styles from './styles.module.scss';
import Image from 'next/image';

interface NavItemProps {
  href: string;
  label: string;
}

interface BurgerButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] =
    useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div
        className={`${styles.header__container} container`}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Link
          className={styles.header__mobile_auth}
          href='/auth/sign-in'>
          <svg
            width='34'
            height='34'
            viewBox='0 0 34 34'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M17.0004 33.6667C26.2052 33.6667 33.6671 26.2048 33.6671 17C33.6671 7.79529 26.2052 0.333374 17.0004 0.333374C8.13144 0.333374 0.880444 7.26087 0.363281 16H17.9196L11.2933 9.37381L10.5862 8.66671L12.0004 7.25249L12.7076 7.9596L21.0409 16.2929C21.4314 16.6835 21.4314 17.3166 21.0409 17.7071L12.7076 26.0405L12.0004 26.7476L10.5862 25.3334L11.2933 24.6263L17.9196 18H0.363281C0.880445 26.7392 8.13144 33.6667 17.0004 33.6667Z'
              fill='#4853F0'
            />
          </svg>
        </Link>
        <BurgerButton
          onClick={toggleMenu}
          isOpen={isMenuOpen}
        />
        <Navigation
          isOpen={isMenuOpen}
          onClose={closeMenu}
        />
        <HeaderButtons />
      </div>
    </header>
  );
};

const Navigation: React.FC<NavigationProps> = ({
  isOpen,
  onClose,
}) => (
  <nav
    className={`${styles.header__navigation} ${
      isOpen ? styles.header__navigation_open : ''
    }`}>
    <ul className={styles.header__list}>
      {navItems.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          label={item.label}
          onClick={onClose}
        />
      ))}
    </ul>
  </nav>
);

const NavItem: React.FC<
  NavItemProps & { onClick: () => void }
> = ({ href, label, onClick }) => (
  <li className={styles.header__item} onClick={onClick}>
    <Link href={href}>{label}</Link>
  </li>
);

const HeaderButtons: React.FC = () => (
  <div className={styles.header__buttons}>
    <CustomButton style='transparent' href='/sign-up'>
      Sign Up
    </CustomButton>
    <CustomButton style='primary' href='/sign-in'>
      Sign In
    </CustomButton>
  </div>
);

export const Logo: React.FC = () => {
  return (
    <Link href='/'>
      <Image
        src={'/images/logoBlue.svg'}
        width={200}
        height={50}
        alt='logo'
      />
    </Link>
  );
};

const BurgerButton: React.FC<BurgerButtonProps> = ({
  onClick,
  isOpen,
}) => (
  <button className={styles.burger} onClick={onClick}>
    {isOpen ? (
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M30 10L10 30'
          stroke='#33363F'
          strokeWidth='2'
          strokeLinecap='square'
          strokeLinejoin='round'
        />
        <path
          d='M10 10L30 30'
          stroke='#33363F'
          strokeWidth='2'
          strokeLinecap='square'
          strokeLinejoin='round'
        />
      </svg>
    ) : (
      <svg
        width='30'
        height='22'
        viewBox='0 0 30 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1.66797 1H28.3346M1.66797 11H28.3346M1.66797 21H28.3346'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='square'
          strokeLinejoin='round'
        />
      </svg>
    )}
  </button>
);
