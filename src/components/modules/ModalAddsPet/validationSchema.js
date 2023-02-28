import * as yup from 'yup';

export const schemaAddMyPetForm = yup.object({
  petName: yup
    .string()
    .matches(
      /^[A-Za-zА-Яа-яЁёҐґІіЇїЄє\s,'"'-.]+(?:\s+[A-Za-zА-Яа-яЁёҐґІіЇїЄє]+){0,3}$/u,
      'Name can contain only letters and spaces.'
    )
    .min(2, 'The name must contain more than 2 characters')
    .max(20, 'Maximum name length 20 characters')
    .required('This field is required!'),

  petBreed: yup
    .string()
    .matches(
      /^[A-Za-zА-Яа-яЁёҐґІіЇїЄє\s,'"'-.]+(?:\s+[A-Za-zА-Яа-яЁёҐґІіЇїЄє]+){0,3}$/u,
      'Breed can contain only letters and spaces.'
    )
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
