import React from 'react';
import './css/AppInput.css';

// import the styled object from the styled-components library
import styled from 'styled-components';


// create a button with styled component; this button will be included for all nine clickable elements
// define hover, focus and active states as well as an active class, added and removed whenever the keyboard is used instead of a cursor
const InputButton = styled.button`
  /* button style */
  border: none;
  border-radius: 8px;
  background: var(--color-text);
  opacity: 0.7;
  box-shadow: 0 1px 5px var(--color-text);
  /* text style */
  color: var(--color-subtext);
  font-size: 1.15rem;
  text-transform: uppercase;
  font-weight: bold;
  /* position the text in the bottom right corner */
  text-align: right;
  line-height: 130px;
  padding: 1rem;
  /* transition for the hover and focus states */
  transition: all 0.15s ease-out;

  &:hover {    
    /* on hover remove transparency and include the darker tone of the color for the buttons' text */
    opacity: 1;
    color: var(--color-subtext-focus);
  }
  &:focus {
    /* when focused reduce transparency and increase the roundness of the box */
    opacity: 0.9;
    border-radius: 15px;
  }
  &:active, &.active {
    /* when active, and with the class of active (included in response to a keydown event), remove transparency, pick the dark color of the text and sligtly increase the scale */
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

/*
render a single div in which to nest nine clickable elements, with the following letters: [Q W E A S D Z X C]
the button component is created through the styling library
*/
const AppInput = (props) =>  {
  // loop through the array of keys to include one copy of the styled component for each letter
  // render this collection of elements
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
