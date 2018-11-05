import React, {Component} from 'react';
import { Panel, Media, Button } from 'react-bootstrap';

class User extends Component {
    
    handleClick = event => {
        event.preventDefault();
        console.log(this.props.user);
        this.props.onDelete(this.props.user);
    }

    render(){
        return (
            <Panel>
                <Panel.Body>
                    <Media>
                    <Media.Left>
                        <img width={64} height={64} src={this.props.user.avatar_url} alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>{this.props.user.login}</Media.Heading>
                        <p>{this.props.user.bio}</p>
                    </Media.Body>
                    </Media>
                    <Button onClick={this.handleClick}>Delete</Button>
                </Panel.Body>
            </Panel>
        );
    }
}


export default User;