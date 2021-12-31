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
                            {Object.values(itemsObject).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.amount}</td>
                                        <td><img alt={item.title} src={item.image} className='scImage' /></td>
                                        <td>{item.title}</td>
                                        <td>{parseInt(item.vkpreis)*item.amount + '€'}</td>
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
                                <th>Artikelnummer</th>
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
                                        <td>{item.amount}</td>
                                        <td><img alt={item.title} src={item.image} className='scImage' /></td>
                                        <td>{item.artikelnr}</td>
                                        <td>{item.title}</td>
                                        <td>{item.desc}</td>
                                        <td>{parseInt(item.vkpreis)*item.amount + '€'}</td>
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

    const sumAmount = (itemsObject) => {
        let amountSum = 0;
        Object.values(itemsObject).map(item => {
            return amountSum = amountSum + item.amount;
        })
        return amountSum;
    }

    const sumPrice = (itemsObject) => {
        let priceSum = 0;
        Object.values(itemsObject).map(item => {
            return priceSum = priceSum + (item.vkpreis * item.amount);
        })
        return priceSum;
    }

    return (
        <div id="myModal" className="modal-sc" style={{display: data.data.showScModal}}>
            <div className="modal-sc-content">
                <span className="close" onClick={e => {data.data.closeShoppingcartModal()}}>&times;</span>
                <div className="modal-sc-content-layout">
                    <div className="modal-sc-content-description">
                        {prepareData(data.data.shoppingcart)}
                        <div>
                            <p style={{'textAlign': 'left'}}>Gesamte Menge: {sumAmount(data.data.shoppingcart)}</p>
                            <p style={{'textAlign': 'left'}}>Gesamter Preis: {sumPrice(data.data.shoppingcart)} €</p>
                            <p style={{'textAlign': 'left'}}>Warenkorb anfragen:</p>
                            <section className="footer-message">
                                <input type="email" placeholder="Deine E-Mail Adresse" className="footer-massage-email"></input>
                                <textarea type="textarea" placeholder="Deine Nachricht" className="footer-message-text"></textarea>
                                <button className="footer-message-button" onClick={e => {data.data.sendMail('email', 'text', data.data.shoppingcart)}}>Send <i className="fas fa-angle-double-right"></i></button>
                            </section>
                            <p style={{'textAlign': 'left'}}>Im Anhang befindet sich dein Warenkorb.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shoppingcart;