import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Form, FormState } from '../helpers/interfaces';

const initialState: FormState = {
  forms: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm: (state, action: PayloadAction<Form>) => {
      state.forms.push(action.payload);
    },
  },
});

export const { addForm } = formSlice.actions;
export default formSlice.reducer;
