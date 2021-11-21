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
                    <img src={data.data.image} alt="train" className="card-image"></img>
                </div>
                <div className="card-text-wrap">
                    <p className="title">{data.data.title}</p>
                    <p className="description">{data.data.desc}</p>
                    <p className="price">{data.data.price}</p>
                </div>
            </div>
            <Cardmodal data={{close: onClose, show: show, image: data.data.image, title: data.data.title, desc: data.data.desc, price: data.data.price}} />
        </div>
    )
}

export default Card
