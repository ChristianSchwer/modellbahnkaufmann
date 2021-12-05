import train1 from './images/train1.jpg';
import train2 from './images/train2.jpg';
import train3 from './images/train3.jpg';
import train4 from './images/train4.jpg';
import train5 from './images/train5.jpg';
import Roco64191 from './images/Roco-64191.jpg';
import Roco73247 from './images/Roco-73247.jpg';

const Data = [
    {
        artikelNr: 1,
        image: train1,
        title: 'Lokomotive',
        desc: 'Zug im Bahnhof',
        price: '100€'
    },
    {
        artikelNr: 2,
        image: train2,
        title: 'Magnetschwebebahn',
        desc: 'Zug über Wasser',
        price: '120€'
    },
    {
        artikelNr: 3,
        image: train3,
        title: 'Straßenbahn',
        desc: 'Zug in der Stadt',
        price: '1002€'
    },
    {
        artikelNr: 4,
        image: train4,
        title: 'Personen Zug',
        desc: 'Zug im Bahnhof',
        price: '344€'
    },
    {
        artikelNr: 5,
        image: train5,
        title: 'Lokomotive',
        desc: 'Zug in Winter',
        price: '834€'
    },
    {
        artikelNr: 64191,
        image: Roco64191,
        title: '3-tlg. Set: Railjet, ÖBB',
        desc: '3-teiliges Wagenset „Railjet“ der Österreichischen Bundesbahnen, mit Italienzulassung. Epoche VI.',
        price: '834€',
        category: ['Waggon', 'Set']
    },
    {
        artikelNr: 73247,
        image: Roco73247,
        title: 'Elektrolokomotive 1216 017-4 "Railjet", ÖBB',
        desc: 'Elektrolokomotive 1216 017-4 "Railjet" der Österreichischen Bundesbahnen, Epoche VI',
        price: '435€',
        category: ['Lokomotive']
    }
]

export default Data