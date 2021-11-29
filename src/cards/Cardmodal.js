import React, { useState } from 'react';
import './Cardmodal.css';

function Cardmodal (data) {
    const [value, setValue] = useState(1);

    const increas = () => {
        setValue(value+1);
    }

    const decreas = () => {
        if (value < 2) {
            setValue(1);
        } else {
            setValue(value-1);
        }
    }

    return (
        <div id="myModal" className="modal" style={{display: data.data.show}}>
            <div className="modal-content">
                <span className="close" onClick={e => {data.data.close()}}>&times;</span>
                <div className="modal-content-layout">
                    <img src={data.data.image} alt='train' className="modal-image"/>
                    <div className="modal-content-description">
                        <p>{data.data.title}</p>
                        <p>{data.data.desc}</p>
                        <p>{data.data.price}</p>
                        <p>more information</p>
                        <div>
                            <button className="modal-content-description-button" onClick={e => {decreas();}}>-</button>
                            <input type="text" className="modal-content-description-input" value={value} readOnly></input>
                            <button className="modal-content-description-button" onClick={e => {increas();}}>+</button>
                        </div>
                        <div>
                            <button className="modal-content-description-button-add" onClick={e => {data.data.addToShoppingcart({value: value, title: data.data.title})}}>In den Einkaufswagen</button>
                        </div>
                        <div>
                            <button className="modal-content-description-button-add" onClick={e => {console.log('click')}}>Zum Einkaufswagen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardmodal;