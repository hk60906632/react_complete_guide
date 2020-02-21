import React, { Component, PureComponent } from 'react';

import Person from './Person/Person';
import AuthContext from '../../context/auth-context';

class Persons extends PureComponent {

    //this checks all the props changes, but no need to use Component with should ComponentUpdate

    //can use PureComponent instead,
    //PureComponent will check for any changes in any prop of that component

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[App.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons || 
    //         nextProps.change !== this.props.change || 
    //         nextProps.clickDelete !== this.props.clickDelete) { //check the prop persons
    //       return true;
    //     } else{
    //       return false;
    //     }
    // }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering');
        return ( 
            <AuthContext.Consumer> {
                this.props.persons.map((test, index) => {
                    return <Person
                    name={test.name} 
                    height={test.age}
                    clicking={() => this.props.clickDelete(index)}
                    key={test.id}
                    changed={(event) => this.props.change(event, test.id)}
                    isAuth = {this.props.isAuthenticated} /> 
                    })
                }
            </AuthContext.Consumer>
        );
    }
}

// const persons = (props) => props.persons.map((test, index) => {
//     return <Person
//       name={test.name} 
//       height={test.age}
//       clicking={() => props.clickDelete(index)}
//       key={test.id}
//       changed={(event) => props.change(event, test.id)} />
//     });


// export default persons;
export default Persons;