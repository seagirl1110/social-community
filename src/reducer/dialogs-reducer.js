const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      state.newMessage = action.text;
      return state;
    case SEND_MESSAGE:
      const message = {
        text: state.newMessage,
        user: 'I',
        id: state.messages.length,
      };
      state.messages.push(message);
      state.newMessage = '';
      return state;
    default:
      return state;
  }
};

export const updateNewMessage = (text) => ({ type: UPDATE_NEW_MESSAGE, text });
export const sendMessage = () => ({ type: SEND_MESSAGE });
