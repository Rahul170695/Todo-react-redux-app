import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToDoSliceActions } from '../Store/ToDo-slice';
import Card from '../UI/Card';
import classes from './ToDoContainer.module.css';

const ToDoContainer = (props) => {
    const [isValid, setIsValid] = useState(false);
    // const [inputAdd, setInputAdd] = useState("");

    const dispatch = useDispatch();

    const todoAdd = useSelector(state => state.toDo.text);
    const editTodo = useSelector(state => state.toDo.editTodo);

    const InputAddHandler = (event) => {
        dispatch(ToDoSliceActions.userInput({ value: event.target.value }));
        if (event.target.value.trim()) {
            setIsValid(true);
        }
    }

    const ToDoAddHandler = (event) => {
        event.preventDefault();
        dispatch(ToDoSliceActions.addItemToList({ task: todoAdd }));
        setIsValid(false);
        // if(editTodo){
        //     dispatch(ToDoSliceActions.addItemToList({task: editTodo}));
        // }else{
        //     dispatch(ToDoSliceActions.addItemToList({task: todoAdd}));
        // }
        // setIsValid(false);
    }

    return (
        <Card className={classes.card} >
            <form onSubmit={ToDoAddHandler} >
                <input type="text" placeholder="Start Adding"
                    onChange={InputAddHandler}
                    value={todoAdd}
                    maxLength="60" 
                     />
                <button type="submit" disabled={!isValid} >{editTodo ? "Update" : "Add"}</button>
            </form>
        </Card>
    );
};

export default ToDoContainer;