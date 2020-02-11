import React, { useEffect } from 'react';
import Classes from './Cockpit.module.css';

const Cockpit = (props) => {

    //useEffect() combine componentDidUpdate() and componentDidMount(), called everytime re-render Cockpit, any update cycle
    //can be use for sending http request

    useEffect(() => {
        console.log('[Cockpit.js] *initial* useEffect');
    }, []); //[] pass in empty array , the useEffect will only run at the start and it cannot re-run, act as ###componentDidMount()###

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //mimick http request...
        const timer = setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect'); //return act like componentWillUnmount() , call when a component being unmount or destory
            clearTimeout(timer); //if Cockpit is unmount, this timer will be remove 
        };
    }, [props.persons]); //only call useEffect when state -> persons have changes,
    

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

export default Cockpit;