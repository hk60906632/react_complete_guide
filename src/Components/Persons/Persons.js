import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((test, index) => {
    return <Person
      name={test.name} 
      height={test.age}
      clicking={() => props.clickDelete(index)}
      key={test.id}
      changed={(event) => props.change(event, test.id)} />
    });


export default persons;