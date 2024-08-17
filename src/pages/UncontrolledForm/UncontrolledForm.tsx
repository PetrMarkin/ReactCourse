import { FormEvent, useRef, useState } from 'react';
import { addForm } from '../../store/formSlice';
import styles from './UncontrolledForm.module.css';
import { useDispatch } from 'react-redux';
import { ValidationError } from 'yup';
import { useNavigate } from 'react-router-dom';
import { schema } from '../../helpers/yupShema';
import { convertToBase64 } from '../../helpers/convertImage';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Country } from '../../store/countrySlice';
import Select from 'react-select';
import { evaluatePasswordStrength } from '../../helpers/evaluatePasswordStrength';

function UncontrolledForm() {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [passwordStrength, setPasswordStrength] = useState('weak');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector(
    (state: RootState) => state.countries.countries,
  );

  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const genderRef = useRef<HTMLSelectElement | null>(null);
  const countryRef = useRef<{ value: string; label: string } | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const termsRef = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = {
      id: Date.now().toString(),
      name: nameRef.current?.value || '',
      age: Number(ageRef.current?.value),
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      confirmPassword: confirmPasswordRef.current?.value || '',
      gender: genderRef.current?.value as 'male' | 'female' | 'other',
      country: countryRef.current?.value as Country,
      terms: termsRef.current?.checked || false,
      image: fileRef.current?.files?.[0],
    };

    const isFormValid = await schema.isValid(formData);

    if (isFormValid) {
      if (formData.image instanceof File) {
        const image2Base64 = await convertToBase64(formData.image);
        const newData = { ...formData, image: image2Base64 };
        dispatch(addForm(newData));
        navigate('/', { state: { lastFormId: newData.id } });
      } else {
        throw new Error('Invalid picture type');
      }
    }

    if (!isFormValid) {
      await schema.validate(formData, { abortEarly: false }).catch((err) => {
        if (err instanceof ValidationError) {
          const errors: Record<string, string> = {};
          err.inner.forEach((item) => {
            if (item.path) {
              errors[item.path] = item.message;
              setErrors(errors);
              console.log(errors);
            }
          });
        }
      });
    }
  }

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordStrength(evaluatePasswordStrength(e.target.value));
  };

  const countryOptions = countries.map((country) => ({
    value: country,
    label: country,
  }));

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor='name'>Enter name</label>
        <input type='text' id='name' placeholder='name' ref={nameRef} />
        {errors.name && <p className={styles.errors}>{errors.name}</p>}

        <label htmlFor='age'>Enter age</label>
        <input type='number' id='age' placeholder='age' ref={ageRef} />
        {errors.age && <p className={styles.errors}>{errors.age}</p>}

        <label htmlFor='email'>Enter email</label>
        <input type='email' id='email' placeholder='email' ref={emailRef} />
        {errors.email && <p className={styles.errors}>{errors.email}</p>}

        <label htmlFor='password'>Enter password</label>
        <input
          type='password'
          id='password'
          placeholder='password'
          onChange={(event) => {
            passwordChange(event);
          }}
          ref={passwordRef}
          autoComplete='on'
        />
        {errors.password && <p className={styles.errors}>{errors.password}</p>}
        <div
          className={`${styles.passwordStrength} ${styles[passwordStrength]}`}
        >
          {passwordStrength}
        </div>

        <label htmlFor='confirmPassword'>Repeat password</label>
        <input
          type='password'
          id='confirmPassword'
          placeholder='confirm password'
          ref={confirmPasswordRef}
          autoComplete='on'
        />
        {errors.confirmPassword && (
          <p className={styles.errors}>{errors.confirmPassword}</p>
        )}

        <label htmlFor='gender'>Select gender:</label>
        <select id='gender' ref={genderRef}>
          <option value='male'>male</option>
          <option value='female'>female</option>
          <option value='other'>other</option>
        </select>
        {errors.gender && <p className={styles.errors}>{errors.gender}</p>}

        <label htmlFor='country'>Select country:</label>
        <Select
          inputId='country'
          options={countryOptions}
          placeholder='Select your country'
          onChange={(selectedOption) => (countryRef.current = selectedOption)}
          className={errors.country ? styles.error : ''}
        />
        {errors.country && <p className={styles.errors}>{errors.country}</p>}

        <label htmlFor='file'>Upload picture:</label>
        <input type='file' id='file' accept='.jpg, .jpeg, .png' ref={fileRef} />
        {errors.image && <p className={styles.errors}>{errors.image}</p>}

        <div className={styles.terms}>
          <label htmlFor='terms'>Accept Terms and Conditions agreement</label>
          <input type='checkbox' id='terms' ref={termsRef} />
          {errors.terms && <p className={styles.errors}>{errors.terms}</p>}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
