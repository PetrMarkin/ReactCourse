import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
  name: string;
  email: string;
  age: number;
  password: string;
  gender: string;
  image: string;
  terms: boolean;
  selectedCountry?: string;
  isActive?: boolean;
}

const initialState: FormState = {
  name: '',
  email: '',
  age: 0,
  password: '',
  gender: '',
  image: '',
  terms: false,
  selectedCountry: '',
  isActive: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    setTerms: (state, action: PayloadAction<boolean>) => {
      state.terms = action.payload;
    },
    setSelectedCountry: (state, action: PayloadAction<string>) => {
      state.selectedCountry = action.payload;
    },
    setIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const {
  setName,
  setEmail,
  setAge,
  setPassword,
  setGender,
  setImage,
  setTerms,
  setSelectedCountry,
  setIsActive,
} = formSlice.actions;

export default formSlice.reducer;
