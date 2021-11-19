import { USER_NAME } from './types';

const NameReducer = (state, action) => {
  switch (action.type) {
    case USER_NAME:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default NameReducer;
