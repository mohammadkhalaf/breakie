import React, { createContext, useEffect, useReducer } from 'react';
import useFetch from '../hooks/useFetch';


export const AppContext = createContext();

const reducer = (state, action) => {
  if (action.type === 'SET_DATA') {
    return { ...state, activities: action.payload };
  }
  return state;
};
const initialState = {
  activities: [],
  chosen:[{name:"salsa",time:2,desc:"",URL:""},{name:"sal",time:3,desc:"",URL:""}],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = (data) => {
     dispatch({ type: 'SET_DATA', payload: data });
  
  };
  // const getChosenData = (activity, time) => {
  //   console.log(activity, time);
  // };

  return (
    <AppContext.Provider value={{ ...state, getData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
