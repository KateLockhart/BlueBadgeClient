import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../src/helpers/environment';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        });
    }

    return(
        <div>
            
            <Form onSubmit={handleSubmit} id='mainForm'>
                <h2 style={{color: 'black', marginBottom: '6px'}}>Login</h2>
                <FormGroup>
                    <Label htmlFor='username' id='mainLabel'>Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name='username' value={username} type='text' pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$' required minLength='4' maxLength='15'/>
                </FormGroup>
                <FormGroup>
                    <Label html='password' id='mainLabel'>Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name='password' value={password} type='password' pattern='[a-zA-Z0-9]+' required minLength='5' maxLength='15'/>
                </FormGroup>
                <Button type='submit' color='success'>Login</Button>
            </Form>
        </div>
    )
}

export default Login;