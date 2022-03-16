import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import classes from './ToDoList.module.css';
import Button from '../UI/Button';

import { useSelector, useDispatch } from 'react-redux';
import { ToDoSliceActions } from '../Store/ToDo-slice';

const ToDoList = (props) => {
    const todos = useSelector(state =>  state.toDo.addToDo);
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch(ToDoSliceActions.deleteList({ id: id }));
    }

    const editHandler = (id) => {
        dispatch(ToDoSliceActions.editList({ id: id }));
    }
    const onClearHandler =()=>{
        dispatch(ToDoSliceActions.clearList());
    }

    return (
        <>
            <div className={classes.card} >
            {todos.map((list) => {
                return (
                    <li className={classes.lists} key={list.id} >
                        <div className={classes.list} >
                            {list.name}
                        </div>
                        <EditIcon className={classes.editIcon} onClick={() => { editHandler(list.id) }} />
                        <DeleteIcon className={classes.delete} onClick={() => { deleteHandler(list.id) }}
                        />
                    </li>
                )
            })}
            {todos.length > 1 &&
                <div className={classes.clearCard} >
                    <Button onClick={onClearHandler} />
                </div>}
        </div>
            
        </>
    );
}

export default ToDoList;