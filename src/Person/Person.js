import React from 'react';

const person = ( props ) => {
    return (
    <div>
        <p>I'm {props.name} and my height is {props.height} </p>
        <p>My age is {Math.floor(Math.random() * 50)}</p>
        <p>{props.children}</p>
        <p>#################################################</p>
    </div>
    )
};

export default person;

