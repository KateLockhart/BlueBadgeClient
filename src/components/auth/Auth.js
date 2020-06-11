import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from '../Signup';
import Login from '../Login';

const Auth = (props) => {
    return(
        <Container className='auth-controller'>
            <Row>
                <Col md='6'>
                    <Signup updateToken={props.updateToken} />
                </Col>
                <Col md='6' className='login-cal'>
                    <Login updateToken={props.updateToken} />
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;