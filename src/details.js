import React, {useEffect, useState} from 'react' 
import { useParams } from 'react-router';
import './details.css'

export default function Details (){
   useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setCard(data));
    },[])
    let { id } = useParams();
    const [card, setCard]= useState([
        
    ])
    console.log(id)
    return(
        
        <div>

             {card.map((c, index) =>(
                 c.id==id?
                <div className='details' >
                    <h2>{c.title}</h2>
                    <p>{c.body}</p>
                </div>: (null)
        ))}
        </div>
    )
}