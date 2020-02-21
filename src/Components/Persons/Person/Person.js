import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import classes from './Person.module.css'

class Person extends Component {
    constructor(props) {
        super();
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();  //current -> give you ccess to your current reference, which is the <input> element
    }


    render () {
        console.log ('[Person.js] rendering...');
        return (
            //Aux -> self-create higher order component Auxiliary
            //Fragment -> React 16.2 built in aux component 
            //<Fragment>
            <Aux>
                {this.props.isAuth ? <p>Authenticated </p> : null}
                <p onClick={this.props.clicking} >I'm {this.props.name} and my height is {this.props.height} </p>
                <p>My age is {Math.floor(Math.random() * 50)}</p>
                <p>{this.props.children}</p>
                <input 
                    //ref={(inputEl) => {this.inputElement = inputEl}} //Old version ... The argument is a reference to the element the ref placed in, this is a global property now , property to this class
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}>
                </input>
            </Aux>    
            //</Fragment>
            //<div className={classes.Person}>
                
            //</div>
           
            

        );
    }
}


//check props type, act like assertion
Person.propTypes = {
    clicking: PropTypes.func,
    name: PropTypes.string,
    height: PropTypes.string,
    changed: PropTypes.func
} ; 


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
export default withClass(Person, classes.Person);
