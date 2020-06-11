import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const OpenTrailCreate = (props) => {
    const [trailname, setTrailname] = useState('');
    const [location, setLocation] = useState('');
    const [length, setLength] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/opentails', {
            method: 'POST',
            body: JSON.stringify({trailname: trailname, location: location, length: length, difficulty: difficulty, comment: comment}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((trailData) => {
                console.log(trailData);
                setTrailname('');
                setLocation('');
                setLength('');
                setDifficulty('');
                setComment('');
                props.fetchTrails();
            })
    }

    return(
        <>
            <h3>Add Your Other Trail Adventures:</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='trailname' />
                    <Input  name='trailname' value={trailname} onChange={(e) => setTrailname(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='location' />
                    <Input name='location' value={location} onChange={(e) => setLocation(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='length' />
                    <Input name='length' value={length} onChange={(e) => setLength(e.target.value + ' miles')}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='difficulty' />
                    <Input type='select' name='difficulty' value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                        <option value='Easy'>Easy</option>
                        <option value='Moderate'>Moderate</option>
                        <option value='Difficult'>Difficult</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='comment' />
                    <Input name='comment' value={comment} onChange={(e) => setComment(e.target.value)} />
                </FormGroup>
                <Button type='submit'>Click to Submit!</Button>
            </Form>
        </>
    )
}

export default OpenTrailCreate;