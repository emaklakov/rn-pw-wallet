import {
  SIGNUP_USER,
  LOGOUT_USER,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR
} from '../types';

const handlers = {
  [SIGNUP_USER]: (state, { currentUser }) => ({
    ...state,
    currentUser: currentUser
  }),
  [LOGOUT_USER]: state => ({ ...state, currentUser: null }),
  [SHOW_LOADER]: state => ({ ...state, loading: true }),
  [HIDE_LOADER]: state => ({ ...state, loading: false }),
  [CLEAR_ERROR]: state => ({ ...state, error: null }),
  [SHOW_ERROR]: (state, { error }) => ({ ...state, error }),
  DEFAULT: state => state
};

export const userReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
