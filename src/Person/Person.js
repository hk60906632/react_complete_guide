import React from 'react';
import styled from 'styled-components';
import Radium from 'radium';

//import './Person.css';

const StyledDiv = styled.div`
    width: 35%;
    margin: auto;
    border-style: solid;
    border-width: 5px;
    border-color: aqua;
    padding: 16px;
    text-align: center;
    display: inline-block;
    margin-left: 5px;

    @media (min-width: 500px) {
            width: 450px;
    }
`;

const person = ( props ) => {
    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    };

    return (
    //<div className="Person" style={style}>
    <StyledDiv>
        <p onClick={props.clicking} >I'm {props.name} and my height is {props.height} </p>
        <p>My age is {Math.floor(Math.random() * 50)}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </StyledDiv>
    //</div>
    )
};

//export default Radium(person);
export default person;

