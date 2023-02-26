import * as yup from 'yup';

export const schemaAddMyPetForm = yup.object({
  petName: yup
    .string()
    .matches(/^[a-zA-ZА-Яа-яЁёЇїІіЄєҐґ' ]+$/u, 'Name can contain only letters and spaces.')
    .min(2, 'The name must contain more than 2 characters')
    .max(20, 'Maximum name length 20 characters')
    .required('This field is required!'),

  birthday: yup
    .date()
    .typeError('Date format must be dd.mm.yyyy')
    .transform((value, originalValue) => {
      // преобразуем значение даты из строки в объект Date
      const date = new Date(originalValue);
      // если дата не прошла преобразование, возвращаем null
      return isNaN(date) ? null : date;
    })
    .min(new Date('1989-12-01'), 'Date must be after 01.01.1990')
    .max(new Date(), 'Date cannot be in the future')
    .test('is-valid-date', 'Invalid date', function (value) {
      // проверяем, что дата не равна null и является допустимой
      if (!value) return false;
      const day = value.getDate();
      const month = value.getMonth() + 1;
      const year = value.getFullYear();
      if (month === 2 && day > 29) {
        // проверяем, что високосный год
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          return false;
        }
        // иначе некорректная дата
        return true;
      }
      return true;
    }),
  petBreed: yup
    .string()
    .matches(/^[a-zA-ZА-Яа-яЁёЇїІіЄєҐґ' ]+$/u, 'Breed can contain only letters and spaces.')
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
