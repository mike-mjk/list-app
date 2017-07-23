import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './first';
import Hello from './hello';

class App extends Component {
  render() {
    return (
      <div>
        <First />
        <Hello compiler='J' framework='A'/>
      </div>
    );
  }
}

export default App;
