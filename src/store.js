import { configureStore } from '@reduxjs/toolkit';
import { profileReducer } from './reducer/profile-reducer';
import { dialogsReducer } from './reducer/dialogs-reducer';
import { usersReduser } from './reducer/users-reducer';

const reducer = {
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReduser,
};

export const store = configureStore({ reducer });
