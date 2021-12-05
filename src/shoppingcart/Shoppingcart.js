import React from 'react';
import './Shoppingcart.css';

function Shoppingcart (data) {

    const prepareData = (itemsObject) => {
        console.log(itemsObject)
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
                            {Object.values(itemsObject).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{Object.values(item)[0].amount}</td>
                                        <td><img alt={Object.values(item)[0].title} src={Object.values(item)[0].image} className='scImage' /></td>
                                        <td>{Object.values(item)[0].title}</td>
                                        <td>{parseInt(Object.values(item)[0].price)*Object.values(item)[0].amount + '€'}</td>
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
                            {Object.values(itemsObject).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{Object.values(item)[0].amount}</td>
                                        <td><img alt={Object.values(item)[0].title} src={Object.values(item)[0].image} className='scImage' /></td>
                                        <td>{Object.values(item)[0].title}</td>
                                        <td>{Object.values(item)[0].desc}</td>
                                        <td>{parseInt(Object.values(item)[0].price)*Object.values(item)[0].amount + '€'}</td>
                                        <td><button onClick={e => {data.data.deletFromShoppingcart(item)}}>Löschen</button></td>
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
        <div id="myModal" className="modal-sc" style={{display: data.data.showScModal}}>
            <div className="modal-sc-content">
                <span className="close" onClick={e => {data.data.closeShoppingcartModal()}}>&times;</span>
                <div className="modal-sc-content-layout">
                    <div className="modal-sc-content-description">
                        {prepareData(data.data.shoppingcart)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shoppingcart;