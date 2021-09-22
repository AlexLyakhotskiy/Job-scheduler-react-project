import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './FormAddSprint.module.scss';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import sprintOperations from '../../../redux/sprint/sprin-operations';
import { useParams } from 'react-router';
import CancelBtn from '../../CancelBtn/CancelBtn';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';

export default function FormAddSprint({ toggleModal }) {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const curLanguage = useSelector(getCurrentLanguage);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(curLanguage.sprints.addSprintsForm.validReq),
    //   date: Yup.date(),
    date: Yup.date().required(curLanguage.sprints.addSprintsForm.validReq),
    duration: Yup.number()
      .required(curLanguage.sprints.addSprintsForm.validReq)
      .min(2, curLanguage.sprints.addSprintsForm.validMin),
  });

  const formik = useFormik({
    initialValues: { title: '', duration: '', date: new Date() },
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
        <p className={s.titel}>
          {curLanguage.sprints.addSprintsForm.formTitle}
        </p>
        <Input
          formik={formik}
          name="title"
          label={curLanguage.sprints.addSprintsForm.title}
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
          {curLanguage.sprints.addSprintsForm.prevDays}
        </label>
        <div className={s.containerDate}>
          <div className={s.datePickerConteiner}>
            <label className={s.datePickerLabel} htmlFor="datePicker">
              <span className={s.datePickerLabel}>
                {curLanguage.sprints.addSprintsForm.endDate}
              </span>
            </label>
            <DatePicker
              id="datePicker"
              name="date"
              autocomplete="off"
              minDate={null}
              dateFormat="dd MMM"
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
            label={curLanguage.sprints.addSprintsForm.duration}
            className={s.inputDays}
          />
        </div>

        <Button className={s.btnAddSprint} />
      </form>
      <CancelBtn onClick={toggleModal} />
    </>
  );
}
