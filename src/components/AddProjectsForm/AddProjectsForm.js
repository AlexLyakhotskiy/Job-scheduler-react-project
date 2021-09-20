import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import CancelBtn from '../CancelBtn/CancelBtn.jsx';
import { addProjects } from '../../redux/projects/projectOperations';
import s from './AddProjectsForm.module.scss';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(4, 'Занадто коротка назва, мін 2 символа!')
    .max(20, 'Занадто довга назва, макс 20 символів!')
    .required("Поле обов'язкове!"),
  description: Yup.string()
    .min(4, 'Занадто короткий опис, мін 2 символа!')
    .max(70, 'Занадто довгий опис, макс 70 символів!')
    .required("Поле обов'язкове!"),
});

export default function AddProjectsForm({ closeModal }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { title: '', description: '' },
    validationSchema,
    onSubmit: data => {
      dispatch(addProjects(data));
      closeModal();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h2 className={s.formTitle}>Створення проекту</h2>
        <Input
          formik={formik}
          name="title"
          label="Назва проекту"
          className={s.titleInput}
        />
        <Input
          formik={formik}
          name="description"
          label="Опис"
          className={s.descInput}
        />
        <Button className={s.btnSubmit} />
        <CancelBtn onClick={closeModal} />
      </form>
    </>
  );
}
