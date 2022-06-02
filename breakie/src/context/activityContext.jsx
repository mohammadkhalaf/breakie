import React, { createContext, useReducer, useState } from 'react';

export const AppContext = createContext();

const reducer = (state, action) => {
  if (action.type === 'SET_DATA') {
    return { ...state, activities: action.payload };
  }
  if (action.type === 'CHOOSE_DATA') {
    return { ...state, activities: action.payload };
  }
  return state;
};
const initialState = {
  activities: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);
  const toggleOverlay = () => {
    setShow(!show);
  };

  const getData = (data) => {
    dispatch({ type: 'SET_DATA', payload: data });
    console.log(data)
  };
  const chooseData = (data) => {
    dispatch({ type: 'CHOOSE_DATA', payload: data });
  };

  return (
    <AppContext.Provider
      value={{ ...state, getData, chooseData, toggleOverlay, show }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
