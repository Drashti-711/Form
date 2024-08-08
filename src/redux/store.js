import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import formReducer from './reducer/form.slice';

const store = configureStore({
  reducer: {
    form: formReducer
  }
});

export default store;

// For dispatching actions
export const useAppDispatch = () => useDispatch();

// For selecting state
export const useAppSelector = (selector) => useSelector(selector);