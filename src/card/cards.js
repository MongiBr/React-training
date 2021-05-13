import React, { useEffect, useState } from 'react' 
import { useHistory } from 'react-router'
import Card from './card'
import './cards.css'


export default function Cards(){

    const [card, setCard]= useState([
        
    ])
    const [search, setSearch]= useState("")

    let history= useHistory();
    function handleChange (e,id) {
       
        history.push(`/details/${id}`)

    }


    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setCard(data));
    },[])

    const [limit , setLimit]=useState(3);
    const items = card.slice(0, limit) 
    console.log(search)
    return (
        <>
        <div className='search'>
            <h4> search a post from here </h4>
            <input type='search' className='form-control search-input'  value={search} onChange={e=> setSearch(e.target.value)} />
       </div>
        <div className='cards-display'>
      
        {items.map((c, index) =>(
           (c.title).includes(search)?
                <div onClick={e=>handleChange(e,c.id)}>
                <Card
                
                title={c.title}
                body={c.body}
                
                /> </div>: null
        ))}
     
          </div>
          <div className='pagination'>
             <button className='btn btn-primary btn-lg' onClick={e=>setLimit(limit+3)}>See more</button>
             </div>
          </>

    )

}