import React from 'react';

import styles from './styles.module.scss';

type BadgeProps = {
  classNames?: string;
  children: React.ReactNode;
};

export const TitleBadge = ({
  classNames,
  children,
}: BadgeProps) => {
  return (
    <div className={`${styles.badge} ${classNames}`}>
      {children}
    </div>
  );
};
