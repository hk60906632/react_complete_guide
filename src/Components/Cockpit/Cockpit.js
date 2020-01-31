import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    let classes = [];

    if (props.persons.length < 3){
      classes.push('Blue');
    } 
    
    if (props.persons.length < 2){
      classes.push('Bold');
    }

    if (props.persons.length === 0){ 
      classes.splice(classes.indexOf('Blue'), 1);
      classes.push('Red');
    }

    return (
        <div className="Cockpit">
            <p className={classes.join(' ')}> Dynamically changing class of a tag </p>
            <button 
                style={style}
                onClick={this.togglePersonsHandler}>Switch Name</button>  
            {persons}    
        </div>
    );
};