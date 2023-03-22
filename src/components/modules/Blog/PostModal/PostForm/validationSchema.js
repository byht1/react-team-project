import * as yup from 'yup';

export const validationSchema = yup.object({
    title: yup.string()
    .min(2, 'Title must contain more than 2 characters')
    .max(60, 'Maximum title length 60 characters')
    .required('This field is required!'),

    category: yup.string()
    .min(2, 'Category must contain more than 2 characters')
    .max(14, 'Maximum category length 14 characters')
    .required('This field is required!'),

    text: yup.string()
    .min(8, 'Text must contain more than 8 characters')
    .max(2000, 'Maximum text length 2000 characters')
    .required('This field is required!'),

    image: yup
    .mixed()
    .test('fileType', 'Unsupported photo format', value => {
      if (!value) return true;
      const supportedFormats = ['image/jpeg', 'image/png', 'image/webp'];
      return supportedFormats.includes(value[0]?.type);
    }).required('Image is required!'),
});