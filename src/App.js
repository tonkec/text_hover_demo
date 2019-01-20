import React, { Component } from 'react';
import Section from './components/Section';
import Header from './components/Header';
import './App.css';
import './text_hover_effects/text_hover.min.css';
import './text_hover_effects/text_hover_on_click.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Header />
          <Section />
        </main>
      </div>
    );
  }
}

export default App;
