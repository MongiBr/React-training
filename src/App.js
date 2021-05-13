import logo from './logo.svg';
import './App.css';
import Header from './header/header'
import Login from './login/login'
import { AuthContext, AuthProvider } from './context/authContext';
import { useContext, useState } from 'react';
import Cards from './card/cards'
import {
  BrowserRouter ,
  
  Route,
 
} from "react-router-dom";
import Details from './details';
import Profile from './profile/profile';

function App() {
  const authContext=useContext(AuthContext);
  
  const [user, setUser]=useState({
    email:'mongi@ohif.com',
    nom:'mongi berrima'

  })
  

  return (
<BrowserRouter>
<Header/>

      <div className='container'>

        <Route exact path="/profile">
           <div className="container">
    
        <Profile/>
      
    </div>
          </Route>
     
    <Route exact path="/details/:id">
           <div className="container">
    
       { authContext.auth.email? <Details/> : null}
      
    </div>
          </Route>
     
     
          <Route exact path="/">
           <div className="container">
    
    { authContext.auth.email? <Cards/> : <Login/>}
      
    </div>
          </Route>
         
          
        
      </div>
    </BrowserRouter>



    
  );
}

function AppWithStore(){
  return(
     <AuthProvider>
    <App/>
  </AuthProvider>
  )
 
}

export default AppWithStore;
