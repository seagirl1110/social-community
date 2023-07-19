const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';

const initialState = {
  users: [
    {
      name: 'Alex',
      status: 'I am a frontend developer',
      ava: 'image/ava/alex.jpg',
      follow: true,
      location: { country: 'Russia', city: 'Moscow' },
      id: 0,
    },
    {
      name: 'Maksim',
      status: 'Hey Hey Hey',
      ava: 'image/ava/maksim.jpg',
      follow: false,
      location: { country: 'Russia', city: 'Omsk' },
      id: 1,
    },
    {
      name: 'Nastya',
      status: 'I am happy',
      ava: 'image/ava/nastya.jpg',
      follow: true,
      location: { country: 'Russia', city: 'Vladimir' },
      id: 2,
    },
    {
      name: 'Sveta',
      status: 'Hello everyone',
      ava: 'image/ava/sveta.jpg',
      follow: true,
      location: { country: 'Russia', city: 'Moscow' },
      id: 3,
    },
  ],
};

export const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, follow: !user.follow };
          }
          return user;
        }),
      };

    default:
      return state;
  }
};

export const toggleFollowAC = (userID) => ({ type: TOGGLE_FOLLOW, userID });
