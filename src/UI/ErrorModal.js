import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import classes from './ErrorModal.module.css';


const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onBackdropClick} />
    );
}

const Modal = (props) => {
    return (
        <Card className={classes.card} >
            <header>
                <h2>Clear ToDo</h2>
            </header>
            <div>
                <p>Do you want to Clear all ToDo tasks!</p>
            </div>
            <footer>
                <button onClick={props.onClearAll} >Confirm</button>
            </footer>
        </Card>
    );

}

const ErrorModal = (props) => {
    return (
        //     <div className={classes.backdrop} onClick={props.onBackdropClick} >
        // <Card className={classes.card} >
        //     <header>
        //         <h2>Clear ToDo</h2>
        //     </header>
        //     <div>
        //         <p>Do you want to Clear all ToDo tasks!</p>
        //     </div>
        //     <footer>
        //         <button onClick={props.onClearAll} >Confirm</button>
        //     </footer>
        // </Card>
        // </div>
        <>
            {ReactDOM.createPortal(<Backdrop onBackdropClick={props.onBackdropClick} />, document.getElementById("backdrop"))}
            {ReactDOM.createPortal(<Modal onClearAll={props.onClearAll} />, document.getElementById("modal"))}
        </>
    )
}

export default ErrorModal;