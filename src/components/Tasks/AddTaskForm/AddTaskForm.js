import * as Yup from 'yup';
import { useFormik } from 'formik';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import CancelBtn from '../../CancelBtn/CancelBtn';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../redux/tasks/tasks-operations';
import s from './AddTaskForm.module.scss';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(4, 'Занадто коротка назва, мін 2 символа!')
    .max(20, 'Занадто довга назва, макс 20 символів!')
    .required("Поле обов'язкове!"),
  hoursPlanned: Yup.string()
    .min(1, 'Мін 1 година!')
    .max(8, 'Макс 8 годин!')
    .required("Поле обов'язкове!"),
});

const AddTaskForm = ({ sprintId, toggleModal }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { title: '', hoursPlanned: '' },
    validationSchema,
    onSubmit: data => {
      dispatch(
        addTask({
          title: data.title,
          hoursPlanned: data.hoursPlanned,
          sprintId: sprintId,
        }),
      );
      toggleModal();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className={s.formTitle}>Створення задачі</h2>
      <Input
        formik={formik}
        type="text"
        name="title"
        label="Назва задачі"
        className={s.titleInput}
      />
      <Input
        formik={formik}
        type="number"
        name="hoursPlanned"
        label="Заплановано годин"
        className={s.descInput}
      />
      <Button type="submit" className={s.btnSubmit}>
        Готово
      </Button>
      <CancelBtn onClick={toggleModal}>Відміна</CancelBtn>
    </form>
  );
};

export default AddTaskForm;
