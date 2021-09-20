import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './FormAddSprint.module.scss';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import sprintOperations from '../../../redux/sprint/sprin-operations';
import { useParams } from 'react-router';
import CancelBtn from '../../CancelBtn/CancelBtn';

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Поле обов'язкове!"),
  //   date: Yup.date(),
  date: Yup.date().required("Поле обов'язкове!"),
  duration: Yup.number().required("Поле обов'язкове!"),
});

export default function FormAddSprint({ toggleModal }) {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  //стартовая дата в форме
  const startDate = moment().format('D MMM');
  console.log(startDate);

  const formik = useFormik({
    initialValues: { title: '', duration: '', date: '' },
    validationSchema,
    onSubmit: ({ title, duration, date }) => {
      const endDate = moment(date).format('YYYY-M-D');
      dispatch(
        sprintOperations.postSprint({
          projectId,
          body: {
            title,
            endDate,
            duration,
          },
        }),
      );
      toggleModal();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={s.formAddSprint}>
        <p className={s.titel}>Створення спринта</p>
        <Input
          formik={formik}
          name="title"
          label="Назва спринта"
          className={s.inputNameSprint}
        />
        <input
          className={s.checkbox}
          name="color"
          type="checkbox"
          id="green"
          value="green"
        />
        <label className={s.checkboxLabel} htmlFor="green">
          Попередні дні
        </label>
        <div className={s.containerDate}>
          <div className={s.datePickerConteiner}>
            <label className={s.datePickerLabel} htmlFor="datePicker">
              <span className={s.datePickerLabel}>Дата закінчення</span>
            </label>
            <DatePicker
              id="datePicker"
              name="date"
              autocomplete="off"
              minDate={null}
              className={s.date}
              selected={formik.values.date}
              onChange={date => {
                formik.setFieldValue('date', date);
              }}
            />
          </div>

          <Input
            formik={formik}
            type="number"
            name="duration"
            label="Тривалисть"
            className={s.inputDays}
          />
        </div>

        <Button className={s.btnAddSprint} />
      </form>
      <CancelBtn onClick={toggleModal} />
    </>
  );
}
