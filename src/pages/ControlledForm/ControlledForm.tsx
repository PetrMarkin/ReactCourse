import styles from './ControlledForm.module.css';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addForm } from '../../store/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../helpers/interfaces';
import { schema } from '../../helpers/yupShema';
import { convertToBase64 } from '../../helpers/convertImage';
import { RootState } from '../../store/store';
import Select, { SingleValue } from 'react-select';
import { evaluatePasswordStrength } from '../../helpers/evaluatePasswordStrength';
import { useState } from 'react';

function ControlledForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const countries = useSelector(
    (state: RootState) => state.countries.countries,
  );

  const [passwordStrength, setPasswordStrength] = useState('weak');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordStrength(evaluatePasswordStrength(e.target.value));
  };

  const onSubmit = (data: Form) => {
    const formDataWithId = {
      ...data,
      id: Date.now().toString(),
    };
    dispatch(addForm(formDataWithId));
    navigate('/', { state: { lastFormId: formDataWithId.id } });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setValue('image', base64, { shouldValidate: true });
    }
  };

  const countryOptions = countries.map((country) => ({
    value: country,
    label: country,
  }));

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' placeholder='Name' {...register('name')} />
        {errors.name && <p className={styles.errors}>{errors.name.message}</p>}

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          placeholder='Email'
          {...register('email')}
        />
        {errors.email && (
          <p className={styles.errors}>{errors.email.message}</p>
        )}

        <label htmlFor='age'>Age</label>
        <input type='number' id='age' placeholder='Age' {...register('age')} />
        {errors.age && <p className={styles.errors}>{errors.age.message}</p>}

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='Password'
          {...register('password')}
          onChange={(event) => {
            passwordChange(event);
          }}
          autoComplete='on'
          required
        />
        {errors.password && (
          <p className={styles.errors}>{errors.password.message}</p>
        )}
        <div
          className={`${styles.passwordStrength} ${styles[passwordStrength]}`}
        >
          {passwordStrength}
        </div>

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          type='password'
          id='confirmPassword'
          placeholder='Confirm Password'
          {...register('confirmPassword')}
          autoComplete='on'
          required
        />
        {errors.confirmPassword && (
          <p className={styles.errors}>{errors.confirmPassword.message}</p>
        )}

        <label htmlFor='gender'>Gender</label>
        <select id='gender' {...register('gender')}>
          <option value='male'>male</option>
          <option value='female'>female</option>
          <option value='other'>other</option>
        </select>
        {errors.gender && (
          <p className={styles.errors}>{errors.gender.message}</p>
        )}

        <label htmlFor='country'>Select country:</label>
        <Controller
          name='country'
          control={control}
          rules={{ required: 'Country is required' }}
          render={({ field }) => (
            <Select
              {...field}
              inputId='country'
              options={countryOptions}
              placeholder='Select your country'
              className={errors.country ? styles.error : ''}
              onChange={(
                option: SingleValue<{ value: string; label: string }>,
              ) => field.onChange(option ? option.value : '')}
              value={
                countryOptions.find((option) => option.value === field.value) ||
                null
              }
            />
          )}
        />
        {errors.country && (
          <p className={styles.errors}>{errors.country.message}</p>
        )}

        <label htmlFor='image'>Image</label>
        <input
          type='file'
          id='file'
          accept='.jpg, .jpeg, .png'
          onChange={handleImageUpload}
        />
        {errors.image && (
          <p className={styles.errors}>{errors.image.message}</p>
        )}

        <div className={styles.terms}>
          <label htmlFor='terms'>Accept Terms and Conditions agreement</label>
          <input type='checkbox' id='terms' {...register('terms')} />
        </div>
        {errors.terms && (
          <p className={styles.errors}>{errors.terms.message}</p>
        )}

        <button type='submit' disabled={!isValid || isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ControlledForm;
