import React, { useState, useEffect, useCallback } from 'react';
import classes from './Advice.module.css';
import dice from '../Assets/icon-dice.svg';

const Advice = () => {

    const [myAdvice, setMyAdvice] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const adviceHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            if(!response.ok){
                throw new Error('Something Went Wrong...!');
            }
            const data = await response.json();

            const transformedAdvice = data.slip.advice;
            setMyAdvice(transformedAdvice);
            setIsLoading(false);
        } catch(error){
            setError(error.message);
         }
         setIsLoading(false);
    }, [])

    useEffect(() => { adviceHandler() }, [adviceHandler]);


    let content = <p>Special Advice is loading for you. Please wait...!</p>;

    if(error){
        content = <p>{error}</p>
    }
    if (myAdvice) {
        content = <p>{myAdvice}</p>
    }
    
    if (isLoading) {
        content = <p style={{color: "rgb(236, 109, 230)"}}>Please wait...!</p>;
    }
    return (
        <div className={classes.container} >
            <h1>Random Advice for you!</h1>
            <section>{content}</section>
            <br />
            <img className={classes.dice} src={dice} onClick={adviceHandler} alt="Todo" />
        </div>
    );
}

export default Advice;