import React from 'react';
import './css/AppInput.css';

// import the styled object from the styled components library
import styled from 'styled-components';

/*
render a single div in which to nest nine clickable elements, buttons for the following letters: [Q W E A S D Z X C]
each button can be included with a separate component 
*/

// create a styled component, used for each button
const InputButton = styled.button`
  border: none;
  border-radius: 8px;
  background: var(--color-text);
  opacity: 0.7;
  box-shadow: 0 1px 5px var(--color-text);
  color: var(--color-subtext);
  font-size: 1.15rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: right;
  line-height: 130px;
  padding: 1rem;
  transition: all 0.15s ease-out;

  &:hover {    
    opacity: 1;
    color: var(--color-subtext-focus);
  }
  &:focus {
    opacity: 0.9;
    border-radius: 15px;
  }
  &:active, &.active {
    opacity: 1;
    color: var(--color-subtext-focus);
    transform: scale(1.1);
  }
`;

// create an array for the keys to be included in the buttons
// const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

// create an object in which to include an array for the keys and an array for the matching audio elements 
const buttons = {
  keys: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
  audio: []
}

// loop through the array of keys to include one copy of the styled component for each letter
// render this collection of elements
const AppInput = (props) =>  {
  const InputButtons = buttons.keys.map(key => 
    <InputButton 
      className="drum-pad"
      id={key}
      key={key} 
      onClick={props.handleInput}>
        {key}
    </InputButton>
  );
  return(
    <div className="AppInput">
      {InputButtons}
    </div>
  );
}

export default AppInput;
