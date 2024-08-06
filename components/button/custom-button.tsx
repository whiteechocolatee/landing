import Link from 'next/link';
import styles from './styles.module.scss';

type Props = {
  style: 'primary' | 'transparent';
  href?: string;
  type?: 'button' | 'submit';
  children: React.ReactNode;
  classNames?: string;
};

export const CustomButton = ({
  type = 'button',
  href,
  style,
  children,
  classNames,
}: Props) => {
  const buttonElement = (
    <button
      type={type}
      className={`${classNames} ${styles[style]} ${styles.button}`}>
      {children}
    </button>
  );

  return href ? (
    <Link href={href} passHref>
      {buttonElement}
    </Link>
  ) : (
    buttonElement
  );
};
