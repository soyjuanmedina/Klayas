// our packages
import * as ActionTypes from '../actionTypes';

const initialState = () => ({
  token: localStorage.getItem('user.token'),
  user: JSON.parse(localStorage.getItem('user.data')),
});

export const auth = (state = initialState(), action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.LOGIN_SUCCESS:
      localStorage.setItem('user.token', action.payload.token);
      localStorage.setItem('user.data', JSON.stringify(action.payload.user));
      return {
        ...action.payload,
      };
    case ActionTypes.LOGIN_ERROR:
    case ActionTypes.REGISTER_ERROR:
      return state;
    case ActionTypes.DO_LOGOUT:
      localStorage.removeItem('user.token');
      localStorage.removeItem('user.data');
      return initialState();
    case ActionTypes.UPDATE_PROFILE_SUCCESS:
      localStorage.setItem('user.data', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
