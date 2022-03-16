import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { ToDoSliceActions } from '../Store/ToDo-slice';

import Card from '../UI/Card';
import classes from './ToDoContainer.module.css';

const RefToDoContainer = (props) => {
    const dispatch = useDispatch();
    const isTrue = useSelector(state=>state.toDo.isValid);

    const [isValid, setIsValid] = useState(false);
    
    const inputUserRef = useRef();

    	useEffect(()=>{
		if(props.editTask !==null){
            inputUserRef.current.value = props.editTask.input;
            setIsValid(true);
		}else {
			inputUserRef.current.value="";
		}
    }, [props.editTask]);
    

    // const InputAddHandler= (event)=>{
	// 	if(inputUserRef.current.value.trim()){
    // setIsValid(true);
    //     }else{
    //         setIsValid(false);            
    //     }
    // }
       const InputAddHandler= (event)=>{
        dispatch(ToDoSliceActions.InputAddHandler());
    }
    

    const ToDoAddHandler =(event)=> {
        // console.log(inputAdd);
        event.preventDefault();
        const enteredInput = inputUserRef.current.value;        
        props.onAddInput(enteredInput);        
        // setInputAdd("");
        inputUserRef.current.value=" ";
        setIsValid(false); 
      }

  return(
        <Card className={classes.card} >
        <form onSubmit={ToDoAddHandler} > 
            <input type="text" placeholder="Start Adding"             
             maxLength="60"
             onChange={InputAddHandler}
             ref={inputUserRef}/>
            <button type="submit" disabled={!isTrue} >{props.editTask? "Update" : "Add"}</button>
        </form>
        </Card>  
    );  
};

export default RefToDoContainer;