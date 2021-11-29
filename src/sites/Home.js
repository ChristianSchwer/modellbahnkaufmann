import { React, useEffect } from 'react';
import './Home.css';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <div className="news">
                <h1>Home Page comming soon!</h1>
                <p><b>Im Dezember ist es soweit!</b></p>
                <p>Wir übernehmen das Geschäft Modellbahn Kaufmann</p>
                <p>in Dornbirn am neuen Standort in der Bahnhofsstraße 12.</p>
                <p>Wir sind schon fleißig am Vorbereiten</p>
                <p>und halten euch auf dem laufenden.</p>
                <p>Fam. Bereuter</p>
            </div>
        </div>
    )
}

export default Home
