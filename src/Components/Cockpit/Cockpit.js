import React from 'react';
import Classes from './Cockpit.module.css';

const cockpit = (props) => {
    let classes = [];
    let btnClass = '';

    if (props.persons.length < 3){
      classes.push(Classes.Blue);
    } 
    
    if (props.persons.length < 2){
      classes.push(Classes.Bold);
    }

    if (props.persons.length === 0){ 
      classes.splice(classes.indexOf(Classes.Blue), 1);
      classes.push(Classes.Red);
    }

    if (props.showPersons){
        btnClass = Classes.Red;
    }

    return (
        <div className={Classes.Cockpit}>
            <p>{props.title}</p>
            <p className={classes.join(' ')}> Dynamically changing class of a tag </p>
            <button 
                className={btnClass}
                onClick={props.toggleHandler}>Switch Name</button>    
        </div>
    );
};

export default cockpit;