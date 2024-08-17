export interface Form {
  id?: string;
  name: string;
  email: string;
  age: number;
  password: string;
  gender: 'male' | 'female' | 'other';
  image: string;
  terms: boolean;
  country: string;
}

export interface FormState {
  forms: Form[];
}

export interface LocationState {
  lastFormId?: string;
}
