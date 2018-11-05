import React, {Component} from 'react';
import axios from 'axios';
import {Form, Button, FormGroup, FormControl } from 'react-bootstrap';

class Search extends Component {
  state = {
    name: '',
    error: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    axios
      .get(`https://api.github.com/users/${this.state.name}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        this.setState({name: '', error: ''});
      })
      .catch(err => {
        this.setState({error: err});
      });
  }

  render(){
    const { error } = this.state;
    return (
      <Form inline ref={form => this.formEl = form} onSubmit = {this.handleSubmit}>
        <FormGroup controlId="formInlineEmail">
          <FormControl type="text" placeholder="Enter username" value={this.state.name}
            onChange={event => this.setState({name: event.target.value})} required/>
        </FormGroup>{' '}
        <Button type="submit">Add</Button>
        { error && (alert('User not found!'))}
      </Form>
    )
  }
}

export default Search;