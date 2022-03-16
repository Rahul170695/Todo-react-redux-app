import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
    return(
        <div className={`${props.class} ${classes.card} ${props.className}`} onClick={props.onClick} > {props.children}</div>
    );
}

export default Card;