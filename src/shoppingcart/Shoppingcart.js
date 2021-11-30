import React from 'react';
import './Shoppingcart.css';

function Shoppingcart (data) {

    const prepareData = (itemsObject) => {
        if (itemsObject.length === 0){
            return (
                <p>Keine Produkte im Warenkorb</p>
            )
        } else {
            if (window.screen.availWidth < 960) {
                return (
                    <table>
                        <thead>
                            <tr>
                                <th>Menge</th>
                                <th>Bild</th>
                                <th>Produkt</th>
                                <th>Preis</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemsObject.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.value}</td>
                                        <td><img alt={item.title} src={item.img} className='scImage' /></td>
                                        <td>{item.title}</td>
                                        <td>{parseInt(item.price)*item.value + '€'}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table> 
                )
            } else {
                return (
                    <table>
                        <thead>
                            <tr>
                                <th>Menge</th>
                                <th>Bild</th>
                                <th>Produkt</th>
                                <th>Beschreibung</th>
                                <th>Preis</th>
                                <th>Löschen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemsObject.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.value}</td>
                                        <td><img alt={item.title} src={item.img} className='scImage' /></td>
                                        <td>{item.title}</td>
                                        <td>{item.desc}</td>
                                        <td>{parseInt(item.price)*item.value + '€'}</td>
                                        <td><button>Löschen</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table> 
                )
            }
        }
    }

    return (
        <div id="myModal" className="modal" style={{display: data.data.showScModal}}>
            <div className="modal-content">
                <span className="close" onClick={e => {data.data.closeShoppingcartModal()}}>&times;</span>
                <div className="modal-content-layout">
                    <div className="modal-content-description">
                        {prepareData(data.data.shoppingcart)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shoppingcart;