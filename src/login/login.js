import React, {useContext, useState} from 'react'
import { AuthContext } from '../context/authContext';
import './login.css'
import data from '../Data/data'
 

function Login() {
    const authContext=useContext(AuthContext);
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
     const [error, setError]=useState('');



    function login(e){
        e.preventDefault();
        console.log({email,password})

      
        data.map(user=> {
          if (email==user.email && password==user.password){
            
            localStorage.setItem('token', password);
            localStorage.setItem('email',email);
            authContext.setAuth({password,email})

        }else
        {
          setError('Wrong details')
        }
      })
        
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
                {
                  error!=''?
                  <div class="alert alert-danger" role="alert">
  {error}
</div> : null
                }
                <button type="submit" className="btn btn-primary align" onClick={login}>Submit</button>
    </form>
    </div>
  );
}

export default Login;
