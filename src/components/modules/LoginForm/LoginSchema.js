
import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('мінімум 2 символи до @ і не може починатися з тире і лише латинські літери')
    .required("Поле обов'язкове для заповнення")
    .matches(
      /^(?!-)\w+(\.\w+)?@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
      'мінімум 2 символи до @ і не може починатися з тире і лише латинські літери'
    ),
  password: yup.string().required("Поле обов'язкове для заповнення"),
});
