import React, { Component } from 'react';
import '../App.css';

import Recipe from './Recipe';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
            <Header />
            <Recipe/>
        </div>
      </div>
    );
  }
}

export default App;
