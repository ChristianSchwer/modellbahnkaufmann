import React, {useState} from 'react';
import Card from '../cards/Card';
import './Inventar.css';
import train1 from '../images/train1.jpg';
import train2 from '../images/train2.jpg';
import train3 from '../images/train3.jpg';
import train4 from '../images/train4.jpg';
import train5 from '../images/train5.jpg';

function Inventar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <div className="inventar">
            <div className="filter">                        
                <label className="filter-label">
                    Suchbegriff:
                    <input type="text" placeholder="Suchbegriff" className="filter-search"></input>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className="fas fa-filter"></i>
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
                <Card data={ {img:train1}}/>
                <Card data={ {img:train2}} />
                <Card data={ {img:train3}} />
                <Card data={ {img:train4}} />
                <Card data={ {img:train5}} />
                <Card data={ {img:train1}}/>
                <Card data={ {img:train2}} />
                <Card data={ {img:train4}} />
                <Card data={ {img:train5}} />
                <Card data={ {img:train1}}/>
                <Card data={ {img:train2}} />
                <Card data={ {img:train3}} />
                <Card data={ {img:train4}} />
                <Card data={ {img:train2}} />
                <Card data={ {img:train3}} />
                <Card data={ {img:train4}} />
                <Card data={ {img:train5}} />
                <Card data={ {img:train1}}/>
                <Card data={ {img:train2}} />
                <Card data={ {img:train3}} />
                <Card data={ {img:train4}} />
                <Card data={ {img:train5}} />
                <Card data={ {img:train1}}/>
                <Card data={ {img:train3}} />
                <Card data={ {img:train4}} />
                <Card data={ {img:train5}} />
            </div>
        </div>
    )
}

export default Inventar
