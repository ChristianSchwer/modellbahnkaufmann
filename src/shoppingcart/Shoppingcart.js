import React, { useState } from 'react';
import './Shoppingcart.css';

function Shoppingcart (data) {
  
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const setEmailStatus = (emailStatus) => {
      if (!emailStatus && !message) {
        return ("Deine Nachricht")
      } else if (emailStatus) {
        return emailStatus
      } else {
        return message
      }
    }  

    const formatImagePath = (path, name) => {
        if (!path) {
            return path;
        }
        let formatedPath = '.' + path.slice(67) + name;
        formatedPath.replace(/\\/g, "/");
        return formatedPath;
    }

    const prepareData = (itemsObject) => {
        if (Object.values(itemsObject).length === 0){
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
                                        <td><img alt={item.BildName} src={formatImagePath(item.BildPfad, item.BildName)} className='scImage' /></td>
                                        <td>{item.text1}</td>
                                        <td>{+(Math.round((item.VkPreis*item.amount) + "e+2")  + "e-2") + '€'}</td>
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
                                <th>Preis</th>
                                <th>Löschen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(itemsObject).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.amount}</td>
                                        <td><img alt={item.BildName} src={formatImagePath(item.BildPfad, item.BildName)} className='scImage' /></td>
                                        <td>{item.artikelnr}</td>
                                        <td>{item.text1}</td>
                                        <td>{+(Math.round((item.VkPreis*item.amount) + "e+2")  + "e-2") + '€'}</td>
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

    const conclusion = (itemsObject) => {
        if (Object.values(itemsObject.shoppingcart).length === 0) {
            return null;
        } else {
            return (
                <div>
                    <p style={{'textAlign': 'left'}}>Gesamte Menge: {sumAmount(itemsObject.shoppingcart)}</p>
                    <p style={{'textAlign': 'left'}}>Gesamter Preis: {sumPrice(itemsObject.shoppingcart)} €</p>
                    <p style={{'textAlign': 'left'}}>Warenkorb anfragen:</p>
                    <section className="footer-message">
                        <input type="email" placeholder="Deine E-Mail Adresse" className="footer-massage-email" onChange={(e) => setEmail(e.target.value)}></input>
                        <textarea type="textarea" placeholder="Deine Nachricht" className="footer-message-text" onChange={(e) => setMessage(e.target.value) } value={setEmailStatus(itemsObject.emailStatus)}></textarea>
                        <button className="footer-message-button" onClick={e => {itemsObject.sendMail(email, message, itemsObject.shoppingcart)}}>Send <i className="fas fa-angle-double-right"></i></button>
                     </section> {/*// itemsObject.shoppingcart */}
                    <p style={{'textAlign': 'left'}}>Im Anhang befindet sich dein Warenkorb.</p>
                </div>
            )
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
            return priceSum = priceSum + (item.VkPreis * item.amount);
        })
        return priceSum;
        // return +(Math.round(priceSum + "e+2")  + "e-2");
    }

    return (
        <div id="myModal" className="modal-sc" style={{display: data.data.showScModal}}>
            <div className="modal-sc-content">
                <span className="close" onClick={e => {data.data.closeShoppingcartModal()}}>&times;</span>
                <div className="modal-sc-content-layout">
                    <div className="modal-sc-content-description">
                        {prepareData(data.data.shoppingcart)}
                        {conclusion(data.data)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shoppingcart;