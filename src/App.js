import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "3SA03";
class App extends Component {
  render() {
    return (
      <div>
        {
          <WordCard value={word}/>
        }
        <p className="App">Do you like this WEB</p>
      </div>
    );
  }
}

export default App;
