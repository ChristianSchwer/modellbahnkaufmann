// import React, { useEffect, useState } from 'react';
// import Card from '../cards/Card';
import React from 'react';
import './Inventar.css';

function Inventar() {
    return (
        <h1>Shop ist in bearbeitung!</h1>
    )
    // const [shopData, setShopData] = useState({});
    // const [producers, setProducers] = useState([]);
    // const [categories, setCotegories] = useState([]);
    // const [click, setClick] = useState(false);
    // const [filter, setFilter] = useState({ searchterm: "", category: "", producer: "" });
    // const [productCountDisplay, setProductCountDisplay] = useState({displayLimit: 50, productCount: 0});

    // useEffect(() => {
    //     window.scrollTo (0, 0);
    //     }, []);

    // useEffect(() => {
    //     fetch('shopData.json')
    //     .then((r) => r.json())
    //     .then((data) => {
    //         //set Shop Data
    //         setShopData(data);
    //         //set Producers
    //         let tempProducers = [];
    //         Object.values(data).forEach(artikles => {
    //             if (!tempProducers.includes(artikles.producer)) {
    //                 tempProducers.push(artikles.producer)
    //             }
    //         });
    //         setProducers(tempProducers)
    //         //set Categories
    //         let tempCategories = [];
    //         Object.values(data).forEach(artikles => {
    //             if (!tempCategories.includes(artikles.category)) {
    //                 tempCategories.push(artikles.category)
    //             }
    //         });
    //         setCotegories(tempCategories)
    //     })
    // }, [Object.keys(shopData).length])
    
    // const handleClick = () => setClick(!click);

    // const handleChange = (e) => {
    //     // update the filter
    //     if (e.value === "Alle Hersteller" || e.value === "Alle Kategorien") {
    //         setFilter({...filter, [e.id]: ""});
    //     } else {
    //         setFilter({...filter, [e.id]: e.value});
    //     }
    // }

    // // fill dropdown
    // const dropdownData = (data) => {
    //     if (!data) {
    //         return (<option>Loading...</option>);
    //     } else {
    //         return Object.values(data).map((value, index) => {
    //             return (<option key={index}>{value}</option>);
    //         })
    //     }
    // }    

    // const filterData = (shopData) => {
    //     // check if filter is set
    //     let aktivefilter = false;
    //     Object.values(filter).map(value => {
    //         if (value === "Alle Hersteller" || value === "Alle Kategorien") {
    //             return null;
    //         } else if (value !== "") {
    //             return aktivefilter = true;
    //         } else {
    //             return null;
    //         }
    //     })
    //     let internCounter = productCountDisplay.displayLimit;
    //     // filter
    //     if (aktivefilter === true) {
    //         let filteredObjects = [];
    //         searchFilter(shopData, filteredObjects);
    //         if (filter.producer !== '') {
    //             filteredObjects = filteredObjects.filter(value => {
    //                 if (value.producer === filter.producer) {
    //                     return (value);
    //                 } else {
    //                     return null;
    //                 }
    //             });
    //         }
    //         if (filter.category !== '') {
    //             filteredObjects = filteredObjects.filter(value => {
    //                 if (value.category === filter.category) {
    //                     return (value);
    //                 } else {
    //                     return null;
    //                 }
    //             });
    //         }     
    //         if (internCounter === 0 && internCounter <= filteredObjects.length) {
    //             internCounter = filteredObjects.length;
    //         }
    //         if (filteredObjects.length <= internCounter) {
    //             internCounter = filteredObjects.length;
    //         } else {
    //             // console.log(internCounter + " | " + filteredObjects.length)
    //             if (Number.isInteger(internCounter/50) === false) {
    //                 // console.log(Math.round(internCounter/50))
    //                 if (Math.round(internCounter/50) === 0) {
    //                     internCounter = 50;
    //                 } else {
    //                     internCounter = Math.round(internCounter/50)*50;
    //                 }
    //             }
    //         }
    //         if (productCountDisplay.productCount !== filteredObjects.length) {
    //             setProductCountDisplay({displayLimit: internCounter, productCount: filteredObjects.length});
    //         }
    //         return filteredObjects.map((artikle, index) => {
    //             if (index < internCounter) {
    //                 return (<Card key={index} data={{ value: artikle }} />)
    //             } else {
    //                 return null
    //             }
    //         })
    //     } else {
    //         if (productCountDisplay.productCount !== Object.keys(shopData).length) {
    //             setProductCountDisplay({displayLimit: Object.keys(shopData).length, productCount: Object.keys(shopData).length});
    //         }
    //         // no filter
    //         return (Object.values(shopData).map((artikle, index) => {
    //             if (index < Object.keys(shopData).length) {
    //                 return (<Card key={index} data={{ value: artikle }} />)
    //             } else {
    //                 return null
    //             }
    //         }));
    //     }
    // }

    // const searchFilter = (shopData, filteredObjects) => {
    //     Object.values(shopData).map((value, index) => {
    //         if (filter.searchterm !== '') {
    //                 let productdetailsforfilter = [value.artikelnr, value.bestellnr, value.title];
    //                 let result;
    //                 result = productdetailsforfilter.filter(productdetails => {
    //                     if (productdetails !== null) {
    //                         return productdetails.toString().toLowerCase().includes(filter.searchterm.toString().toLowerCase());
    //                     } else {
    //                         return null;
    //                     }
    //                 })
    //                 if (result.length >= 1) {
    //                     filteredObjects.push(value);
    //                 }
    //         } else {
    //             // if no searchterm is set push as many products as the intern Counter is
    //             filteredObjects.push(value);
    //         }
    //         return null;
    //     })
    // }

    // const loadMore = () => {
    //     if (Object.keys(shopData).length < 50) {
    //         return null
    //     } else {
    //         return (
    //             <button className={!shopData ? "modal-content-description-button-add-nodisplay" : "modal-content-description-button-add"} onClick={e => {adjustCounter()}}>Lade mehr Produkte</button>
    //         )
    //     }
    // }
    // const adjustCounter = () => {
    //     setProductCountDisplay({displayLimit: productCountDisplay.displayLimit+50});
    // }

    // if (shopData === null) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <div className="filter">                        
    //                 <label className="filter-label">
    //                     Suchbegriff:
    //                     <div className="filter-datainput">
    //                         <input id="searchterm" type="text" placeholder="Suchbegriff" className="filter-search" onChange={e => {handleChange(e.target)}}></input>
    //                         <div className='filter-icon' onClick={handleClick}>
    //                             <i className="fas fa-filter"></i>
    //                         </div>
    //                     </div>
    //                 </label>
    //                 <label className={click ? 'filter-label' : 'filter-label deactive'}>
    //                     Hersteller: 
    //                     <select id="producer" className="filter-dropdown" onChange={e => {handleChange(e.target)}}>
    //                         <option>Alle Hersteller</option>
    //                         {dropdownData(producers)}
    //                     </select>
    //                 </label>
    //                 <label className={click ? 'filter-label' : 'filter-label deactive'}>
    //                     Kategorie: 
    //                     <select id="category" className="filter-dropdown" onChange={e => {handleChange(e.target)}}>
    //                         <option>Alle Kategorien</option>
    //                         {dropdownData(categories)}
    //                     </select>
    //                 </label>
    //                 <input value={productCountDisplay.displayLimit + '/' + productCountDisplay.productCount} readOnly></input>
    //             </div>
    //             <div className='inventar'>
    //                 <div className="cards">
    //                     {filterData(shopData)}
    //                 </div>
    //             </div>
    //             {loadMore()}
    //         </div>
    //     ) 
    // }
}

export default Inventar
