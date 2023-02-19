import * as yup from 'yup';

export const registerSchema = yup.object({
  email: yup
    .string()
    .email()
    .required("Поле обов'язкове для заповнення")
    .matches(
      /^(?!-)\w{2,}@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
      'мінімум 2 символи до @ і не може починатися з тире і лише латинські літери'
    ),
  password: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*_]{7,}/,
      'Пароль повинен містити велику і маленьку літерy, мінімум 7 симфолів'
    ),
  confirmpassword: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .oneOf([yup.ref('password'), null], 'Пароль не співпадає'),
  name: yup.string().required("Поле обов'язкове для заповнення"),
  region: yup.string().required("Поле обов'язкове для заповнення"),
  phone: yup
    .string()
    .required()
    .matches(/^\+38(0\d{2}|0\d{3})\d{7}$/, 'формат:+380500000000'),
});
