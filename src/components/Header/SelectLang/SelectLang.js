import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../../redux/userSettings/userSettingsActions';
import { languages } from '../../../languages';
import { getLanguage } from '../../../redux/userSettings/userSettingsSelectors';

const styles = {
  select: { marginLeft: 20 },
};

export default function SelectLang() {
  const language = useSelector(getLanguage);
  const dispatch = useDispatch();

  return (
    <select
      name="languageSelector"
      onChange={e => dispatch(actions.changeLanguage(e.target.value))}
      defaultValue={language}
      style={styles.select}
    >
      {languages.list.map(lang => (
        <option value={lang} key={lang}>
          {languages[lang].originalTitle}
        </option>
      ))}
    </select>
  );
}
