import React, { createContext, useReducer } from 'react';
import NameReducer from './reducer';
import { USER_NAME } from './types';

export const NameContext = createContext();

const NameContextProvider = (props) => {
  const initialState = {
    user: null,
  };

  const [state, dispatch] = useReducer(NameReducer, initialState);

  // ===================== OTP VERIFIED =====================

  const changeName = (data) => {
    dispatch({
      type: USER_NAME,
      payload: data,
    });
  };

  // =================================================

  return (
    <NameContext.Provider
      value={{
        user: state.user,
        changeName,
      }}
    >
      {props.children}
    </NameContext.Provider>
  );
};

export default NameContextProvider;
