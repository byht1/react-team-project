import * as yup from 'yup';

export const schemaAddMyPetForm = yup.object({
  petName: yup
    .string()
    // .matches(/^[a-zA-Z0-9А-Яа-яЁё ]+$/u, 'Name can contain only letters, spaces and numbers.')
    .matches(/^[a-zA-ZА-Яа-яЁё ]+$/u, 'Name can contain only letters and spaces.')
    .min(2, 'The name must contain more than 2 characters')
    .max(20, 'Maximum name length 20 characters')
    .required('This field is required!'),

  petBirth: yup
    .string()
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      'Date does not exist or date format not supported (DD.MM.YYYY)'
    )
    .test('date', 'Date must be after 01.01.1900 and before today', value => {
      const [day, month, year] = value.split('.');
      const parsedDate = new Date(`${year}-${month}-${day}`);
      const currentDate = new Date();
      if (
        isNaN(parsedDate.getTime()) ||
        parsedDate < new Date('1900-01-01') ||
        parsedDate > currentDate
      ) {
        return false;
      }
      return true;
    })
    .required('This field is required!'),

  petBreed: yup
    .string()
    .matches(/^[a-zA-ZА-Яа-яЁё ]+$/u, 'Breed can contain only letters and spaces.')
    .min(2, 'Breed must contain more than 2 characters')
    .max(50, 'Maximum breed length 50 characters')
    .required('This field is required!'),

  myPetURL: yup.mixed().required('This field is required!'),

  comments: yup
    .string()
    .required('This field is required!')
    .min(8, 'The comment must contain more than 8 characters')
    .max(120, 'Maximum comment length 120 characters'),
});
