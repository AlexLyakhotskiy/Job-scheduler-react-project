import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../../redux/tasks/tasks-actions';
import Input from '../../Input/Input';
import s from './FindForm.module.scss';
import Svg from '../../Svg/Svg';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';

const FindForm = ({ toggleFindInput }) => {
  const curLanguage = useSelector(getCurrentLanguage);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    query: Yup.string()
      .min(1, curLanguage.tasks.find.validMin)
      .max(20, curLanguage.tasks.find.validMax20),
  });

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
        <Input
          formik={formik}
          type="text"
          name="query"
          label={curLanguage.tasks.find.label}
        />

        <button type="submit" className={s.iconBtn}>
          <Svg icon="#icon-find" className={s.icon} />
        </button>
      </form>
    </div>
  );
};

export default FindForm;
