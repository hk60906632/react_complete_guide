import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', height: '10ft 9'},
      { name: 'Manu', height: '5ft 4'},
      { name: 'Stephanie', age: '12ft 2'}
    ],
    otherState: 'testing'
  }

  switchNameHandler = () => {
    this.setState( {
      persons: [
        { name: 'Maximum', height: '10ft 9'},
        { name: 'Manuium', height: '5ft 4'},
        { name: 'Stephanie2', age: '12ft 2'}
      ]
    }
    )
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} height={this.state.persons[0].height}>testing 1</Person>
        <Person name={this.state.persons[1].name} height={this.state.persons[1].height}>testing 2</Person>
      </div>
    );
  }    
}

const AppHook = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max Hook', height: '10ft 9'},
      { name: 'Manu Hook', height: '5ft 4'},
      { name: 'Stephanie Hook', age: '12ft 2'}
    ]
  });

  const [otherState, setOtherState] = useState('some other state');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState( {
      persons: [
        { name: 'Maximum Hook', height: '10ft 9'},
        { name: 'Manuium Hook', height: '5ft 4'},
        { name: 'Stephanie2 Hook', age: '12ft 2'}
      ]
    }
    )
  }

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} height={personsState.persons[0].height}>testing 1</Person>
      <Person name={personsState.persons[1].name} height={personsState.persons[1].height}>testing 2</Person>
    </div>
  );    
}



export default App;
export {AppHook};
