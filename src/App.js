import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Users from './components/Users';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      profiles: []
    }
  }

  add = (bio) => {
    this.setState(pS => ({
      profiles: pS.profiles.concat(bio)
    }));
  }

  delete = (bio) => {
    let New = [...this.state.profiles];
    let Index = New.indexOf(bio);
    New.splice(Index, 1);
    this.setState({
      profiles: New
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Search onSubmit={this.add}/>
          <br />
          <Users profiles={this.state.profiles} onDelete={this.delete}/>
        </div>
      </div>
    );
  }
}

export default App;