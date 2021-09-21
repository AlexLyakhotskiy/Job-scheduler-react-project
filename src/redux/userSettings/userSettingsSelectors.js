import { createSelector } from '@reduxjs/toolkit';
import { languages } from '../../languages';

export const getLanguage = state => state.userSettings.language;

export const getCurrentLanguage = createSelector([getLanguage], getLanguage => {
  return languages[getLanguage] || languages.ukrainian;
});
