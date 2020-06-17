import React from 'react';
import { Table } from 'reactstrap';
import APIURL from '../../helpers/environment';

import IconButton from '@material-ui/core/IconButton';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';


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
                    <td>{trail.trailname}</td>
                    <td>{trail.location}</td>
                    <td>{trail.length}</td>
                    <td>{trail.difficulty}</td>
                    <td>{trail.comment}</td>
                    <td style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <IconButton style={{backgroundColor: 'white', height: '30px', width: '30px', borderRadius: '50%', outline: 'none'}} title='Edit' >
                            <EditTwoToneIcon onClick={() => {props.editUpdateOpenTrail(trail); props.updateOn()}} />
                        </IconButton>
                        <IconButton  style={{backgroundColor: 'white', height: '30px', width: '30px', borderRadius: '50%', marginTop: '7px', outline: 'none'}} title='Delete'>
                            <DeleteOutlineTwoToneIcon onClick={() => {deleteTrail(trail)}} /> 
                        </IconButton>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3 style={{textAlign: 'center', color: 'white', fontSize: '50px', marginTop: '20px'}}>Trail History:</h3>
        <hr />
        <Table striped style={{backgroundColor: '#3f603c'}}>
            <thead>
                <tr style={{textAlign: 'center', fontSize: '18px', color: 'white'}}>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Length</th>
                    <th>Difficulty</th>
                    <th>Comment</th>
                    <th>Edit / Delete</th>
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