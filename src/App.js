import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WordCard from './WordCard';

const word = "REACT";
class App extends Component {
  render() {
    return (
      <div>
        {
          <WordCard value={word}/>
        }
      </div>
    );
  }
}

export default App;
