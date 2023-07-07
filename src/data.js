import { dialogsReducer } from './reducer/dialogs-reducer';
import { profileReducer } from './reducer/profile-reducer';

export const store = {
  _state: {
    profilePage: {
      posts: [
        { message: "It's my first post.", counter: 20, id: 0 },
        { message: 'I have a cat. Her name is Muska.', counter: 35, id: 1 },
      ],
      newPost: '',
    },
    dialogsPage: {
      dialogs: [
        { name: 'Alex', ava: 'image/ava/alex.jpg', id: 0 },
        { name: 'Nastya', ava: 'image/ava/nastya.jpg', id: 1 },
        { name: 'Maksim', ava: 'image/ava/maksim.jpg', id: 2 },
        { name: 'Sveta', ava: 'image/ava/sveta.jpg', id: 3 },
      ],
      messages: [
        { text: 'Hi!', user: 'Alex', id: 0 },
        { text: 'Hi! How are you?', user: 'I', id: 1 },
        { text: "I'm fine, thanks, and you?", user: 'Alex', id: 2 },
        { text: "I'm good!", user: 'I', id: 3 },
      ],
      newMessage: '',
    },
  },

  _callSubscriber: {},

  getState() {
    return this._state;
  },

  subscribe(subscriber) {
    this._callSubscriber = subscriber;
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._callSubscriber(this._state);
  },
};
