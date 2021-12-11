import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './navbar/Navbar.js';
import Home from './sites/Home.js';
import About from './sites/About.js';
import Inventar from './sites/Inventar';
import Footer from './footer/Footer.js';
import Shoppingcart from './shoppingcart/Shoppingcart';

function App() {
  const [shoppingcart, setShoppingcart] = useState({})
  const [showScModal, setshowScModal] = useState('none');

  const addToShoppingcart = (item) => {
    let amount = item.amount;
    // check if an item is already in the shoppingcart
    Object.values(shoppingcart).forEach(scItem => {
      // if an item is already in the shoppingcart ask for update
      if (scItem.title === item.value.title) {
        console.log('Dieser Artikel ist schon im Warenkorb. Trotzdem hinzufügen?')
        if (1 === 1) {
          // update amount
          amount = item.amount + scItem.amount;
        }
      }
    });
    // change item structure
    let changedItem = {};
    changedItem[item.value.artikelnr] = item.value;
    changedItem[item.value.artikelnr]['amount'] = amount;
    // check if something is in the shoppingcart
    if (Object.entries(shoppingcart).length === 0) {
      setShoppingcart(changedItem);
    } else {
      // add or update the shoppingcart
      setShoppingcart({...shoppingcart, [Object.values(changedItem)[0].artikelnr]: Object.values(changedItem)[0]});
    }
  }

  const deletFromShoppingcart = (item) => {
    console.log(Object.values(item)[0].title)
    setShoppingcart(shoppingcart.filter(i => Object.values(i)[0].title !== Object.values(item)[0].title));
  }

  // Object.values(i)[0].title !== Object.values(item)[0].title
  const showShoppingcartModal = () => {
    setshowScModal('block');
  }
  
  const closeShoppingcartModal = (e) => {
    setshowScModal('none');
  }

  return (
    <div className="App">
      <Navbar data={{ shoppingcart: shoppingcart, showShoppingcartModal: showShoppingcartModal }}/>
      <Shoppingcart data={{ closeShoppingcartModal: closeShoppingcartModal, showScModal: showScModal, shoppingcart: shoppingcart, deletFromShoppingcart: deletFromShoppingcart }}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/inventar" element={<Inventar data={{ addToShoppingcart: addToShoppingcart, showShoppingcartModal: showShoppingcartModal }}/>} />
        <Route path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
