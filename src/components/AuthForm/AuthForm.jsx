import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Container from '../Container/Container';

import { signIn, signUp } from '../../redux/auth/auth-operations';

import styles from './AuthForm.module.scss';

const validationSchemaReg = yup.object({
  email: yup
    .string()
    .email('Невірна поштова скринька')
    .required("Поштова скринька обов'язкова"),
  password: yup
    .string()
    .min(7, 'Пароль має бути як мінімум 7 символів')
    .max(20, 'Пароль не має перевищувати 20 символів')
    .required("Пароль обов'язковий"),
  confirmPassword: yup
    .string()
    .when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref('password')], 'Паролі не співпадають'),
    })
    .required("Пароль підтвердження обов'язковий"),
});

const validationSchemaLog = yup.object({
  email: yup
    .string()
    .email('Невірна поштова скринька')
    .required("Поштова скринька обов'язкова"),
  password: yup
    .string()
    .min(7, 'Пароль має бути як мінімум 7 символів')
    .max(20, 'Пароль не має перевищувати 20 символів')
    .required("Пароль обов'язковий"),
});

const AuthForm = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const formik = useFormik({
    initialValues: isRegisterForm()
      ? {
          email: '',
          password: '',
          confirmPassword: '',
        }
      : { email: '', password: '' },
    validationSchema: isRegisterForm()
      ? validationSchemaReg
      : validationSchemaLog,
    onSubmit: ({ email, password }) => {
      const data = { email, password };
      isRegisterForm() ? dispatch(signUp(data)) : dispatch(signIn(data));
    },
  });

  function isRegisterForm() {
    return pathname === '/register';
  }

  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.authContainer}>
          <h2 className={styles.title}>
            {isRegisterForm() ? 'Реєстрація' : 'Вхід'}
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <Input
              formik={formik}
              name="email"
              label="email"
              className={styles.input}
            />
            <Input
              formik={formik}
              name="password"
              label="password"
              type="password"
              className={styles.input}
            />
            {isRegisterForm() && (
              <Input
                formik={formik}
                name="confirmPassword"
                label="confirmPassword"
                type="password"
                className={styles.input}
              />
            )}
            <Button
              title={isRegisterForm() ? 'Зареєструватися' : 'Увійти'}
              className={styles.btn}
            />
          </form>
          {isRegisterForm() ? (
            <>
              <span className={styles.text}>Маєте акаунт?</span>
              <Link to={routes.login} className={styles.link}>
                увійти
              </Link>
            </>
          ) : (
            <>
              <span className={styles.text}>Немає акаунту?</span>
              <Link to={routes.register} className={styles.link}>
                зареєструватись
              </Link>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default AuthForm;
