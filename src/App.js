import React, {useState, useEffect} from 'react';
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
      return sessionToken === localStorage.getItem('token') ? (
      <div>  
        <TrailIndex token={sessionToken}/>
        <footer class="page-footer font-small green">
              <div class="footer-copyright text-center py-3" style={{color: 'white'}}>© 2020 Copyright:
                <a href="https://indyhikes.herokuapp.com/" style={{color: '#2b7c20'}}> https://indyhikes.herokuapp.com/</a>
              </div>
        </footer> 
      </div>
      ) : (
      <Auth updateToken={updateToken} />
      );
    }

    return(
      <div>
        <Navbar clickLogout={clearToken} />
        {protectedViews()}
      </div>
    )
}

export default App;
