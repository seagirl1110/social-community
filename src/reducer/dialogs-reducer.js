const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessage: action.text,
      };
    case SEND_MESSAGE:
      const message = {
        text: state.newMessage,
        user: 'I',
        id: state.messages.length,
      };
      return {
        ...state,
        messages: [...state.messages, message],
        newMessage: '',
      };
    default:
      return state;
  }
};

export const updateNewMessageAC = (text) => ({ type: UPDATE_NEW_MESSAGE, text });
export const sendMessageAC = () => ({ type: SEND_MESSAGE });
