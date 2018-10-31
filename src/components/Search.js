import React from 'react'
import {Form, Button, FormGroup, FormControl } from 'react-bootstrap';

const Search = () => {
  return (
    <Form inline>
      <FormGroup controlId="formInlineEmail">
        <FormControl type="text" placeholder="Enter username" />
      </FormGroup>{' '}
      <Button type="submit">Add</Button>
    </Form>
  )
}

export default Search;