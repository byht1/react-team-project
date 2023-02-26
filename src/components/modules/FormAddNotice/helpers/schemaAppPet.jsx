import * as yup from 'yup';

export const schemaAddPet = yup.object({
  sex: yup.string().required('Sex is required'),
  title: yup
    .string()
    .min(2, 'Must be at least 2 letters')
    .max(48, 'Cannot be more than 48 letters')
    .matches(/^[a-zA-Zа-яА-Я\s]*$/, 'Name must contain only letters and spaces')
    .required('Field is required'),
  name: yup
    .string()
    .min(2, 'Must be at least 2 letters')
    .max(16, 'Cannot be more than 16 letters')
    .matches(/^[a-zA-Zа-яА-Я\s]*$/, 'Name must contain only letters and spaces'),
  breed: yup
    .string()
    .min(2, 'Must be at least 2 letters')
    .max(50, 'Cannot be more than 50 letters')
    .matches(/^[a-zA-Zа-яА-Я\s]*$/, 'Name must contain only letters and spaces'),
  birthday: yup
    .date()
    .typeError('Date format must be dd.mm.yyyy')
    .transform((value, originalValue) => {
      // преобразуем значение даты из строки в объект Date
      const date = new Date(originalValue);
      // если дата не прошла преобразование, возвращаем null
      return isNaN(date) ? null : date;
    })
    .min(new Date('1990-01-01'), 'Date must be after 01.01.1990')
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
  ///////////// .matches(
  //   /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[012])\.\d{4}$/,
  //   'Date is required and must be in the format DD.MM.YYYY'
  // ),
  // .test('birthday', 'Date must be after 01.01.1990 and before today', date => {
  //   console.log(date);
  //   const value = dateConverter(date);
  //   const [day, month, year] = value.split('.');
  //   const parsedDate = new Date(`${year}-${month}-${day}`);
  //   const currentDate = new Date();
  //   if (
  //     isNaN(parsedDate.getTime()) ||
  //     parsedDate < new Date('1990-01-01') ||
  //     parsedDate > currentDate
  //   ) {
  //     return false;
  //   }
  //   return true;
  // })
  //////////////// .required('Date is required'),
  location: yup
    .string()
    .required('City and region are required')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ\s-]+,[a-zA-Zа-яА-ЯёЁ\s-]+$/,
      'Location must be in the format City, Region'
    )
    .required('Field is required'),
  // price: yup.string().matches(/^\d+(\.\d{1,2})? uah$/, "Price must be in the format of '150 uah'"),
  category: yup.string(),
  price: yup
    .number()
    .nullable()
    .typeError('Invalid price')
    .test(
      'not-starting-with-zero',
      'Price cannot start with zero',
      value => value === null || value === undefined || value.toString()[0] !== '0'
    ),

  comments: yup
    .string()
    .min(8, 'Must be at least 8 letters')
    .max(120, 'Cannot be more than 120 letters')
    .required('Comments are required'),
  images: yup
    .mixed()
    //////////////// .test('required', 'You need to provide a file', file => {
    //   // if (!file) return true;
    //   // return false;
    // })
    // .test('fileSize', 'The file is too large', file => {
    //   //if u want to allow only certain file sizes
    //   return file && file.size <= 2000000;
    // })
    // .test('fileSize', 'File size is too large', value => {
    //   if (!value) return true; // handle empty input
    //   return value.size <= 1024 * 1024; // max size is 1 MB
    /////////////////// })
    .test('fileType', 'You need to add photo or unsupported photo format', value => {
      if (!value) return true; // handle empty input
      const supportedFormats = ['image/jpeg', 'image/png', 'application/pdf'];
      return supportedFormats.includes(value[0]?.type);
    }),
});
