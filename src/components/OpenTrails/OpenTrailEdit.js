import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../../../src/helpers/environment';

const OpenTrailEdit = (props) => {
    const [editTrailname, setEditTrailname] = useState(props.trailsToUpdate.trailname);
    const [editLocation, setEditLocation] = useState(props.trailsToUpdate.location);
    const [editLength, setEditLength] = useState(props.trailsToUpdate.length);
    const [editDifficulty, setEditDifficulty] = useState(props.trailsToUpdate.difficutly);
    const [editComment, setEditComment] = useState(props.trailsToUpdate.comment);

    const trailUpdate = (event, trail) => {
        fetch(`${APIURL}/opentrails/${props.trailsToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({trailname: editTrailname, location: editLocation, length: editLength, difficulty: editDifficulty, comment: editComment}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchTrails();
            props.updateOff();
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Add New Trail</ModalHeader>
            <ModalBody>
                <Form onSubmit={trailUpdate}>
                    <FormGroup>
                        <Label htmlFor='trailname' />
                        <Input  name='trailname' value={editTrailname} onChange={(e) => setEditTrailname(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='location' />
                        <Input name='location' value={editLocation} onChange={(e) => setEditLocation(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='length' />
                        <Input name='length' value={editLength} onChange={(e) => setEditLength(e.target.value + ' miles')}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='difficulty' />
                        <Input type='select' name='difficulty' value={editDifficulty} onChange={(e) => setEditDifficulty(e.target.value)}>
                            <option value='Easy'>Easy</option>
                            <option value='Moderate'>Moderate</option>
                            <option value='Difficult'>Difficult</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='comment' />
                        <Input name='comment' value={editComment} onChange={(e) => setEditComment(e.target.value)} />
                    </FormGroup>
                    <Button type='submit'>Update your Trail!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default OpenTrailEdit;