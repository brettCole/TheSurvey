import React, { Component } from 'react';
import './App.css';
import '../assets/css/cssReset.css';
import '../assets/css/navbar.css';
import '../assets/css/sidebar.css';
import '../assets/css/content.css';
import '../assets/css/footer.css';
import Landing from './Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;
