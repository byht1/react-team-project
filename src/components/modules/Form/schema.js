import * as yup from 'yup';

export const schemaAddPet = yup.object({
  //   tittle: yup
  //     .string()
  //     .min(2, 'Must be at least 2 letters')
  //     .max(48, 'Cannot be more than 16 letters')
  //     .matches(/^[a-zA-Z]+$/, 'Only letters are allowed')
  //     .required('Field is required'),
  //   petName: yup
  //     .string()
  //     .min(2, 'Must be at least 2 letters')
  //     .max(16, 'Cannot be more than 16 letters')
  //     .matches(/^[a-zA-Z]+$/, 'Only letters are allowed')
  //     .required('Field is required'),
  //   petBreed: yup
  //     .string()
  //     .min(2, 'Must be at least 2 letters')
  //     .max(50, 'Cannot be more than 16 letters')
  //     .matches(/^[a-zA-Z]+$/, 'Only letters are allowed')
  //     .required('Field is required'),
  //   petBirth: yup
  //     .string()
  //     .required('Date is required')
  //     .matches(/^[0-9]{2}\.[0-9]{2}\.[0-9]{2}$/, 'Date must be in the format dd.mm.yy')
  //     .min(new Date('2000-01-01'), 'Date must be after 01.01.2000')
  //     .max(new Date('2030-12-31'), 'Date must be before 31.12.2030'),
  //   location: yup
  //     .string()
  //     .required('City and region are required')
  //     .matches(
  //       /^[a-zA-Zа-яА-ЯёЁ\s]+,[a-zA-Zа-яА-ЯёЁ\s]+$/,
  //       'Location must be in the format City, Region'
  //     )
  //     .required('Field is required'),
  //   price: yup.number().typeError('Please enter a valid number').required('Price is required'),
  //   comments: yup
  //     .string()
  //     .matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/, 'Invalid characters'),
  /////////// // photo: yup
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
