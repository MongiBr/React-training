
import './App.css';
import Header from './header/header'
import Login from './login/login'
import { AuthContext, AuthProvider } from './context/authContext';
import { useContext, useState } from 'react';
import Cards from './card/cards'
import {
  BrowserRouter ,
  Switch,
  Route,
 
} from "react-router-dom";
import Details from './details';
import Profile from './profile/profile';
import Footer from './footer/footer';

function App() {
  const authContext=useContext(AuthContext);
 
  return (
    <div>
      
<BrowserRouter>

<Header brand='React Training'/>

     
    <Switch>
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
          
         <Route>
           <div className='not-found'>
             <h1>404 PAGE NOT FOUND</h1>
           </div>
         </Route>
         </Switch>  
        
    
    </BrowserRouter>
<Footer/>
    </div>


    
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
