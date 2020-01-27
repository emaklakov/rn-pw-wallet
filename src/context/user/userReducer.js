import {
  LOGIN_USER,
  SIGNUP_USER,
  LOGOUT_USER,
  FETCH_USER,
  FETCH_USERS,
  FETCH_TRANSACTIONS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR
} from '../types';

const handlers = {
  [LOGIN_USER]: (state, { currentUser }) => ({
    ...state,
    currentUser
  }),
  [SIGNUP_USER]: (state, { currentUser }) => ({
    ...state,
    currentUser
  }),
  [LOGOUT_USER]: state => ({ ...state, currentUser: null }),
  [FETCH_USER]: (state, { currentUser }) => ({
    ...state,
    currentUser
  }),
  [FETCH_USERS]: (state, { users }) => ({
    ...state,
    users
  }),
  [FETCH_TRANSACTIONS]: (state, { transactions }) => ({
    ...state,
    transactions
  }),
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
