import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../../redux/userSettings/userSettingsActions.js';
import { getTheme } from '../../../redux/userSettings/userSettingsSelectors.js';

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
    <input
      name="ChangeTheme/Input"
      type="checkbox"
      checked={theme === dark}
      onChange={handleChange}
    />
  );
};

export default ChangerTheme;
