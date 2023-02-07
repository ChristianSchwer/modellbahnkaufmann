import { React, useEffect, useState } from 'react';
import Instagramm from '../cards/Instagramm';
import './Home.css';

function Home() {
    const [openTime, setOpenTime] = useState({})

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    useEffect(() => {
        fetch('Oeffnungszeiten.json')
        .then((r) => r.json())
        .then((data) => {
            //set Öffnungszeiten
            setOpenTime(data);
        })
    }, [Object.keys(openTime).length]);

    if (Object.keys(openTime).length === 0) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <div>
                <div className="news">
                    <h1>Herzlich Willkommen!</h1>
                    <h2>Wir sind das Fachgeschäft für Modellbau und Modelleisenbahn in Vorarlberg.</h2>
                    <p>Bei Fragen oder auch Problemen rund um euer geliebtes Hobby stehen wir euch gerne zur Verfügung.</p>
                    <p>Nicht nur die Neuheiten können Sie bei uns entdecken, </p>
                    <p>sondern auch bei älteren Modellen, schauen wir gerne in unserer Hauseigenen Werkstatt was fehlt.</p><br></br>
                    <h3 style={{'lineHeight': '0.8', 'paddingLeft': '0%'}}>Öffnungszeiten:</h3>
                    <p style={{'lineHeight': '0.3', 'paddingLeft': '0%'}}>{openTime['Oeffnungszeiten']['Zeile1']}</p>
                    <p style={{'lineHeight': '0.3', 'paddingLeft': '0%'}}>{openTime['Oeffnungszeiten']['Zeile2']}</p>
                    <p style={{'lineHeight': '0.3', 'paddingLeft': '0%'}}>{openTime['Oeffnungszeiten']['Zeile3']}</p>
                </div>
                <div className="instaPosts">
                    <Instagramm />
                </div>
            </div>
        )
    }
}

export default Home
