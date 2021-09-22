import React from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { Link } from 'react-router-dom';

import Container from '../../components/Container/Container';
import { getCurrentLanguage } from '../../redux/userSettings/userSettingsSelectors';

import { routes } from '../../routes/routes';

import styles from './NotFoundPage.module.scss';
import Button from '../../components/Button/Button';
import moment from 'moment';

import { getLanguage } from '../../redux/userSettings/userSettingsSelectors';
import { useSelector } from 'react-redux';

import ukrainian from 'date-fns/locale/uk';
import russian from 'date-fns/locale/ru';
registerLocale('ua', ukrainian);
registerLocale('ua', russian);

const chooseLang = {
  ukrainian: ukrainian,
  russian: russian,
};

export default function NotFoundPage() {
  const curLanguage = useSelector(getCurrentLanguage);
  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <h1>{curLanguage.nfp.title}</h1>
        <Link to={routes.register} className={styles.link}>
          {curLanguage.nfp.link}
        </Link>
      </div>
    </Container>
  );
}

const validationSchema = yup.object({
  date: yup.date().nullable().required("Це поле обов'язкове"),
});

function Test() {
  const [isActiveLastDay, setIsActiveLastDay] = useState(false);
  const currentLang = useSelector(getLanguage);
  const formik = useFormik({
    initialValues: { date: null },
    validationSchema,
    onSubmit: ({ date }) => {
      const formatedDate = moment(date).format('YYYY-M-D');
      console.log(`values`, formatedDate);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <DatePicker
          dateFormat="dd MMMM"
          minDate={isActiveLastDay ? new Date() : null}
          selected={formik.values.date}
          onBlur={() => formik.setFieldTouched('date', true)}
          locale={chooseLang[currentLang]}
          onChange={date => formik.setFieldValue('date', date)}
        />
        <input
          type="checkbox"
          checked={isActiveLastDay}
          onChange={() => setIsActiveLastDay(s => !s)}
        />
        {formik.errors.date && formik.touched.date && (
          <span className={styles.error}>{formik.errors.date}</span>
        )}
        <Button />
      </form>
    </>
  );
}
