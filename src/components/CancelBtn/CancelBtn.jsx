import React from 'react';

import styles from './CancelBtn.module.scss';

export default function CancelBtn({
  onClick,
  title = 'відміна',
  className = '',
}) {
  function handleClick() {
    onClick();
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.btn} className`}
    >
      {title}
    </button>
  );
}
