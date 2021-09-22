import { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';

const calendarLocale = 'uk';
registerLocale(calendarLocale, uk);

export const ukrainian = {
  calendarLocale,
  title: 'ukrainian',
  originalTitle: 'UA',
  //originalTitle: 'українська',
  header: {
    //     navigation: {
    //       home: 'Головна',
    //       courses: 'Курси',
    //       groups: 'Групи',
    //       profile: 'Профіль',
    //       admin: 'Адмін',
    //       signin: 'Увійти',
    //       signup: 'Зареєструватись',
    //     },
    //     burgerMenu: {
    //       toggleTheme: 'Темна тема',
    //       changeLanguage: 'Мова',
    //     },
    userMenu: { btnText: 'Вийти' },
  },
  auth: {
    authForm: {
      signUpTitle: 'Реєстрація',
      signInTitle: 'Вхід',
      email: 'E-mail',
      password: 'Пароль',
      confirmPassword: 'Пароль',
      btnSignUp: 'Зареєструватись',
      signUpQuestion: 'Маєте акаунт?',
      signUpLink: 'Увійти',
      btnSignIn: 'Увійти',
      signInQuestion: 'Немає акаунту?',
      signInLink: 'Зареєструватись',
      validEmail: 'Невірна поштова скринька',
      validEmailReq: "Поштова скринька обов'язкова",
      validMin: 'Пароль має бути як мінімум 7 символів',
      validMax: 'Пароль не має перевищувати 20 символів',
      validPasReq: "Пароль обов'язковий",
      validPas: 'Паролі не співпадають',
      validCPasReq: "Пароль підтвердження обов'язковий",
    },
  },
  projects: {
    pageTitle: 'Проекти',
    pageAddBtn: 'Створити проект',
    message:
      'Ваша колекція проектів порожня, скористайтесь кнопкою "Створити проект"',
    addProjectsForm: {
      formTitle: 'Створення проекту',
      title: 'Назва проекту',
      description: 'Опис',
      validMin: 'Занадто коротка назва, мін 4 символа!',
      validMax12: 'Занадто довга назва, макс 12 символів!',
      validMax70: 'Занадто довга назва, макс 70 символів!',
      validReq: "Поле обов'язкове!",
    },
  },
  sprints: {
    pageAddBtn: 'Створити спринт',
    addMembers: 'Додати людей',
    message:
      'Ваша колекція спринтів порожня, скористайтесь кнопкою "Створити спринт"',
    sideBar: {
      goBack: 'Показати проекти',
      btnDesc: 'Створити проект',
    },
    addSprintsForm: {
      formTitle: 'Створення спринта',
      title: 'Назва спринта',
      startDate: 'Дата початку',
      endDate: 'Дата закінчення',
      duration: 'Тривалість',
      prevDays: 'Попередні дні',
      validReq: "Поле обов'язкове!",
      validMin: 'Мінімум 2 дні!',
    },
    addMem: {
      email: 'Введіть Email',
      addedMem: 'Додані користувачі :',
      message: 'Ви ще не додали жодного користувача',
      validEmail: 'Невірна поштова скринька',
    },
  },
  tasks: {
    pageAddBtn: 'Створити задачу',
    th1: 'Задача',
    th2: 'Заплановано годин',
    th3: 'Витрачено год / день',
    th4: 'Витрачено годин',

    message:
      'Ваша колекція задач порожня, скористайтесь кнопкою "Створити задачу"',
    sideBar: {
      goBack: 'Показати спринти',
      btnDesc: 'Створити спринт',
    },
    addTasksForm: {
      formTitle: 'Створення задачі',
      title: 'Назва задачі',
      duration: 'Заплановано годин',
    },
  },
  btn: 'Готово',
  btnCancel: 'Відміна',
  nfp: {
    title: '404 Ой! Сторінка не знайдена',
    link: 'Можливо ви загубились? Hатисніть щоб повернутись до сайту.',
  },
  errors: {
    error409: 'Надана електронна адреса вже існує',
    error403: 'Електронна адреса або пароль невірні',
  },
};
