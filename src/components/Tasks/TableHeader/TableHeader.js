import { useState } from 'react';
import FindForm from '../FindForm/FindForm';
import sprite from '../sprite.svg';
import s from './TableHeader.module.scss';

const TableHeader = () => {
  const [openFindInp, setOpenFindInp] = useState(false);

  const toggleFindInput = () => {
    setOpenFindInp(prev => !prev);
  };

  return (
    <div className={s.tableWrapper}>
      <ul className={s.tableHeaderList}>
        <li>Задача</li>
        <li>
          Заплановано
          <br />
          годин
        </li>
        <li>
          Витрачено
          <br />
          год / день
        </li>
        <li>
          Витрачено
          <br />
          годин
        </li>
        <li>
          {!openFindInp ? (
            <button
              type="button"
              onClick={toggleFindInput}
              className={s.findFormBtn}
            >
              <svg>
                <use href={sprite + '#icon-find'} width="20px" height="20px" />
              </svg>
            </button>
          ) : (
            <div className={s.findFormTable}>
              {' '}
              <FindForm toggleFindInput={toggleFindInput} />
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default TableHeader;
