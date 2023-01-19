import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export enum Language {
  en = 'en',
  ar = 'ar',
}
export type UserSlice = {
  userId: string;
  userName: string;
  language?: Language;
  portalId: string;
  country: string;
  userFirstName: string;
  portalTitle: string;
  isAddingAccounts: boolean;
  timeZone: string;
  grade: string;
};

const initialState: UserSlice = {
  userId: '',
  userName: '',
  language: Language.en,
  portalId: '',
  country: '',
  userFirstName: '',
  portalTitle: '',
  isAddingAccounts: false,
  timeZone: '',
  grade: '',
};

const setUserData = (state: UserSlice, action: PayloadAction<UserSlice>) => ({
  ...state,
  ...action.payload,
});

const setUserLanguage = (
  state: UserSlice,
  action: PayloadAction<{ language: Language }>
) => ({ ...state, language: action.payload.language });

const setIsAddingAccounts = (
  state: UserSlice,
  action: PayloadAction<{ isAddingAccounts: boolean }>
) => ({
  ...state,
  isAddingAccounts: action.payload.isAddingAccounts,
});

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserData,
    setUserLanguage,
    setIsAddingAccounts,
  },
});

export const userActions = userSlice.actions;
export default userSlice;
