import React from 'react';

import styles from './Button.module.scss';

export default function Button({ title = 'готово', className = '' }) {
  return (
    <button className={`${styles.btn} ${className}`} type="submit">
      {title}
    </button>
  );
}
