import { React, useState } from 'react';
import './Card.css';
import Cardmodal from './Cardmodal';

function Card(data) {
    const [show, setShow] = useState('none');

    const showModal = () => {
        setShow('block');
    }
    
    const onClose = (e) => {
        setShow('none');
    }

    return (
        <div>
            <div className="card" onClick={e => {showModal();}}>
                <div className="card-image-wrap">
                    <img src={data.data.value.image} alt={data.data.value.title} className="card-image"></img>
                </div>
                <div className="card-text-wrap">
                    <p className="title">{data.data.value.title}</p>
                    <p className="description">{data.data.value.desc}</p>
                    <p className="price">{'Preis: ' + (+(Math.round(data.data.value.vkpreis + "e+2")  + "e-2")) + '€'}</p>
                    <p className="price">{'Artikelnummer: ' + data.data.value.artikelnr}</p>
                    <p className="price">{'Lagerbestand: ' + data.data.value.lagerbest}</p>
                </div>
            </div>
            <Cardmodal data={{ close: onClose, show: show, value: data.data.value, addToShoppingcart: data.data.addToShoppingcart, showShoppingcartModal: data.data.showShoppingcartModal }} />
        </div>
    )
}

export default Card
