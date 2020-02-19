import React, { Component, useState } from 'react';
import classes from './App.module.css';
import Person from '../Components/Persons/Person/Person';
import PersonS from '../Components/Persons/Persons'; 
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary'

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
    showPersons: false,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });

    //setState doesn't always execute and finish immediately in react hook cycle, this.state cannot gaurentee to be the latest state
    //Better way for state updates depend on prvious state
    //setState can pass js object or a function
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
      persons = <PersonS persons = {this.state.persons} 
                  clickDelete = {this.deletePersonHandler} 
                  change = {this.nameChangeHandler}></PersonS>;

    }

    return (
      //<WithClass classes={classes.App}>
      <Aux>
          <Cockpit 
              title = {this.props.appTitle}
              personsLength={this.state.persons.length} 
              showPersons={this.state.showPersons} 
              toggleHandler={this.togglePersonsHandler}/>
          {persons}
      </Aux>
      //</WithClass>
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



export default withClass(App, classes.App); //withClass is just a function not a component, no Prop use, first arguement is element to be wrap,
                              //second argument is the class name
export {AppHook};
