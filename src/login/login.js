import React, {useContext, useState} from 'react'
import { AuthContext } from '../context/authContext';
import './login.css'

 

function Login() {
    const authContext=useContext(AuthContext);
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

function loginUser(credentials) {
 return fetch('https://serverdicom.herokuapp.com/users/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
   
 })
   .then(data => data.json()
   )
  
}


    function login(e){
        e.preventDefault();
        console.log({email,password})

       const token = loginUser({
      email,
      password
        });
        
        if (token){
            
            localStorage.setItem('token', token);
            localStorage.setItem('email',email);
            authContext.setAuth({token,email})

        }else{
            alert('wrong delatils!');
        }
    }
  return (
    <div className='login'>
            <form className="mt-5">
                <div className="mb-3">
                    <label  className="form-label ">Email address</label>
                    <input type="email" className="form-control align " value={email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
                    
                
                    <label className="form-label  " value={password}>Password</label>
                    <input type="password" className="form-control align" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                
                <button type="submit" className="btn btn-primary align" onClick={login}>Submit</button>
    </form>
    </div>
  );
}

export default Login;
