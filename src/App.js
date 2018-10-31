import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Search />
          <br />
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
