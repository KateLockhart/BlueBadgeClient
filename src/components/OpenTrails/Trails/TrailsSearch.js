import React, {useState, useEffect, Link} from 'react';

import './TrailSearch.css';

import {Input, Form, Container} from 'reactstrap';
import APIURL from './../../../helpers/environment';


const TrailsSearch = (props) => {
    const [trails, setTrails] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const fetchResults = () => {
        fetch(`${APIURL}/trails`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        }).then((res) => res.json())
        .then((logData) => {
            setTrails(logData.trails);
            console.log('Testing ',logData.log);
        })
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        fetchResults();
        let word = searchTerm;
        let filtered = trails.filter(result => {
            if (result.trailname.toLowerCase().includes(word.toLowerCase())){
                return result;
            } else if (result.location.toLowerCase().includes(word.toLowerCase())){
                return result;
            } else if (result.length.toLowerCase().includes(word.toLowerCase())){
                return result;
            } else if (result.difficulty.toLowerCase().includes(word.toLowerCase())){
                return result;
            }
        })
        setSearchResults(filtered)
    }, [searchTerm]);
   
     
    return(
        <div id='searchBar'>
            <div className="active-green-4 mb-4" id='trailSearchSection'>
                <h3 id='searchTitle'>Search for the name, location, length, or difficulty of trails in Indy:</h3>
                <Form>
                    <Input className="form-control" type="text" value={searchTerm} onChange={handleChange} placeholder="Search" aria-label="Search" style={{fontWeight: '575'}}/>
                    <Container id='searchContainer'>
                        {searchResults.map (item => (
                            <ul>
                                <li id='listTrailName'>{item.trailname}</li>
                                <li id='listItem'>{item.location}</li>
                                <li id='listItem'>{item.length}</li>
                                <li id='listItem'>{item.difficulty}</li>
                                <li id='listItem'><a target='blank' href={item.link} id='aTags'>{item.link}</a></li>
                                <li id='listItem'>{item.comment}</li>
                            </ul>
                        ))}    
                    </Container>    
                </Form>
            </div>
        </div>    
    )
}

export default TrailsSearch;