import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import MANpng from './MAN.png';
import './App.css';

class controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Use arrow keys on your keyboard!'
    };
    ArrowKeysReact.config({
      left: () => {
        this.setState({
          content: 'left key detected.'
        });
      },
      right: () => {
        this.setState({
          content: 'right key detected.'
        });
      },
      up: () => {
        this.setState({
          content: 'up key detected.'
        });
      },
      down: () => {
        this.setState({
          content: 'down key detected.'
        });
      }
    });
  }
  render() {
    return (
      <div {...ArrowKeysReact.events} tabIndex="1">
        {this.state.content}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo ">
          <img src={MANpng} alt="icon" width="100" height="50" />
        </div>
      </div>
    );
  }
}

export default (App, controls);
