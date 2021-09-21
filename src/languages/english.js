import { registerLocale } from 'react-datepicker';
import en from 'date-fns/locale/en-GB';

const calendarLocale = 'en';
registerLocale(calendarLocale, en);

export const english = {
  calendarLocale,
  title: 'english',
  originalTitle: 'EN',
  //originalTitle: 'english',
  header: {
    //     navigation: {
    //       home: 'home',
    //       courses: 'courses',
    //       groups: 'groups',
    //       profile: 'profile',
    //       admin: 'admin',
    //       signin: 'signin',
    //       signup: 'signup',
    //     },
    //     burgerMenu: {
    //       toggleTheme: 'Dark theme',
    //       changeLanguage: 'Language',
    //     },
    userMenu: { btnText: 'Log Out' },
  },
  auth: {
    authForm: {
      signUpTitle: 'Registration',
      signInTitle: 'Authentication',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm password',
      btnSignUp: 'Sign Up',
      signUpQuestion: 'Have you got an account?',
      signUpLink: 'Sign In',
      btnSignIn: 'Sign In',
      signInQuestion: 'Haven`t got an account yet?',
      signInLink: 'Sign Up',
      validEmail: 'Invalid email',
      validEmailReq: 'Email is required',
      validMin: 'Password must be at least 7 characters long',
      validMax: 'The password must not exceed 20 characters',
      validPasReq: 'Password is required',
      validPas: 'Passwords do not match',
      validCPasReq: 'Confirmation password is required',
    },
  },
  projects: {
    pageTitle: 'Projects',
    pageAddBtn: 'Сreate project',
    addProjectsForm: {
      formTitle: 'Project creation',
      title: 'Project name',
      description: 'Description',
      btnAdd: 'Create',
      btnCancel: 'Cancel',
      validMin: 'Name too short, min 4 characters!',
      validMax12: 'Name is too long, max 12 characters!',
      validMax70: 'Name is too long, max 70 characters!',
      validReq: 'Field is required!',
    },
  },
  sprints: {
    pageAddBtn: 'Create sprint',
    addMembers: 'Add members',
    message: 'Your sprint collection is empty, use the "Create Sprint" button',
    sideBar: {
      goBack: 'Show projects',
      btnDesc: 'Сreate project',
    },
    addSprintsForm: {
      formTitle: 'Sprint creation',
      title: 'Sprint name',
      endDate: 'Expire date',
      duration: 'Duration',
      btnAdd: 'Create',
      btnCancel: 'Cancel',
    },
  },
  tasks: {
    pageAddBtn: 'Create task',
    th1: 'Task',
    th2: 'Scheduled hours',
    th3: 'Spent hours / day ',
    th4: 'Spent hours',

    message: 'Your task collection is empty, use the "Create task" button',
    sideBar: {
      goBack: 'Show sprints',
      btnDesc: 'Create sprint',
    },
    addTasksForm: {
      formTitle: 'Task creation',
      title: 'Task name',
      duration: 'Scheduled hours',
      btnAdd: 'Create',
      btnCancel: 'Cancel',
    },
  },
  errors: {
    error409: 'Provided email already exists',
    error403: 'Email or Password is wrong',
  },
};
