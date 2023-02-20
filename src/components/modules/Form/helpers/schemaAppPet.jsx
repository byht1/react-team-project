import * as yup from 'yup';

export const schemaAddPet = yup.object({
  // tittle: yup
  //   .string()
  //   .min(2, 'Must be at least 2 letters')
  //   .max(48, 'Cannot be more than 48 letters')
  //   .matches(/^[a-zA-Zа-яА-Я\s]*$/, 'Name must contain only letters and spaces')
  //   .required('Field is required'),
  // name: yup
  //   .string()
  //   .min(2, 'Must be at least 2 letters')
  //   .max(16, 'Cannot be more than 16 letters')
  //   .matches(/^[a-zA-Zа-яА-Я\s]*$/, 'Name must contain only letters and spaces'),
  // bread: yup
  //   .string()
  //   .min(2, 'Must be at least 2 letters')
  //   .max(50, 'Cannot be more than 50 letters')
  //   .matches(/^[a-zA-Zа-яА-Я\s]*$/, 'Name must contain only letters and spaces'),
  // birthday: yup
  //   .string()
  //   .matches(
  //     /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[012])\.\d{4}$/,
  //     'Date must be in the format DD.MM.YYYY'
  //   )
  //   .test('date', 'Date must be after 01.01.1990 and before today', value => {
  //     const [day, month, year] = value.split('.');
  //     const parsedDate = new Date(`${year}-${month}-${day}`);
  //     const currentDate = new Date();
  //     if (
  //       isNaN(parsedDate.getTime()) ||
  //       parsedDate < new Date('1990-01-01') ||
  //       parsedDate > currentDate
  //     ) {
  //       return false;
  //     }
  //     return true;
  //   })
  //   .required('Date is required'),
  // location: yup
  //   .string()
  //   .required('City and region are required')
  //   .matches(
  //     /^[a-zA-Zа-яА-ЯёЁ\s]+,[a-zA-Zа-яА-ЯёЁ\s]+$/,
  //     'Location must be in the format City, Region'
  //   )
  //   .required('Field is required'),
  // price: yup
  //   .string()
  //   .matches(/^\d+(\.\d{1,2})? uah$/, "Price must be in the format of '150 uah'")
  //   .required('Price is required'),
  // comments: yup
  //   .string()
  //   .min(8, 'Must be at least 8 letters')
  //   .max(120, 'Cannot be more than 120 letters')
  //   .required('Comments are required'),
  // picture: yup
  //   .mixed()
  //   .test('fileSize', 'File size is too large', value => {
  //     if (!value) return true; // handle empty input
  //     return value.size <= 1024 * 1024; // max size is 1 MB
  //   })
  //   .test('fileType', 'Unsupported File Format', value => {
  //     if (!value) return true; // handle empty input
  //     const supportedFormats = ['image/jpeg', 'image/png', 'application/pdf'];
  //     return supportedFormats.includes(value.type);
  //   }),
});
