import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nynke de Boer</h1>
          <h3 className="App-subtitle">Front-end web developer</h3>
          <a href={"mailto: n-deboer@outlook.com"}>Email me!</a>
        </header>
      </div>
    );
  }
}

export default App;
