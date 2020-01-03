import React from 'react';

import './Person.css';

const person = ( props ) => {
    return (
    <div className="Person">
        <p onClick={props.click} >I'm {props.name} and my height is {props.height} </p>
        <p>My age is {Math.floor(Math.random() * 50)}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    )
};

export default person;

