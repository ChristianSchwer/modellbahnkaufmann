import React, { useState, useEffect } from 'react';
import Card from '../cards/Card';
import './Inventar.css';
import inventurdata from '../Inventur2020.json';

function Inventar(data) {

    useEffect(() => {
        window.scrollTo (0, 0);
        }, []);
    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="inventar">
            <div className="filter">                        
                <label className="filter-label">
                    Suchbegriff:
                    <div className="filter-group">
                        <input type="text" placeholder="Suchbegriff" className="filter-search"></input>
                        <div className='filter-icon' onClick={handleClick}>
                            <i className="fas fa-filter"></i>
                        </div>
                    </div>
                </label>                       
                <label className={click ? 'filter-label' : 'filter-label deactive'}>
                    Kategorie: 
                    <select className="filter-kategorie">
                        <option>Zug</option>
                        <option>Wagen</option>
                        <option>Zubehör</option>
                        <option>Häuser</option>
                        <option>Deko</option>
                    </select>
                </label>                             
                <label className={click ? 'filter-label' : 'filter-label deactive'}>
                    Hersteller: 
                    <select className="filter-producer">
                        <option>LGB</option>
                        <option>usw</option>
                    </select>
                </label>                             
                <label className={click ? 'filter-label' : 'filter-label deactive'}>
                    Preis ab:
                    <input type="number" placeholder="Preis ab" className="filter-vkpreisup"></input>
                </label>                             
                <label className={click ? 'filter-label' : 'filter-label deactive'}>
                    Preis bis:
                    <input type="number" placeholder="Preis bis" className="filter-vkpreisdown"></input>
                </label>
                <button className="filter-button">SUCHEN</button>
            </div>
            <div className="cards">
                {Object.values(inventurdata).map(value => {
                    return Object.values(value).map((values,index) => {
                        if (index < 100) {
                            console.log(index)
                            console.log(values)
                            return (<Card key={index} data={{ value: values, addToShoppingcart: data.data.addToShoppingcart, showShoppingcartModal: data.data.showShoppingcartModal }} />)
                        } else {
                            return null
                        }
                    })
                })}
            </div>
        </div>
    )
}

export default Inventar
