import React, { Component, useState } from 'react';
import classes from './App.module.css';
import Person from '../Components/Persons/Person/Person';
import Person_s from '../Components/Persons/Persons'; 
import Cockpit from '../Components/Cockpit/Cockpit'

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App.js constructor');
  }

  state = {
    persons: [
      {id:"1", name: 'Max', height: '10ft 9'},
      {id:"2", name: 'Manu', height: '5ft 4'},
      {id:"3", name: 'Stephanie', age: '12ft 2'}
    ],
    otherState: 'testing',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        {name: newName, height: '10ft 9'},
        {name: 'Manuium', height: '5ft 4'},
        {name: 'Stephanie2', age: '12ft 2'}
      ]
    }
    )
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    if (this.state.showPersons){
      persons = <Person_s persons = {this.state.persons} 
                  clickDelete = {this.deletePersonHandler} 
                  change = {this.nameChangeHandler}></Person_s>;

    }

    return (
      <div className={classes.App}>
          <Cockpit 
              title = {this.props.appTitle}
              persons={this.state.persons} 
              showPersons={this.state.showPersons} 
              toggleHandler={this.togglePersonsHandler}/>
          {persons}
        
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
