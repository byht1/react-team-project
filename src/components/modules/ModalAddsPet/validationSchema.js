import * as yup from 'yup';

export const schemaAddMyPetForm = yup.object({
  petName: yup
    .string()
    .matches(/^([а-яё\s]+|[a-z\s]+)$/iu, 'Name can contain only letters.')
    .min(2, 'The name must contain more than 2 characters')
    .max(20, 'Maximum name length 20 characters')
    .required('This field is requaired!'),

  petBirth: yup
    .string()
    .matches(
      /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[012])\.\d{4}$/,
      'Date must be in the format DD.MM.YYYY'
    )
    .test('date', 'Date must be after 01.01.1990 and before today', value => {
      const [day, month, year] = value.split('.');
      const parsedDate = new Date(`${year}-${month}-${day}`);
      const currentDate = new Date();
      if (
        isNaN(parsedDate.getTime()) ||
        parsedDate < new Date('1990-01-01') ||
        parsedDate > currentDate
      ) {
        return false;
      }
      return true;
    }),

  petBreed: yup
    .string()
    .matches(
      // /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      /^([а-яё\s]+|[a-z\s]+)$/iu,
      'Breed can contain only letters.'
    )
    .min(2, 'The breed must contain more than 2 characters')
    .max(50, 'Maximum breed length 50 characters')
    .required('This field is requaired!'),

  myPetURL: yup.mixed().required('This field is requaired!'),
  comments: yup
    .string()
    .required('This field is requaired!')
    .min(8, 'The comment must contain more than 8 characters')
    .max(120, 'Maximum comment length 120 characters'),
});
