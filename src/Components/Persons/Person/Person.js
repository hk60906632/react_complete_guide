import React from 'react';

import classes from './Person.module.css'


const person = ( props ) => {
    return ( 
    <div className={classes.Person}>
        <p onClick={props.clicking} >I'm {props.name} and my height is {props.height} </p>
        <p>My age is {Math.floor(Math.random() * 50)}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    )
};

export default person;

