//import { Formik, Form, Field } from 'formik';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import CancelBtn from '../CancelBtn/CancelBtn.jsx';
import css from './AddProjectsForm.module.scss';

const validationSchema = Yup.object().shape({
  nameYourInput: Yup.string()
    .min(2, 'Занадто коротка назва, мін 2 символа!')
    .max(16, 'Занадто довга назва, макс 16 символів!')
    .required("Поле обов'язкове!"),
});

export default function AddProjectsForm() {
  const formik = useFormik({
    initialValues: { nameYourInput: '' },
    validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="nameYourInput" label="Назва проекту" />
        <Input formik={formik} name="nameYourInput" label="Опис" />
        <Button />
        <CancelBtn />
      </form>
    </>

    // <Formik>
    //   <Form className={css.formProject} autoComplete="off">
    //     <label className={css.nameLabel}>
    //       <Field name="title" placeholder=" " className={css.nameInp} />
    //       <span className={css.nameLabelText}>Назва проекту</span>
    //     </label>

    //     <label className={css.descrLabel}>
    //       <Field name="description" placeholder=" " className={css.descrInp} />
    //       <span className={css.descrLabelText}>Опис</span>
    //     </label>
    //     <Button />
    //     <CancelBtn />
    //   </Form>
    // </Formik>
  );
}
