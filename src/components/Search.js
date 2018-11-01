import React, {Component} from 'react'
import {Form, Button, FormGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import PropTypes from 'prop-types';

class Search extends Component{
  constructor(props){
    super(props)
    this.state = {user: ""}
  }

  render(){
    return (
      <Form inline onSubmit={this.Submit} >
        <FormGroup controlId="formInlineEmail">
          <FormControl type="text" placeholder="Enter Username" value={this.state.user}
        onChange={e => this.setState({ user: e.target.value })}/>
        </FormGroup>{' '}
        <Button type="submit" >Add</Button>
      </Form>
    )
  }

  Submit = e => {
    e.preventDefault()
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then(bio => {
        this.props.onSubmit(bio.data)
        this.setState({user: ""})
      })
  }
}

Search.propTypes = {
  onSubmituser: PropTypes.func
};


export default Search;