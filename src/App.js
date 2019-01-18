import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './components/Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <header className="header">
            <h1> Hover me </h1>
          </header>
          <Section />
        </main>
      </div>
    );
  }
}

export default App;
