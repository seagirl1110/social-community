const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const store = {
  _state: {
    myPosts: {
      posts: [
        { message: "It's my first post.", counter: 20, id: 0 },
        { message: 'I have a cat. Her name is Muska.', counter: 35, id: 1 },
      ],
      newPost: '',
    },
    myDialogs: {
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

  _updateNewPost(text) {
    this._state.myPosts.newPost = text;
    this._callSubscriber(this._state);
  },

  _addPost() {
    const post = {
      message: this._state.myPosts.newPost,
      counter: 0,
      id: this._state.myPosts.posts.length,
    };
    this._state.myPosts.posts.push(post);
    this._updateNewPost('');
  },

  _updateNewMessage(text) {
    this._state.myDialogs.newMessage = text;
    this._callSubscriber(this._state);
  },

  _sendMessage() {
    const message = {
      text: this._state.myDialogs.newMessage,
      user: 'I',
      id: this._state.myDialogs.messages.length,
    };
    this._state.myDialogs.messages.push(message);
    this._updateNewMessage('');
  },

  getState() {
    return this._state;
  },

  subscribe(subscriber) {
    this._callSubscriber = subscriber;
  },

  dispatch(action) {
    if (action.type === UPDATE_NEW_POST) {
      this._updateNewPost(action.text);
    } else if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._updateNewMessage(action.text);
    } else if ((action.type = SEND_MESSAGE)) {
      this._sendMessage();
    }
  },
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPost = (text) => ({ type: UPDATE_NEW_POST, text });

export const updateNewMessage = (text) => ({ type: UPDATE_NEW_MESSAGE, text });
export const sendMessage = () => ({ type: SEND_MESSAGE });
