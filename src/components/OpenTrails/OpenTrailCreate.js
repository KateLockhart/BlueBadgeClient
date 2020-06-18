import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../../../src/helpers/environment';

const OpenTrailCreate = (props) => {
    const [trailname, setTrailname] = useState('');
    const [location, setLocation] = useState('');
    const [length, setLength] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/opentrails`, {
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
            
            <Form onSubmit={handleSubmit} id='trailForm'>
                <h4 style={{textAlign: 'center'}}>Add Your Own Trail Adventures:</h4>
                <FormGroup>
                    <Label htmlFor='trailname'>Trail Name:</Label>
                    <Input  name='trailname' value={trailname} onChange={(e) => setTrailname(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='location'>Trail Location:</Label>
                    <Input name='location' value={location} onChange={(e) => setLocation(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='length'>Length:</Label>
                    <Input name='length' value={length} onChange={(e) => setLength(e.target.value) }/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='difficulty'>Difficulty:</Label>
                    <Input type='select' name='difficulty' value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                        <option></option>
                        <option value='Easy'>Easy</option>
                        <option value='Moderate'>Moderate</option>
                        <option value='Difficult'>Difficult</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='comment'>Comments:</Label>
                    <Input name='comment' value={comment} onChange={(e) => setComment(e.target.value)} />
                </FormGroup>
                <Button color='success' type='submit'>Add your trail!</Button>
            </Form>
        </>
    )
}

export default OpenTrailCreate;