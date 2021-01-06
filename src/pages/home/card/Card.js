import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
        <div className = "card_container">
            <div className="img_container">
                <img src= {props.img} alt="demo-img"/>
                <div className="title">
                <h3>{props.title}</h3>
            </div>
            </div>
            
        </div>
    )
}
