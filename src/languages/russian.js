import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

const calendarLocale = 'ru';
registerLocale(calendarLocale, ru);

export const russian = {
  calendarLocale,
  title: 'russian',
  originalTitle: 'RU',
  //originalTitle: 'русский',
  header: {
    //     navigation: {
    //       home: 'Главная',
    //       courses: 'Курсы',
    //       groups: 'Группы',
    //       profile: 'Профиль',
    //       admin: 'Админ',
    //       signin: 'Войти',
    //       signup: 'Зарегистрироваться',
    //     },
    //     burgerMenu: {
    //       toggleTheme: 'Темная тема',
    //       changeLanguage: 'Язык',
    //     },
    userMenu: { btnText: 'Выйти' },
  },
  auth: {
    authForm: {
      signUpTitle: 'Регистрация',
      signInTitle: 'Вход',
      email: 'E-mail',
      password: 'Пароль',
      confirmPassword: 'Пароль',
      btnSignUp: 'Зарегистрироваться',
      signUpQuestion: 'Есть акаунт?',
      signUpLink: 'Ввойти',
      btnSignIn: 'Ввойти',
      signInQuestion: 'Нет акаунта?',
      signInLink: 'Зарегистрироваться',
      validEmail: 'Неверный почтовый ящик',
      validEmailReq: 'Почтовый ящик обязательный',
      validMin: 'Пароль должен быть как минимум 7 символов',
      validMax: 'Пароль не должен превышать 20 символов',
      validPasReq: 'Пароль обязательный',
      validPas: 'Пароли не совпадают',
      validCPasReq: 'Пароль подтверждения обязательный',
    },
  },
  projects: {
    pageTitle: 'Проекты',
    pageAddBtn: 'Создать проект',
    message:
      'Ваша коллекция проектов пуста, воспользуйтесь кнопкой "Создать проект"',
    addProjectsForm: {
      formTitle: 'Создание проекта',
      title: 'Название проекта',
      description: 'Описание',

      validMin: 'Слишком короткое название, мин 4 символа!',
      validMax12: 'Слишком длинное название, макс 12 символов!',
      validMax70: 'Слишком длинное название, макс 70 символов!',
      validReq: 'Поле обязательное!',
    },
  },
  sprints: {
    pageAddBtn: 'Создать спринт',
    addMembers: 'Добавить людей',
    message:
      'Ваша коллекция спринтов пуста, воспользуйтесь кнопкой "Создать спринт"',
    sideBar: {
      goBack: 'Показать проекты',
      btnDesc: 'Создать проект',
    },
    addSprintsForm: {
      formTitle: 'Создание спринта',
      title: 'Название спринта',
      startDate: 'Дата начала',
      endDate: 'Дата окончания',
      duration: 'Продолжительность',
      prevDays: 'Педыдущие дни',
      validReq: 'Поле обязательное!',
      validMin: 'Минимум 2 дня!',
    },
    addMem: {
      email: 'Введите Email',
      addedMem: 'Добавленыe пользователи :',
      message: 'Вы еще не добавили ни одного пользователя',
      validEmail: 'Неверный почтовый ящик',
    },
  },
  tasks: {
    pageAddBtn: 'Создать задачу',
    th1: 'Задача',
    th2: 'Запланировано часов',
    th3: 'Потрачено ч / день',
    th4: 'Потрачено часов',

    message:
      'Ваша коллекция задач пуста, воспользуйтесь кнопкой "Создать задачу"',
    sideBar: {
      goBack: 'Показать спринты',
      btnDesc: 'Создать спринт',
    },
    addTasksForm: {
      formTitle: 'Создание задачи',
      title: 'Название задачи',
      duration: 'Запланировано часов',
    },
  },
  btn: 'Готово',
  btnCancel: 'Отмена',
  nfp: {
    title: '404 Ой! Страница не найдена',
    link: 'Возможно вы потерялись? Hажмите чтобы вернуться на сайт.',
  },
  errors: {
    error409: 'Указанный адрес электронной почты уже существует',
    error403: 'Электронная почта или пароль неверны',
  },
};
