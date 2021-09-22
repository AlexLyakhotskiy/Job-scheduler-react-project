import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { filterChange } from '../../../redux/tasks/tasks-actions';
import Input from '../../Input/Input';
import s from './FindForm.module.scss';
import Svg from '../../Svg/Svg';

const validationSchema = Yup.object().shape({
  query: Yup.string()
    .min(1, 'Занадто коротка назва, мін 1 символ!')
    .max(20, 'Занадто довга назва, макс 10 символів!'),
});

const FindForm = ({ toggleFindInput }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { query: '' },
    validationSchema,
    onSubmit: data => {
      dispatch(filterChange(data.query));
      toggleFindInput();
    },
  });

  return (
    <div className={s.findBox}>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} type="text" name="query" label="Пошук" />

        <button type="submit" className={s.iconBtn}>
          <Svg icon="#icon-find" className={s.icon} />
        </button>
      </form>
    </div>
  );
};

export default FindForm;
