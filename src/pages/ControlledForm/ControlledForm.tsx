import styles from './ControlledForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SetStateAction, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  age: number;
  password: string;
  gender: NonNullable<'male' | 'female' | 'other'>;
  image: string;
  terms: boolean;
  country: NonNullable<'India' | 'Brazil' | 'Australia' | 'China' | 'Canada'>;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
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
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password cannot exceed 16 characters')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}:;"'<>,.?/~`\\|-]).+$/,
      'Password must include one number, one uppercase letter, one lowercase letter, and one special character',
    ),
  gender: yup
    .mixed<'male' | 'female' | 'other'>()
    .oneOf(['male', 'female', 'other'])
    .required('Gender is a required field'),
  image: yup.string().required('Image is required'),
  terms: yup.boolean().oneOf([true]).required('Image is required'),
  country: yup
    .mixed<'India' | 'Brazil' | 'Australia' | 'China' | 'Canada'>()
    .oneOf(['India', 'Brazil', 'Australia', 'China', 'Canada'])
    .required('Country is a required field'),
});

function ControlledForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [country, setCountry] = useState('');

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCountry(event.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' placeholder='Name' {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          placeholder='Email'
          {...register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor='age'>Age</label>
        <input type='number' id='age' placeholder='Age' {...register('age')} />
        {errors.age && <p>{errors.age.message}</p>}

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='Password'
          {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label htmlFor='password2'>Accept Password</label>
        <input
          type='password'
          id='password2'
          placeholder='Accept Password'
          {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label htmlFor='gender'>Gender</label>
        <select id='gender' {...register('gender')}>
          <option value='male'>male</option>
          <option value='female'>female</option>
          <option value='other'>other</option>
        </select>
        {errors.gender && <p>{errors.gender.message}</p>}

        <label htmlFor='image'>Image</label>
        <input
          type='file'
          id='image'
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {};
              reader.readAsDataURL(file);
            }
          }}
        />
        {errors.image && <p>{errors.image.message}</p>}

        <label htmlFor='country'>Country</label>
        <input
          type='text'
          id='country'
          value={country}
          {...register('country')}
          onChange={handleChange}
        />
        {errors.country && <p>{errors.country.message}</p>}

        <div className={styles.terms}>
          <label htmlFor='terms'>Accept Terms and Conditions agreement</label>
          <input type='checkbox' id='terms' {...register('terms')} />
        </div>
        {errors.terms && <p>{errors.terms.message}</p>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ControlledForm;
