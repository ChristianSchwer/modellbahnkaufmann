import React, { useEffect } from 'react';
import './Legal.css';

function Legal() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div class="legal">
            <h1>Impressum</h1>
            <h2>Modellbahn Kaufmann</h2>
            <h3>Unternehmensgegenstand:</h3>
            <ul>
                <li>...</li>
                <li>...</li>
                <li>Handel mit Waren aller Art, insbesondere mit elektrotechnischen Geräten und Komponenten</li>
            </ul>
            <h3>Firmensitz</h3>
            <p>Bahnhofstrasse 12, 6850 Dornbirn AT</p>
            <h3>Kontakt</h3>
            <p>+43 5572 54149</p>
            <p>modellbahn@avidonet.at</p>
            <h3>UID-Nummer</h3>
            <p>ATU77454746</p>
            <h3>Gewerbeordnung</h3>
            <p>www.ris.bka.gv.at</p>
            <h3>Aufsichtsbehörde</h3>
            <p>Bezirkshauptmannschaft Dornbirn</p>
            <h3>Angaben zur Online-Streitbeilegung</h3>
            <p>Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: https://ec.europa.eu/odr. Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten.</p>
            <h3>Geschäftsführer</h3>
            <p>Ursula Rosa Bereuter</p>
        </div>
    )
}

export default Legal