import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';

import Main from './Main/Main';

import Input from './Input/Input';
import Button from './Button/Button';

const validationSchema = Yup.object().shape({
  nameYourInput: Yup.string()
    .min(2, 'Занадто коротка назва, мін 2 символа')
    .max(16, 'Занадто довга назва, макс 16 символів')
    .required("Поле обов'язкове"),
});

function App() {
  const formik = useFormik({
    initialValues: { nameYourInput: '' },
    validationSchema,
    onSubmit: values => console.log(values),
  });
  return (
    <>
      <Main />
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="nameYourInput" />
        <Button />
      </form>
    </>
  );
}

export default App;
