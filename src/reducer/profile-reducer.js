const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

const initialState = {
  posts: [
    { message: "It's my first post.", counter: 20, id: 0 },
    { message: 'I have a cat. Her name is Muska.', counter: 35, id: 1 },
  ],
  newPost: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST:
      return {
        ...state,
        newPost: action.text,
      };
    case ADD_POST:
      const post = {
        message: state.newPost,
        counter: 0,
        id: state.posts.length,
      };
      return {
        ...state,
        posts: [...state.posts, post],
        newPost: '',
      };
    default:
      return state;
  }
};

export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostAC = (text) => ({ type: UPDATE_NEW_POST, text });
