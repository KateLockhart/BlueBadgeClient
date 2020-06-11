import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar/Navbar';
import Auth from './components/auth/Auth';
import TrailIndex from './components/OpenTrails/OpenTrailIndex';
import './App.css';

function App() {
    const [sessionToken, setSessionToken] = useState('');

    useEffect(() => {
      if(localStorage.getItem('token')){
        setSessionToken(localStorage.getItem('token'));
      }
    }, [])

    const updateToken = (newToken) => {
      localStorage.setItem('token', newToken);
      setSessionToken(newToken);
      console.log(sessionToken);
    }

    const clearToken = () => {
      localStorage.clear();
      setSessionToken('');
    }

    const protectedViews = () => {
      return (sessionToken === localStorage.getItem('token') ? <TrailIndex token={sessionToken} /> 
      : <Auth updateToken={updateToken} />)
    }

    return(
      <div>
        <Navbar clickLogout={clearToken} />
        {protectedViews()}
      </div>
    )
}

export default App;
