import React, { Component } from 'react';
import './css/App.css';
import AppOutput from './AppOutput';
import AppInput from './AppInput';


// in a stateful component render the components responsible for the application and manage its state
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleStroke = this.handleStroke.bind(this);
    // this.pressButton = this.pressButton.bind(this);
  }

  handleInput(e) {
    this.setState({
      output: e.target.textContent
    });
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleStroke);
  }
  handleStroke(e) {
    let keyCode = String.fromCharCode(e.keyCode).toLowerCase();
    switch(keyCode) {
      case 'q':
      case 'w':
      case 'e':
      case 'a':
      case 's':
      case 'd':
      case 'z':
      case 'x':
      case 'c':
        this.setState({
          output: keyCode
        });
        this.pressButton(keyCode);
        break;
      default:
        this.setState({
          output: ''
        });
        break;
    }
  }

  pressButton(value) {
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      let textButton = button.textContent;
      if(textButton === value) {
        button.classList.add("active");
        let timeoutID = setTimeout(() => {
          button.classList.remove("active");
          clearTimeout(timeoutID);
        }, 150);
      }
    });
  }

  
  /* render 
  - an area in which to display the clickable element that was pressed
    include this value in an _output_ property
  - an area in which the clickable elements are included
  
  */
  render() {
    return (
      <div className="App">

        <AppOutput output={this.state.output}/>
        <AppInput handleInput={this.handleInput}/>

      </div>
    );
  }
}

export default App;
