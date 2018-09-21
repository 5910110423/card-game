import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "3SA03";
class App extends Component {
  constructor(){
    super();
    this.state={
      massage : "UNLIKE"
    };
    this.changeButton = this.changeButton.bind(this);
  }

  changeButton(){
    this.setState({massage:"LIKE"});
  }
  render() {
    return (
      <div class = "App">
        {
          <WordCard value={word}/>
        }
        <p className="App">Do you like this WEB</p>
        <button onClick="this.changeButton">{this.state.massage}</button>
      </div>
    );
  }
}

export default App;
