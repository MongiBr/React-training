import React from 'react'
import image from './images.jpg'
export default function Card (props){
    return (
        <div className="card" style={{width:'18rem;',margin: '25px'}}>
            <img src={image} class="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.title}</h6>
                <p className="card-text">{props.body}</p>
            </div>
        </div>
    )
}