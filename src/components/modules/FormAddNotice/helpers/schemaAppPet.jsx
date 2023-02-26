import * as yup from 'yup';

export const schemaAddPet = yup.object({
  sex: yup.string().required('Sex is required'),
  title: yup
    .string()
    .min(2, 'Must be at least 2 letters')
    .max(48, 'Cannot be more than 48 letters')
    .matches(/^[a-zA-Zа-яА-ЯёЁІіЇїҐґ\s-]*$/, 'Name must contain only letters and spaces')
    .required('Field is required'),
  name: yup
    .string()
    .min(2, 'Must be at least 2 letters')
    .max(16, 'Cannot be more than 16 letters')
    .matches(/^[a-zA-Zа-яА-ЯёЁІіЇїҐґ\s-]*$/, 'Name must contain only letters and spaces'),
  breed: yup
    .string()
    .min(2, 'Must be at least 2 letters')
    .max(50, 'Cannot be more than 50 letters')
    .matches(/^[a-zA-Zа-яА-ЯёЁІіЇїҐґ\s-]*$/, 'Name must contain only letters and spaces'),
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
  location: yup
    .string()
    .required('City and region are required')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁІіЇїҐґ\s-]+,[a-zA-Zа-яА-ЯёЁІіЇїҐґ\s-]+$/,
      'Location must be in the format City, Region'
    )
    .required('Field is required'),
  category: yup.string(),
  price: yup
    .number()
    .typeError('Price is required and must be a number')
    .nullable()
    .test('no-leading-zero', 'Leading zero is not allowed', (value, context) => {
      if (context.originalValue === undefined) return true;
      return context.originalValue && !context.originalValue.startsWith('0');
    }),
  comments: yup
    .string()
    .min(8, 'Must be at least 8 letters')
    .max(120, 'Cannot be more than 120 letters'),
  images: yup
    .mixed()
    .test('fileType', 'You need to add photo or unsupported photo format', value => {
      if (!value) return true; // handle empty input
      const supportedFormats = ['image/jpeg', 'image/png', 'application/pdf'];
      return supportedFormats.includes(value[0]?.type);
    }),
});
