import { TitleBadge } from '../title-badge/title-badge';
import styles from './styles.module.scss';

export const Help = () => {
  return (
    <section className={styles.help}>
      <div className={`${styles.help__wrapper} container`}>
        <h2 className={styles.help__title}>
          <div className={styles.help__title_text_first}>
            <p>Нужна</p>
            <TitleBadge
              classNames={styles.help__title_badge}>
              ответим
            </TitleBadge>
          </div>
          <div className={styles.help__title_text_second}>
            <p>Консультация?</p>
            <div className={styles.help__title_icons}>
              <span>
                <svg
                  width='18'
                  height='17'
                  viewBox='0 0 18 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g clipPath='url(#clip0_56_11247)'>
                    <path
                      d='M13.25 5.66699H13.9583C14.7098 5.66699 15.4304 5.9655 15.9618 6.49686C16.4932 7.02821 16.7917 7.74888 16.7917 8.50033C16.7917 9.25177 16.4932 9.97244 15.9618 10.5038C15.4304 11.0351 14.7098 11.3337 13.9583 11.3337H13.25'
                      stroke='#1F1D1C'
                      strokeWidth='0.944444'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M1.91797 5.66699H13.2513V12.042C13.2513 12.7934 12.9528 13.5141 12.4214 14.0455C11.8901 14.5768 11.1694 14.8753 10.418 14.8753H4.7513C3.99986 14.8753 3.27919 14.5768 2.74783 14.0455C2.21648 13.5141 1.91797 12.7934 1.91797 12.042V5.66699Z'
                      stroke='#1F1D1C'
                      strokeWidth='0.944444'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10.418 0.708008V2.83301'
                      stroke='#1F1D1C'
                      strokeWidth='0.944444'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M7.58203 0.708008V2.83301'
                      stroke='#1F1D1C'
                      strokeWidth='0.944444'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M4.75 0.708008V2.83301'
                      stroke='#1F1D1C'
                      strokeWidth='0.944444'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_56_11247'>
                      <rect
                        width='17'
                        height='17'
                        fill='white'
                        transform='translate(0.5)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>
                <svg
                  width='18'
                  height='17'
                  viewBox='0 0 18 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M15.2623 3.26573C14.9005 2.90378 14.471 2.61665 13.9982 2.42075C13.5254 2.22485 13.0187 2.12402 12.5069 2.12402C11.9951 2.12402 11.4884 2.22485 11.0156 2.42075C10.5428 2.61665 10.1133 2.90378 9.75149 3.26573L9.00065 4.01657L8.24982 3.26573C7.51904 2.53495 6.52789 2.1244 5.4944 2.1244C4.46092 2.1244 3.46977 2.53495 2.73899 3.26573C2.00821 3.99652 1.59766 4.98767 1.59766 6.02115C1.59766 7.05463 2.00821 8.04578 2.73899 8.77657L3.48982 9.5274L9.00065 15.0382L14.5115 9.5274L15.2623 8.77657C15.6243 8.41478 15.9114 7.98523 16.1073 7.51244C16.3032 7.03966 16.404 6.53291 16.404 6.02115C16.404 5.50939 16.3032 5.00264 16.1073 4.52986C15.9114 4.05707 15.6243 3.62752 15.2623 3.26573V3.26573Z'
                    stroke='#1F1D1C'
                    strokeWidth='0.944444'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
            </div>
          </div>
        </h2>
        {/* TODO: add form */}
      </div>
    </section>
  );
};
