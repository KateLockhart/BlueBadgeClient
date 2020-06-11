import React from 'react';
import { Table, Button } from 'reactstrap';
import APIURL from '../../helpers/environment';

const OpenTrailTable = (props) => {
console.log(props)
    const deleteTrail = (trail) => {
        fetch(`${APIURL}/opentrails/${trail.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchTrails())
    }

    const trailMapper = () => {
        return props.trails.map((trail, index) => {
            return(
                <tr key={index}>
                    <th scope='row'>{trail.id}</th>
                    <td>{trail.trailname}</td>
                    <td>{trail.location}</td>
                    <td>{trail.length}</td>
                    <td>{trail.difficulty}</td>
                    <td>{trail.comment}</td>
                    <td>
                        <Button color='warning' onClick={() => {props.editUpdateOpenTrail(trail); props.updateOn()}} > Update </Button>
                    </td>
                    <td>
                        <Button color='danger' onClick={() => {deleteTrail(trail)}} > Delete </Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Trail History:</h3>
        <hr />
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Trail Name</th>
                    <th>Location</th>
                    <th>Length</th>
                    <th>Difficulty</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {trailMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default OpenTrailTable;