import React from 'react';
import './Cardmodal.css';

function Cardmodal (data) {
    return (
        <div id="myModal" className="modal" style={{display: data.data.show}}>
            <div className="modal-content">
                <span className="close" onClick={e => {data.data.close()}}>&times;</span>
                <div className="modal-content-layout">
                    <img src={data.data.image} alt='train' className="modal-image"/>
                    <div>
                        <p>{data.data.title}</p>
                        <p>{data.data.desc}</p>
                        <p>{data.data.price}</p>
                        <p>more information</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardmodal;