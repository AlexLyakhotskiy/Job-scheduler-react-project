import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../../redux/userSettings/userSettingsActions.js';
import { getTheme } from '../../../redux/userSettings/userSettingsSelectors.js';
import styles from './ChangerTheme.module.scss';

const light = 'light';
const dark = 'dark';

const ChangerTheme = () => {
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (theme) {
      case light:
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        break;
      case dark:
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        break;
      default:
        dispatch(changeTheme(light));
    }
  }, [theme]);

  const handleChange = () =>
    dispatch(changeTheme(theme === light ? dark : light));

  return (
    <>
      <div className={`${styles.button}  ${styles.r} ${styles.button_3}`}>
        <input
          className={styles.checkbox}
          name="ChangeTheme/Input"
          type="checkbox"
          id="unchecked"
          checked={theme === dark}
          onChange={handleChange}
        />
        <div className={styles.knobs}></div>
        <div className={styles.layer}></div>
      </div>
    </>
  );
};

export default ChangerTheme;
