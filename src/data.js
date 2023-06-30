export const store = {
  _state: {
    myPosts: {
      posts: [
        { message: "It's my first post.", counter: 20, id: 0 },
        { message: 'I have a cat. Her name is Muska.', counter: 35, id: 1 },
      ],
      newPost: '',
    },
    dialogs: [
      { name: 'Alex', ava: 'image/ava/alex.jpg', id: 1 },
      { name: 'Nastya', ava: 'image/ava/nastya.jpg', id: 2 },
      { name: 'Maksim', ava: 'image/ava/maksim.jpg', id: 3 },
      { name: 'Sveta', ava: 'image/ava/sveta.jpg', id: 4 },
    ],
    messages: [
      { text: 'Hi!', user: 'Alex', id: 1 },
      { text: 'Hi! How are you?', user: 'I', id: 2 },
      { text: "I'm fine, thanks, and you?", user: 'Alex', id: 3 },
      { text: "I'm good!", user: 'I', id: 4 },
    ],
  },

  _callSubscriber: {},

  getState() {
    return this._state;
  },

  subscribe(subscriber) {
    this._callSubscriber = subscriber;
  },

  updateNewPost(text) {
    this._state.myPosts.newPost = text;
    this._callSubscriber(this._state);
  },

  addPost(text) {
    const post = {
      message: text,
      counter: 0,
      id: this._state.myPosts.posts.length,
    };
    this._state.myPosts.posts.push(post);
    this._callSubscriber(this._state);
  },
};
