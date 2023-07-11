import { configureStore } from '@reduxjs/toolkit';
import { profileReducer } from './reducer/profile-reducer';
import { dialogsReducer } from './reducer/dialogs-reducer';

const reducer = {
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
};

export const store = configureStore({ reducer });
