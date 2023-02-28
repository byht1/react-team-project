import * as yup from 'yup';

export const registerSchema = yup.object({
  email: yup
    .string()
    .min(7, 'Must be more than 7 characters')
    .max(63, 'Must be less than 63 characters')
    .email('minimum 2 characters before @, cannot start with a dash, only Latin letters')
    .required('The field is mandatory')
    .matches(
      /^(?!-)[\w.-]{2,}@[\w-]+(\.[\w-]+)*\.[a-zA-Z]{2,}$/u,
      'minimum 2 characters before @, cannot start with a dash, only Latin letters'
    ),
  password: yup
    .string()
    .required('The field is mandatory')
    .max(32, 'Must be less than 32 characters')
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*_]{7,}/,
      'The password must contain uppercase and lowercase letters, at least 7 symbols'
    ),
  confirmpassword: yup
    .string()
    .required('The field is mandatory')
    .oneOf([yup.ref('password'), null], 'Passwords do not match'),
  name: yup
    .string()
    .min(2, 'Must be more than 2 characters')
    .max(40, 'Must be less than 40 characters')
    .matches(
      /^[A-Za-zА-Яа-яЁёҐґІіЇїЄє\s,'"'-.]+(?:\s+[A-Za-zА-Яа-яЁёҐґІіЇїЄє]+){0,3}$/u,
      'Not a valid name'
    )
    .required('The field is mandatory'),
  city: yup
    .string()
    .min(2, 'Must be more than 2 characters')
    .max(50, 'Must be less than 50 characters')
    .matches(/^(?!\s)[a-zA-Zа-яА-ЯЁёҐґІіЇїЄє\s,'"'-.]+$/, 'Not a valid city')
    .required('The field is mandatory'),
  phone: yup
    .string()
    .required()
    .matches(/^\+38?(0\d{9})$/, 'Number format:+380500000000'),
});
