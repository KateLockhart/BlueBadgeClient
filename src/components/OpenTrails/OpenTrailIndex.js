import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import OpenTrailTable from './OpenTrailTable';
import OpenTrailEdit from './OpenTrailEdit';
import OpenTrailCreate from './OpenTrailCreate';
import APIURL from '../../../src/helpers/environment';

const OpenTrailIndex = (props) => {
    const [trails, setTrails] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [trailsToUpdate, setTrailsToUpdate] = useState({});

    const fetchTrails = () => {
        fetch(`${APIURL}/opentrails`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then( (res) => res.json() )
            .then ((trailData) => {
                setTrails(trailData.opentrails);
                console.log(trailData.opentrails)
            })
    }

    const editUpdateOpenTrail = (trails) => {
        setTrailsToUpdate(trails);
        console.log(trails);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchTrails();
    }, [])

    return(
        <Container>
            <Row>
                <Col md='3'>
                    <OpenTrailCreate fetchTrails={fetchTrails} token={props.token} />
                </Col>
                <Col md='12'>
                    <OpenTrailTable trails={trails} editUpdateOpenTrail={editUpdateOpenTrail} updateOn={updateOn} fetchTrails={fetchTrails} token={props.token} />
                </Col>
                {updateActive ? <OpenTrailEdit trailsToUpdate={trailsToUpdate}
                updateOff={updateOff} token={props.token} fetchTrails={fetchTrails}/> : <></>} 
            </Row>
        </Container>
    )
}

export default OpenTrailIndex;