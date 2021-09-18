import { Formik, Form, Field } from 'formik';
import css from './AddProjectsForm.module.scss';

export default function AddProjectsForm({ onClose }) {
  return (
    <Formik>
      <Form className={css.formProject} autoComplete="off">
        <label className={css.nameLabel}>
          <Field name="title" placeholder=" " className={css.nameInp} />
          <span className={css.nameLabelText}>Назва проекту</span>
        </label>

        <label className={css.descrLabel}>
          <Field name="description" placeholder=" " className={css.descrInp} />
          <span className={css.descrLabelText}>Опис</span>
        </label>

        <button type="submit">Готово</button>
      </Form>
    </Formik>
  );
}
