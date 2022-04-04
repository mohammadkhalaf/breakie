import { createContext, useEffect, useReducer } from 'react';
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
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
