import React, {useContext, useEffect, useState} from 'react' 
import { useParams } from 'react-router';
import { AuthContext } from '../context/authContext';
import './profile.css'

export default function Profile (){

    const authContext= useContext(AuthContext);
   useEffect(()=>{
            fetch('https://serverdicom.herokuapp.com/users')
            .then(response => response.json())
            .then(data => setUser(data));
    },[])
    let { id } = useParams();
    const [user, setUser]= useState([    
    ])
    
    return(
        
        <div>

             {user.map((c, index) =>(
                 c.email==authContext.auth.email?
                <div className='profile' >
                    <div><label className='h4'>First Name :</label> <span>{c.nom}</span></div>
                     <div> <label  className='h4'>Last Name :</label> <span>{c.prenom}</span></div>
                      <div><label  className='h4'>Email : </label> <span>{c.email}</span></div>
                </div>: (null)
        ))}
        </div>
    )
}