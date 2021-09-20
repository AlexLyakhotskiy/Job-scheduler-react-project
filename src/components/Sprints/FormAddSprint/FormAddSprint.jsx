import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './FormAddSprint.module.scss';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import sprintOperations from '../../../redux/sprint/sprin-operations';
import { useState } from 'react';

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Поле обов'язкове!"),
  //   date: Yup.date(),
  //   data: Yup.string().required("Поле обов'язкове!"),
  days: Yup.number().required("Поле обов'язкове!"),
});

export default function FormAddSprint() {
  //   const dispatch = useDispatch();

  //   const [startDate, setStartDate] = useState();

  const formik = useFormik({
    initialValues: { title: '', days: '', date: '' },
    validationSchema,
    onSubmit: values => {
      console.log(values);
      //   console.log(startDate);
      //   dispatch(
      //     sprintOperations.postSprint({
      //       projectId: '61449ee3f4a6c03db8cc8cb1',
      //       body: {
      //         title: values.titel,
      //         endDate: values.data,
      //         duration: values.days,
      //       },
      // }),
      //   );
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={s.formAddPeople}>
        <p className={s.titel}>Створення спринта</p>
        <Input
          formik={formik}
          name="title"
          label="Назва спринта"
          className={s.inputEmail}
        />
        <div>
          <input type="checkbox" name="dataChek" />
          <DatePicker
            name="date"
            formik={formik}
            // selected={formik.values.date}
            // value={formik.values.date}
            onChange={(date, dateString) => {
              console.log(date);
              console.log(dateString);
              formik.setFieldValue('date', dateString);
            }}
          />
          <Input
            formik={formik}
            type="number"
            name="days"
            label="Тривалисть"
            className={s.inputDays}
          />
        </div>

        <Button className={s.btnAddPeople} />
      </form>
    </>
  );
}
