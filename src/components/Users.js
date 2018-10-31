import React from 'react';
import { Grid, Row, Col, Panel, Media, Button } from 'react-bootstrap';

const Users = () => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={8}>
          <Panel>
            <Panel.Body>
              <Media>
                <Media.Left>
                  <img width={64} height={64} src="https://via.placeholder.com/150" alt="thumbnail" />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>Media Heading</Media.Heading>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                </Media.Body>
              </Media>
              <Button>Delete</Button>
            </Panel.Body>
          </Panel>
          <Panel>
            <Panel.Body>
              <Media>
                <Media.Left>
                  <img width={64} height={64} src="https://via.placeholder.com/150" alt="thumbnail" />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>Media Heading</Media.Heading>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                </Media.Body>
              </Media>
              <Button>Delete</Button>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
    </Grid>
  )
}

export default Users;