import React from 'react';
import './Card.css';

function Card(data) {
    return (
        <div className="card">
            <img src={data.data.img} alt="train" className="image"></img>
            <p className="title">Titel</p>
            <p className="description">Beschreibung</p>
            <p className="price">Preis</p>
        </div>
    )
}

export default Card
