import React, { useState } from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import Signup from '../Signup';
import Login from '../Login';

const Auth = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    const authTernary = () => {
        return login ? (
            <Signup updateToken={props.updateToken} />
        ) : (
            <Login updateToken={props.updateToken} />
        );
    };

    const loginToggle = (event) => {
        event.preventDefault();

        setLogin(!login);

        setUsername('');
        setPassword('');
    };

    return(
        <Container className='auth-container' style={{textAlign: 'center'}}>
            <Row>
                <Col md='6'>
                    <h1>{authTernary()}</h1>
                    <Button  type='submit' className='btn-success' onClick={loginToggle} style={{marginTop: '-2px', marginRight: '-100%'}}>
                        Login / Signup
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;