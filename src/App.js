import React from 'react';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import ErrorModal from './UI/ErrorModal';
import ToDoContainer from './Components/ToDoContainer';
import Advice from './Components/Advice';

import { useSelector, useDispatch } from 'react-redux';
import { ToDoSliceActions } from './Store/ToDo-slice';

import classes from './App.module.css';

const App = () => {

  const clear = useSelector(state => state.toDo.onClear);
  const dispatch = useDispatch();

  const onClearAllHandler = () => {
    dispatch(ToDoSliceActions.clearAll())
  }

  const onBackdropClick = () => {
    dispatch(ToDoSliceActions.clearList())
  }
  return (
    <div className={classes.content} >
      <Header />
      <Advice />
      <ToDoContainer />
      <ToDoList />
      {clear && <ErrorModal onClearAll={onClearAllHandler} onBackdropClick={onBackdropClick} />}</div>
  );
}

export default App;