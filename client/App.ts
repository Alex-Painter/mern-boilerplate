import React, { Component } from 'react';
import logo from './logo.svg';
require('./App.css');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Minimalist MERN Boilerplate. Create someting awesome.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

            Learn React
          </a>
          <p>
          Add links for mongo, express, webpack and babel (maybe ES6 as well?).
          </p>
        </header>
      </div>
    );
  }
}

export default App;
