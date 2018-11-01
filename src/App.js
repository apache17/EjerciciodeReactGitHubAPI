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
          <Array onSubmit={this.delete} profiles={this.state.profiles} /> 
        </div>
      </div>
    );
  }

  add = (bio) => {
    this.setState(pS => ({
      profiles: pS.profiles.concat(bio)
    }))
  }

  delete = (bio) => {
    let newL = [...this.state.profiles];
    let index = newL.indexOf(bio);
    newL.splice(index, 1);
    this.setState({
      profiles: newL
    });
  }
}

export default App;
const Array = props => {
  return <div>
    {props.profiles && props.profiles.map(user => <Users onSubmit={props.delete} {...user} />)}
  </div>
}