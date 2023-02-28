import * as yup from 'yup';

export const newPassSchema = yup.object({
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
});
