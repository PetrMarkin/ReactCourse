import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field')
    .matches(/^[A-Z][a-z]*$/, 'First letter should be uppercased'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is a required field'),
  age: yup
    .number()
    .positive('Age must be positive')
    .integer('Age must be an integer')
    .required('Age is a required field'),
  password: yup.string().required('Password is a required field'),
  confirmPassword: yup
    .string()
    .required('Password is a required field')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  gender: yup
    .mixed<'male' | 'female' | 'other'>()
    .oneOf(['male', 'female', 'other'])
    .required('Gender is a required field'),
  image: yup.string().required('Image is required'),
  terms: yup
    .boolean()
    .oneOf([true], 'You must accept the terms')
    .required('You must accept the terms'),
  country: yup.string().required('Country is required'),
});
