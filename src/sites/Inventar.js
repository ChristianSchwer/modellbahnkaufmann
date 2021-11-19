import React from 'react';
import Card from '../cards/Card';
import './Inventar.css';
import train1 from '../images/train1.jpg';
import train2 from '../images/train2.jpg';
import train3 from '../images/train3.jpg';
import train4 from '../images/train4.jpg';
import train5 from '../images/train5.jpg';

function Inventar() {
    return (
        <div className="inventar">
            <div className="filter">
                Filter: 
                Suchbegriff: 
                <input type="text" placeholder="Suchbegriff"></input>
                Kategorie: 
                <select>
                    <option>Zug</option>
                    <option>Wagen</option>
                    <option>Zubehör</option>
                    <option>Häuser</option>
                    <option>Deko</option>
                </select>
                Hersteller: 
                <select>
                    <option>LGB</option>
                    <option>usw</option>
                </select>
                Preis ab:
                <input type="number" placeholder="Preis ab"></input>
                Preis bis:
                <input type="number" placeholder="Preis bis"></input>
                <button>SUCHEN</button>
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
