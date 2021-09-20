import { useFormik } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';

import Container from '../../components/Container/Container';

import { routes } from '../../routes/routes';

import styles from './NotFoundPage.module.scss';
import Button from '../../components/Button/Button';

export default function NotFoundPage() {
  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <Test />
        <h1>404 Ой! Сторінка не знайдена</h1>
        <Link to={routes.register} className={styles.link}>
          Можливо ви загубились? натисніть щоб повернутись до сайту.
        </Link>
      </div>
    </Container>
  );
}

const validationSchema = yup.object({
  date: yup.date('111').required('222'),
});

function Test() {
  const [isActiveLastDay, setIsActiveLastDay] = useState(false);
  const formik = useFormik({
    initialValues: { date: '' },
    validationSchema,
    onSubmit: values => console.log(`values`, values),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <DatePicker
          dateFormat="dd MMM"
          minDate={isActiveLastDay ? new Date() : null}
          selected={formik.values.date}
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
