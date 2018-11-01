import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Users from './components/Users';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: []
    }
  } 

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Search onSubmit={this.add}/>
          <br />
          <Array onSubmit={this.delete} people={this.state.people} /> 
        </div>
      </div>
    );
  }

  add = bio => {
    this.setState(p => ({
      profiles: p.profiles.concat(bio)
    }))
  }

  delete() {

  }
}

export default App;
const Array = props => {
  return <div>
    {props.people && props.people.map(user => <Users onSubmit={props.delete} {...user} />)}
  </div>
}