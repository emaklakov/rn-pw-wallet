import React, { useReducer, useContext } from 'react';
import { Toast } from 'native-base';
import { Http } from '../../http';
import { UserContext } from './userContext';
import { userReducer } from './userReducer';
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

export const UserState = ({ children }) => {
  const initialState = {
    currentUser: null,
    users: [],
    transactions: [],
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const loginUser = async (email, password) => {
    showLoader();
    clearError();
    try {
      const data = await Http.post('sessions/create', {
        password,
        email
      });

      const currentUser = {
        id_token: data.id_token,
        username: '',
        email
      };

      dispatch({ type: LOGIN_USER, currentUser: currentUser });
    } catch (e) {
      showError(e.message);
      console.log(e);
    } finally {
      hideLoader();
    }
  };

  const signupUser = async (username, email, password) => {
    showLoader();
    clearError();
    try {
      const data = await Http.post('users', {
        username,
        password,
        email
      });

      const currentUser = {
        id_token: data.id_token,
        username,
        email
      };

      dispatch({ type: SIGNUP_USER, currentUser: currentUser });
    } catch (e) {
      showError(e.message);
      console.log(e);
    } finally {
      hideLoader();
    }
  };

  const logoutUser = () => dispatch({ type: LOGOUT_USER });

  const fetchUser = async () => {
    showLoader();
    clearError();
    try {
      const data = await Http.get(
        'api/protected/user-info',
        state.currentUser.id_token
      );

      const user_info_token = data.user_info_token;

      const currentUser = {
        id_token: state.currentUser.id_token,
        id: user_info_token.id,
        username: user_info_token.name,
        email: user_info_token.email,
        balance: user_info_token.balance
      };

      dispatch({ type: FETCH_USER, currentUser: currentUser });
    } catch (e) {
      showError(e.message);
      console.log(e);
    } finally {
      hideLoader();
    }
  };

  const fetchUsers = async filter => {
    showLoader();
    clearError();
    try {
      const data = await Http.post('api/protected/users/list', {
        filter
      });

      console.log('Users', data);

      dispatch({ type: FETCH_USERS, users: data });
    } catch (e) {
      dispatch({ type: FETCH_USERS, users: [] });
      showError(e.message);
      console.log(e);
    } finally {
      hideLoader();
    }
  };

  const addTransaction = async (name, amount, navigation) => {
    showLoader();
    clearError();
    try {
      const data = await Http.post('api/protected/transactions', {
        name,
        amount
      });

      if (data && data.trans_token && data.trans_token.id) {
        navigation.navigate('Info');
        Toast.show({
          text: 'Payment successful send!',
          buttonText: 'Ok',
          type: 'success'
        });
      }
    } catch (e) {
      showError(e.message);
      console.log(e);
    } finally {
      hideLoader();
    }
  };

  const fetchTransactions = async () => {
    showLoader();
    clearError();
    try {
      const data = await Http.get(
        'api/protected/transactions',
        state.currentUser.id_token
      );

      const trans_token = data.trans_token;
      dispatch({ type: FETCH_TRANSACTIONS, transactions: trans_token });
    } catch (e) {
      dispatch({ type: FETCH_TRANSACTIONS, transactions: [] });
      showError(e.message);
      console.log(e);
    } finally {
      hideLoader();
    }
  };

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const hideLoader = () => dispatch({ type: HIDE_LOADER });

  const showError = error => dispatch({ type: SHOW_ERROR, error });

  const clearError = () => dispatch({ type: CLEAR_ERROR });

  return (
    <UserContext.Provider
      value={{
        currentUser: state.currentUser,
        users: state.users,
        transactions: state.transactions,
        loading: state.loading,
        error: state.error,
        loginUser,
        signupUser,
        logoutUser,
        fetchUser,
        fetchUsers,
        addTransaction,
        fetchTransactions,
        clearError
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
