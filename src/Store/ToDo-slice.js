import { createSlice } from '@reduxjs/toolkit';
import { original } from 'immer';


const ToDoSlice = createSlice({
    name: 'add',
    initialState: {
        addToDo: [],
        text: "",
        editTodo: null,
        onClear: false,
    },
    reducers: {
        userInput(state, action) {
            state.text = action.payload.value;
        },
        addItemToList(state, action) {
            if (state.editTodo === null) {
                const newTask = {
                    id: Math.random().toString(),
                    name: action.payload.task,
                }
                state.addToDo.push(newTask);
            } else {
                const newEditedTask = { ...state.editTodo, name: action.payload.task };
                state.editTodo = newEditedTask;
                console.log(state.editTodo);
                console.log(original(state.addToDo));
                const editedTodo = state.addToDo.findIndex((item)=> item.id === state.editTodo.id)
                console.log((editedTodo))
                state.addToDo.splice(editedTodo, 1, state.editTodo);
            }
            state.editTodo= null;
            state.text = "";
        },
        deleteList(state, action) {
            state.addToDo = state.addToDo.filter((item) => item.id !== action.payload.id);
            //return state.addToDo.filter((item) => item.id !== action.payload.id);
        },
        editList(state, action) {
            const editedList = state.addToDo.find((todo) => todo.id === action.payload.id);
            state.text = editedList.name;
            state.editTodo = editedList;
        },
        clearList(state){
            state.onClear = !state.onClear;
        },
        clearAll(state){
            state.addToDo = [];
            state.onClear = !state.onClear;
        }

    }
});

export const ToDoSliceActions = ToDoSlice.actions;

export default ToDoSlice;