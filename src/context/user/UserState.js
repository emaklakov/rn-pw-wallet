import React, { useReducer, useContext } from 'react';
import { Http } from '../../http';
import { UserContext } from './userContext';
import { userReducer } from './userReducer';
import {
  SIGNUP_USER,
  LOGOUT_USER,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR
} from '../types';

export const UserState = ({ children }) => {
  const initialState = {
    currentUser: null,
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const signupUser = async (username, password, email) => {
    showLoader();
    clearError();
    try {
      const data = await Http.post('users', {
        username,
        password,
        email
      });

      const currentUser = {
        id_token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IkFuaW1hbCBQbGFuZXQgVXNlciIsImVtYWlsIjoiMUAxLjEiLCJpZCI6MywiYmFsYW5jZSI6NTAwLCJpYXQiOjE0ODE1ODQ4ODksImV4cCI6MTQ4MTYwMjg4OX0.h4CzCxTOMRk6S8juxM0tRc5pql99XkXlR09pUzVMH9I',
        username,
        email
      };

      console.log('currentUser', currentUser);

      dispatch({ type: SIGNUP_USER, currentUser });
    } catch (e) {
      showError('Что-пошло не так...');
      console.log(e);
    } finally {
      hideLoader();
    }
  };

  const logoutUser = () => dispatch({ type: LOGOUT_USER });

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const hideLoader = () => dispatch({ type: HIDE_LOADER });

  const showError = error => dispatch({ type: SHOW_ERROR, error });

  const clearError = () => dispatch({ type: CLEAR_ERROR });

  return (
    <UserContext.Provider
      value={{
        currentUser: state.currentUser,
        loading: state.loading,
        error: state.error,
        signupUser,
        logoutUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
