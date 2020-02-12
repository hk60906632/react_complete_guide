import React, { Component } from 'react';

import classes from './Person.module.css'

class Person extends Component {
    render () {
        console.log ('[Person.js] rendering...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.clicking} >I'm {this.props.name} and my height is {this.props.height} </p>
                <p>My age is {Math.floor(Math.random() * 50)}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        );
    }
}

// const person = ( props ) => {
//     return ( 
//     <div className={classes.Person}>
//         <p onClick={props.clicking} >I'm {props.name} and my height is {props.height} </p>
//         <p>My age is {Math.floor(Math.random() * 50)}</p>
//         <p>{props.children}</p>
//         <input type="text" onChange={props.changed} value={props.name}></input>
//     </div>
//     )
// };

//export default person;
export default Person;
