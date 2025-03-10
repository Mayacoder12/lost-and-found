import { useState } from "react";
import { Link } from "react-router-dom";
import logo from './iiitk1logo.jpg'
function Home(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div>
      <div className="navbar">
        <div className="logo ">
        
          <img src={logo} alt="Lost & Found Logo"  />
          
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/lost">Lost</Link>
          <Link to="/report-lost">Report Lost</Link>
          <Link to="/found">Found</Link>
          <Link to="/report-found">Report Found</Link>
          <Link to="/profile">Profile</Link>
         

         
            
           < Link to="/login" className="auth-button" onClick={() => setIsLoggedIn(true)}>
              Login/Sign Up
            </Link >
          
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '4rem',
          marginBottom: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginLeft: '80px' 
        }}>
          <div>Find and Recover</div>
          <div>with Ease</div>
        </h1>
        <h3 style={{
  textAlign: 'center',
  marginLeft: '80px'
}}>
  Experience effortlessly recovery with our dedicated lost and found service
</h3>
      
      </div>
     <div className="lost-found-buttons">

        <button onClick={() => window.location.href='/lost'}>
          Lost
        </button>
        <button onClick={() => window.location.href='/found'}>
          Found
        </button>
      </div>
      
      
     
      
      </div> );
}



export default Home