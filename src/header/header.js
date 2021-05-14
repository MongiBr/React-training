import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext';
import {NavLink, Link } from 'react-router-dom'
import { useHistory } from 'react-router'

function Header(props) {
    const authContext=useContext(AuthContext);
    let history =useHistory();
    function logout(){
    
        authContext.setAuth({})
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        history.push('/')
    }

   

  return (
        <nav className="navbar fixed-top ">
            <div className="container-fluid  mt-2">
                
                <span className="navbar-brand mb-0 h1">{props.brand}</span>
               
               { authContext.auth.email? (
                   <div> 
                       <Link to='/profile'>{authContext.auth.email}</Link>
                       <button className='btn btn-danger btn-sm' onClick={logout} style={{marginLeft:'20px'}}>Logout</button>
                  
                   </div>
                   
               ):(<Link to='/'>you need to login</Link>)}
            </div>    
        </nav>
  );
}

export default Header;
