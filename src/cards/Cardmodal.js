import React, { useState } from 'react';
import './Cardmodal.css';

function Cardmodal (data) {
    const [amount, setAmount] = useState(1);

    const increas = () => {
        setAmount(amount+1);
    }

    const decreas = () => {
        if (amount < 2) {
            setAmount(1);
        } else {
            setAmount(amount-1);
        }
    }

    return (
        <div id="myModal" className="modal" style={{display: data.data.show}}>
            <div className="modal-content">
                <span className="close" onClick={e => {data.data.close()}}>&times;</span>
                <div className="modal-content-layout">
                    <img src={data.data.value.image} alt={data.data.value.title} className="modal-image"/>
                    <div className="modal-content-description">
                        <p>{data.data.value.title}</p>
                        <p>{data.data.value.desc}</p>
                        <p>{(+(Math.round(data.data.value.vkpreis + "e+2")  + "e-2")) + '€'}</p>
                        <p>{'Artikelnummer: ' + data.data.value.artikelnr}</p>
                        <p>{'Lagerbestand: ' + data.data.value.lagerbest}</p>
                        <p>{'Barcode: ' + data.data.value.barcode}</p>
                        <p>{'Hersteller: ' + data.data.value.porducer}</p>
                        <p>{'test: ' + data.data.value.category}</p>
                        <div>
                            <button className="modal-content-description-button" onClick={e => {decreas();}}>-</button>
                            <input type="text" className="modal-content-description-input" value={amount} readOnly></input>
                            <button className="modal-content-description-button" onClick={e => {increas();}}>+</button>
                        </div>
                        <div>
                            <button className="modal-content-description-button-add" onClick={e => {data.data.addToShoppingcart({amount: amount, value: data.data.value})}}>In den Einkaufswagen</button>
                        </div>
                        <div>
                            <button className="modal-content-description-button-add" onClick={e => {data.data.close(); data.data.showShoppingcartModal()}}>Zum Einkaufswagen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardmodal;