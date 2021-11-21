import React, {useState} from 'react';
import Card from '../cards/Card';
import './Inventar.css';
import data from '../Data.js';

function Inventar() {
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
                    <input type="number" placeholder="Preis ab" className="filter-priceup"></input>
                </label>                             
                <label className={click ? 'filter-label' : 'filter-label deactive'}>
                    Preis bis:
                    <input type="number" placeholder="Preis bis" className="filter-pricedown"></input>
                </label>
                <button className="filter-button">SUCHEN</button>
            </div>
            <div className="cards">
                {data.map((value, index) => {
                    return (<Card key={index} data={value} />)
                })}
                {data.map((value, index) => {
                    return (<Card key={index} data={value} />)
                })}
                {data.map((value, index) => {
                    return (<Card key={index} data={value} />)
                })}
                {data.map((value, index) => {
                    return (<Card key={index} data={value} />)
                })}
                {data.map((value, index) => {
                    return (<Card key={index} data={value} />)
                })}
            </div>
        </div>
    )
}

export default Inventar
