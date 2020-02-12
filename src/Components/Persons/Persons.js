import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons) { //check the prop persons
          return true;
        } else{
          return false;
        }
      }

    render() {
        console.log('[Persons.js] rendering');
        return (
            this.props.persons.map((test, index) => {
                return <Person
                  name={test.name} 
                  height={test.age}
                  clicking={() => this.props.clickDelete(index)}
                  key={test.id}
                changed={(event) => this.props.change(event, test.id)} /> 
                })
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