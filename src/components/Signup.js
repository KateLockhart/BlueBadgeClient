import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../src/helpers/environment';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password,  setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/signup`, {
            method: 'POST',
            body: JSON.stringify({username: username, email: email, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div>
            
            <Form onSubmit={handleSubmit} id='mainForm'>
                <h2 style={{color: 'black', marginBottom: '6px'}}>Sign Up</h2>
                <FormGroup>
                    <Label htmlFor='username' id='mainLabel'>Username: </Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name='username' value={username} type='text' pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$' minLength='4' maxLength='15' title='Username must include one number and be 4-15 characters in length.'/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='email' id='mainLabel'>Email: </Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name='email' value={email} type='email' id='email' pattern='.+@.+.com' title='Must be in standard email format. Ex: yourname@email.com'/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password' id='mainLabel'>Password: </Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name='password' value={password} type='password' pattern='[a-zA-Z0-9]+' minLength='5' maxLength='15'/>
                </FormGroup>
                <Button type='submit' color='success' >Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;