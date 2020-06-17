import React from 'react';

import './Navbar.css';

import { makeStyles } from '@material-ui/core/styles';
import { palette } from '@material-ui/system';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    color: {
        backgroundColor: '#3f603c',
    },
})
  
const Navbar = (props) => {
    const classes = useStyles()

    const logoutBtn = () => {
        return localStorage.getItem('token') === null ? (
            ''
        ) : (
            <Button onClick={props.clickLogout} color='success' style={{color: 'black', backgroundColor: 'white'}} id='loBtn'>Logout</Button>
        );
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar className={classes.color} id='navBar'>
                    <Typography variant="h6" className={classes.title} href='/' id='navTitle'>
                        Indy Hikes
                    </Typography>
                    {logoutBtn()}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;