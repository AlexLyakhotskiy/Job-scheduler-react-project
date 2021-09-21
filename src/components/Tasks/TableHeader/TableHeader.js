import { useState } from 'react';
import FindForm from '../FindForm/FindForm';
import sprite from '../sprite.svg';
import styles from '../Tasks.module.scss';

const TableHeader = () => {
  const [openFindInp, setOpenFindInp] = useState(false);

  const toggleFindInput = () => {
    setOpenFindInp(prev => !prev);
  };
  //
  return (
    <div className={styles.tableWrapper}>
      <ul className={styles.tableTitleList}>
        <li className={styles.tableTitle}>Задача</li>
        <li className={styles.tableTitle}>
          Заплановано
          <br />
          годин
        </li>
        <li className={styles.tableTitle}>
          Витрачено
          <br />
          год / день
        </li>
        <li className={styles.tableTitle}>
          Витрачено
          <br />
          годин
        </li>
        <li>
          {!openFindInp ? (
            <button
              type="button"
              className={styles.tasksBtn}
              onClick={toggleFindInput}
            >
              <svg className={styles.findIcon}>
                <use href={sprite + '#icon-find'} />
              </svg>
            </button>
          ) : (
            <FindForm toggleFindInput={toggleFindInput} />
          )}
        </li>
      </ul>
    </div>
  );
};

export default TableHeader;
