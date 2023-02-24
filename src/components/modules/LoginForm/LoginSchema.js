import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .min(7, 'Must be exactly 7 digits')
    .max(63, 'Must be exactly 63 digits')
    .email('minimum 2 characters before @, cannot start with a dash, only Latin letters')
    .required('The field is mandatory')
    .matches(
      /^(?!-)\w{2,}(\.\w+)*@[\w-]+(\.[\w-]+)*\.[a-zA-Z]{2,}$/,
      'minimum 2 characters before @, cannot start with a dash, only Latin letters'
    ),
  password: yup.string().required('The field is mandatory'),
});
