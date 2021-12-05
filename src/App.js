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
  const [shoppingcart, setShoppingcart] = useState([])
  const [showScModal, setshowScModal] = useState('none');

  const addToShoppingcart = (item) => {
    // change item structure
    let changedItem = {};
    changedItem[item.value.artikelNr] = item.value;
    changedItem[item.value.artikelNr]['amount'] = item.amount;
    console.log(changedItem)
    // check if something is in the shoppingcart
    if (Object.entries(shoppingcart).length === 0) {
      setShoppingcart([changedItem]);
    } else {
      shoppingcart.forEach((scItem, index) => {
        // yes --> update
        console.log(index)
        console.log(Object.values(scItem))
        console.log(item)
        if (Object.values(scItem)[0].title === item.value.title) {
          console.log('y')
          // setShoppingcart(shoppingcart => [...shoppingcart, changedItem]);
    //       setShoppingcart((prevState) => ({
    //         ...prevState,
    //         [item.value.artikelNr]: {
    //           ...prevState[item.value.artikelNr],
    //           value: Object.values(scItem)[0].value + item.value
    //         }
            
    // //         //     value: scItem.value + item.value,
    // //         //     price: scItem.price + item.price,
    //       }));
        } else {
          console.log('n')
          // no --> add
          setShoppingcart([...shoppingcart, changedItem]);
        }
      });
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
