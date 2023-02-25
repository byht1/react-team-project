import * as yup from 'yup';

export const loginSchema = yup.object({
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
  password: yup.string().required('The field is mandatory'),
});
