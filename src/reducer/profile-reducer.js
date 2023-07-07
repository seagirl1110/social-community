const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

export const profileReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST:
      state.newPost = action.text;
      return state;
    case ADD_POST:
      const post = {
        message: state.newPost,
        counter: 0,
        id: state.posts.length,
      };
      state.posts.push(post);
      state.newPost = '';
      return state;
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPost = (text) => ({ type: UPDATE_NEW_POST, text });
