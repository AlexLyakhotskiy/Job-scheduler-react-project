import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './FormAddPeople.module.scss';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { getProjectsList } from '../../../redux/projects/projectSelectors';
import { addProjectMembers } from '../../../redux/projects/projectOperations';
import { useParams } from 'react-router';
import CancelBtn from '../../CancelBtn/CancelBtn';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('not email').required("Поле обов'язкове!"),
});

export default function FormAddPeople({ toggleModal }) {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const projects = useSelector(getProjectsList);

  const people = projects.find(project => project._id === projectId);

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema,
    onSubmit: values => {
      console.log(values);
      dispatch(
        addProjectMembers({
          projectId,
          contributorData: values,
        }),
      );

      toggleModal();
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
        {!people.members.length ? (
          <p className={s.textDontEmail}>Ви ще не додали жодного користувача</p>
        ) : (
          <ul className={s.listEmail}>
            {people.members.map(item => (
              <li key={item} className={s.listEmailItem}>
                {item}
              </li>
            ))}
          </ul>
        )}

        <Button className={s.btnAddPeople} />
      </form>
      <CancelBtn onClick={() => toggleModal()} />
    </>
  );
}
