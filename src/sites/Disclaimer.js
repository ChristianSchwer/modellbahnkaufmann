import React, { useEffect } from 'react';
import './Disclaimer.css';

function Disclaimer() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div class="disclaimer">
            <h1 className='title'>Datenschutz</h1>
            <div class="sc-kstrdz btjemE">
                <p className='text'>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. 
                    Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). 
                    In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
                </p>
                <p className='text'>Beim Besuch unserer Webseite wird Ihre IP-Adresse, Beginn und Ende der Sitzung für die Dauer dieser Sitzung erfasst. 
                    Dies ist technisch bedingt und stellt damit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO dar. 
                    Soweit im Folgenden nichts anderes geregelt wird, werden diese Daten von uns nicht weiterverarbeitet.
                </p>
            </div>
            <div class="sc-kstrdz btjemE">
                <h3 className='title2'>Kontakt mit uns</h3>
                <p className='text'>Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage 
                    und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
            </div>
            <div class="sc-kstrdz btjemE">
                <h3 className='title2'>Ihre Rechte</h3>
                <p className='text'>Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, 
                    Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche 
                    sonst in einer Weise verletzt worden sind, können Sie sich bei uns oder der Datenschutzbehörde beschweren.
                </p>
            </div>
        </div>
    )
}

export default Disclaimer