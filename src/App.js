import React, { Component } from 'react';
import Section from './components/Section';
import './App.css';
import './text_hover_effects/text_hover.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <header className="header">
            <select>
              <option> Hover </option>
              <option> Click </option>
            </select>
            <h1 className="text-hover text-hover-halfline-bottom-goes-left" id="heading"> Hover me </h1>
          </header>
          <Section />
        </main>
      </div>
    );
  }
}

export default App;
