import React, { Component, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Radium, {StyleRoot} from 'radium';
import Person from '../Components/Persons/Person/Person';
import person from '../Components/Persons/Person/Person';
import Person_s from '../Components/Persons/Persons'; 

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white; 
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    boxShadow: 5px 5px 5px black;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.alt ? 'orange' : 'lightgreen'};
      color: black
    }
`;

class App extends Component {
  state = {
    persons: [
      {id:"1", name: 'Max', height: '10ft 9'},
      {id:"2", name: 'Manu', height: '5ft 4'},
      {id:"3", name: 'Stephanie', age: '12ft 2'}
    ],
    otherState: 'testing',
    showPersons: false
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

    //bad practice to directly reach out to the array itself, pass by reference
    //const person = this.state.persons[personIndex];

    const person = {
      ...this.state.persons[personIndex]
    };

    //alternative 
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});

    // this.setState( {
    //   persons: [
    //     {name: 'Max', height: '10ft 9'},
    //     {name: event.target.value, height: '5ft 4'},
    //     {name: 'Stephanie2', age: '12ft 2'}
    //   ]
    // }
    // );
  }

  deletePersonHandler = (personIndex) => {

    //js is pass by reference, so slice() helps to create a copy of the array to manipulate

    //const persons = this.state.persons.slice();

    //... spreads out the elements in this array into a list of elements, make a copy of the array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white', 
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      boxShadow: '5px 5px 5px black',
      cursor: 'pointer',

      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          <Person_s persons = {this.state.persons} 
                    clickDelete = {this.deletePersonHandler} 
                    change = {this.nameChangeHandler}></Person_s>
          
          {/* 
          ##############move to Persons.js as a component################# 
          {this.state.persons.map((test, index) => {
              return <Person
                name={test.name} 
                height={test.age}
                clicking={() => this.deletePersonHandler(index)}
                key={test.id}
                changed={(event) => this.nameChangeHandler(event, test.id)} />
          })} */}

          {/* <Person 
            name={this.state.persons[0].name} 
            height={this.state.persons[0].height}
            //use bind more often, arrow function syntax is inefficient cause react keeps re-rendering
            click={this.switchNameHandler.bind(this, 'Clicking Name')}>testing 1</Person>
          <Person 
            name={this.state.persons[1].name} 
            height={this.state.persons[1].height}
            changed={this.nameChangeHandler}>testing 2</Person> */}
        </div>
      );

      style.backgroundColor = 'red';

      style[':hover'] = {
        backgroundColor: 'orange',
        color: 'black'
      };
    }

    let classes = [];

    if (this.state.persons.length < 3){
      classes.push('Blue');
    } 
    
    if (this.state.persons.length < 2){
      classes.push('Bold');
    }

    if (this.state.persons.length === 0){ 
      classes.splice(classes.indexOf('Blue'), 1);
      classes.push('Red');
    }

    return (
      <StyleRoot>
      <div className="App">
        <p className={classes.join(' ')}> Dynamically changing class of a tag </p>

        <button 
          style={style}
          //onClick={() => this.switchNameHandler('Maximum')}
          onClick={this.togglePersonsHandler}>Switch Name</button>

          {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Switch Name</StyledButton> */}
          {persons}

        {/* { this.state.showPersons === true ?
          <div>
            <Person 
              name={this.state.persons[0].name} 
              height={this.state.persons[0].height}
              //use bind more often, arrow function syntax is inefficient cause react keeps re-rendering
              click={this.switchNameHandler.bind(this, 'Clicking Name')}>testing 1</Person>
            <Person 
              name={this.state.persons[1].name} 
              height={this.state.persons[1].height}
              changed={this.nameChangeHandler}>testing 2</Person>
          </div> : null
        } */}
        
      </div>
      </StyleRoot>
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



export default Radium(App);
export {AppHook};