import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './FormAddPeople.module.scss';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('not email').required("Поле обов'язкове!"),
});

export default function FormAddPeople() {
  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={s.formAddPeople}>
        <p className={s.titel}>Додати людей</p>
        <Input
          formik={formik}
          name="email"
          label="Ваш Email"
          className={s.inputEmail}
        />
        <p className={s.text}>Додані користувачі:</p>
        <p className={s.textDontEmail}>Ви ще не додали жодного користувача</p>
        <ul className={s.listEmail}>
          <li className={s.listEmailItem}>Email</li>
        </ul>
        <Button className={s.btnAddPeople} />
      </form>
    </>
  );
}
