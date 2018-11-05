import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import User from './User'

const Users = props => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={8}>
          <div> { props.profiles.map(user => <User user={user} onDelete={props.onDelete} />) } </div>
        </Col>
      </Row>
    </Grid>
  );
}

export default Users;