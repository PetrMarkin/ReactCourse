import React, { useRef, useState } from 'react';
import * as yup from 'yup';
import {
  setName,
  setAge,
  setEmail,
  setPassword,
  setGender,
  setImage,
  setTerms,
  setIsActive,
  FormState,
} from '../../store/formSlice';
import styles from './UncontrolledForm.module.css';
import { useDispatch } from 'react-redux';

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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is a required field'),
  gender: yup
    .mixed<'male' | 'female' | 'other'>()
    .oneOf(['male', 'female', 'other'])
    .required('Gender is a required field'),
  image: yup.string().required('Image is required'),
  terms: yup.boolean().oneOf([true], 'You must accept the terms'),
});

function UncontrolledForm() {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch = useDispatch();

  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const password1Ref = useRef<HTMLInputElement | null>(null);
  const password2Ref = useRef<HTMLInputElement | null>(null);
  const genderRef = useRef<HTMLSelectElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const termsRef = useRef<HTMLInputElement | null>(null);

  const validateForm = async () => {
    const values = {
      name: nameRef.current?.value || '',
      email: emailRef.current?.value || '',
      age: ageRef.current?.value ? Number(ageRef.current.value) : 0,
      password: password1Ref.current?.value || '',
      confirmPassword: password2Ref.current?.value || '',
      gender: genderRef.current?.value || '',
      image: '',
      terms: termsRef.current?.checked || false,
    };

    try {
      await schema.validate(values, { abortEarly: false });
      handleSubmit(values);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        err.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
        setErrors(validationErrors);
      }
    }
  };

  const handleSubmit = (values: FormState) => {
    const { name, age, email, password, gender, terms } = values;
    const file = fileRef.current?.files ? fileRef.current.files[0] : null;

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          const imageBase64 = reader.result.toString();
          dispatch(setName(name));
          dispatch(setAge(age));
          dispatch(setEmail(email));
          dispatch(setPassword(password));
          dispatch(setGender(gender));
          dispatch(setImage(imageBase64));
          dispatch(setTerms(terms));
          dispatch(setIsActive(true));
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert('No file selected');
    }
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await validateForm();
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmitForm}>
        <label htmlFor='name'>Enter name</label>
        <input type='text' id='name' placeholder='name' ref={nameRef} />
        {errors.name && <p>{errors.name}</p>}

        <label htmlFor='age'>Enter age</label>
        <input type='number' id='age' placeholder='age' ref={ageRef} />
        {errors.age && <p>{errors.age}</p>}

        <label htmlFor='email'>Enter email</label>
        <input type='email' id='email' placeholder='email' ref={emailRef} />
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor='password1'>Enter password</label>
        <input
          type='password'
          id='password1'
          placeholder='password'
          ref={password1Ref}
        />
        {errors.password && <p>{errors.password}</p>}

        <label htmlFor='password2'>Repeat password</label>
        <input
          type='password'
          id='password2'
          placeholder='confirm password'
          ref={password2Ref}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <label htmlFor='gender'>Select gender:</label>
        <select id='gender' ref={genderRef}>
          <option value='male'>male</option>
          <option value='female'>female</option>
          <option value='other'>other</option>
        </select>
        {errors.gender && <p>{errors.gender}</p>}

        <label htmlFor='file'>Upload picture:</label>
        <input type='file' id='file' accept='.jpg, .jpeg, .png' ref={fileRef} />

        <div className={styles.terms}>
          <label htmlFor='terms'>Accept Terms and Conditions agreement</label>
          <input type='checkbox' id='terms' ref={termsRef} />
          {errors.terms && <p>{errors.terms}</p>}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
