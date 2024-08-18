import * as yup from 'yup';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field')
    .matches(/^[A-ZА-ЯЁ][a-zа-яё]+$/, 'First letter should be uppercased'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is a required field'),
  age: yup
    .number()
    .positive('Age must be positive')
    .integer('Age must be an integer')
    .required('Age is a required field'),
  password: yup
    .string()
    .required('Password is a required field')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: yup
    .string()
    .required('Password is a required field')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  gender: yup
    .mixed<'male' | 'female' | 'other'>()
    .oneOf(['male', 'female', 'other'])
    .required('Gender is a required field'),
  image: yup
    .mixed<File | FileList>()
    .required('Image is required')
    .test(
      'fileSize',
      'File exceeds the maximum supported size of 3 MB',
      (value) => {
        if (value instanceof File) {
          if (!value) return false;
          return value && value.size <= 1024 * 1024 * 3;
        }
        if (value instanceof FileList) {
          if (!value[0]) return false;
          return value && value[0].size <= 1024 * 1024 * 3;
        }
      },
    )
    .test(
      'is-valid-type',
      'Invalid file extension. Allow downloading only files in PNG, JPG formats.',
      (value) => {
        if (!value) return false;
        if (value instanceof File) {
          if (!value) return false;
          return value && SUPPORTED_FORMATS.includes(value.type);
        }
        if (value instanceof FileList) {
          if (!value[0]) return false;
          return value && SUPPORTED_FORMATS.includes(value[0].type);
        }
      },
    ),
  terms: yup
    .boolean()
    .oneOf([true], 'You must accept the terms')
    .required('You must accept the terms'),
  country: yup.string().required('Country is required'),
});
