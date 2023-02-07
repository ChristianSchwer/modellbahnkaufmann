import React from 'react';
import './Card.css';

function Card(data) {
    return (
        <div>
            <div className="card">
                <div className="card-image-wrap">
                    <img src={process.env.PUBLIC_URL + data.data.value.image} alt={data.data.value.BildName} className="card-image"></img>
                </div>
                <div className="card-text-wrap">
                    <h4 className="title">{data.data.value.title}</h4>
                    <p className="price">{'Preis: ' + (+(Math.round(data.data.value.vkpreis + "e+2")  + "e-2")) + '€'}</p>
                    <p className="price">{'Artikelnummer: ' + data.data.value.artikelnr}</p>
                    <p className="price">{'Hersteller: ' + data.data.value.producer}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
