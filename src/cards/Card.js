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
                    <img src={data.data.value.image} alt="train" className="card-image"></img>
                </div>
                <div className="card-text-wrap">
                    <p className="title">{data.data.value.title}</p>
                    <p className="description">{data.data.value.desc}</p>
                    <p className="price">{data.data.value.price}</p>
                </div>
            </div>
            <Cardmodal data={{ close: onClose, show: show, image: data.data.value.image, 
                                title: data.data.value.title, desc: data.data.value.desc, 
                                price: data.data.value.price, addToShoppingcart: data.data.addToShoppingcart, showShoppingcartModal: data.data.showShoppingcartModal }} />
        </div>
    )
}

export default Card
