import React, { useState, useEffect } from 'react';
import Card from '../cards/Card';
import './Inventar.css';
import inventurdata from '../Inventur2020.json';

function Inventar(data) {

    useEffect(() => {
        window.scrollTo (0, 0);
        }, []);
    
    const [click, setClick] = useState(false);
    const [filter, setFilter] = useState({ searchterm: "", category: "", producer: "", pricefrom: "", priceto: "" });

    const handleClick = () => setClick(!click);

    const handleChange = (e) => {
        // update the filter
        setFilter({...filter, [e.id]: e.value});
    }

    const filterData = (idata, data) => {
        // check if filter is set
        let aktivefilter = false;
        Object.values(filter).map(value => {
            if (value !== "") {
                return aktivefilter = true;
            } else {
                return null;
            }
        })
        // filter
        if (aktivefilter === true) {
            return (Object.values(idata).map((ivalues,i) => {
                let filteredObjects = [];
                Object.values(ivalues).map((value,index) => {
                    if (index < 100) {
                        if (filter.searchterm !== '') {
                            let productdetailsforfilter = [value.artikelnr, value.bestellnr, value.desc, value.title];
                            let result;
                            result = productdetailsforfilter.filter(productdetails => {
                                if (productdetails !== null) {
                                    return productdetails.toString().toLowerCase().includes(filter.searchterm.toString().toLowerCase());
                                } else {
                                    return null;
                                }
                            })
                            if (result.length >= 1) {
                                filteredObjects.push(value);
                            }
                        } else {
                            filteredObjects.push(value);
                        }
                        return null;
                    }
                    return null;
                })
                if (filter.category !== '') {
                    filteredObjects = filteredObjects.filter(value => {
                        if (value.category === filter.category) {
                            return (value);
                        } else {
                            return null;
                        }
                    });
                }
                if (filter.producer !== '') {
                    filteredObjects = filteredObjects.filter(value => {
                        if (value.producer === filter.producer) {
                            return (value);
                        } else {
                            return null;
                        }
                    });
                }
                if (filter.pricefrom !== '') {
                    filteredObjects = filteredObjects.filter(value => {
                        if (value.vkpreis >= filter.pricefrom) {
                            return (value);
                        } else {
                            return null;
                        }
                    });
                }
                if (filter.priceto !== '') {
                    filteredObjects = filteredObjects.filter(value => {
                        if (value.vkpreis <= filter.priceto) {
                            return (value);
                        } else {
                            return null;
                        }
                    });
                }
                return filteredObjects.map((value, index) => {
                    return (<Card key={index} data={{ value: value, addToShoppingcart: data.data.addToShoppingcart, showShoppingcartModal: data.data.showShoppingcartModal }} />)
                })
            }));
        } else {
            // no filter
            return (Object.values(idata).map(value => {
                return Object.values(value).map((values,index) => {
                    if (index < 100) {
                        return (<Card key={index} data={{ value: values, addToShoppingcart: data.data.addToShoppingcart, showShoppingcartModal: data.data.showShoppingcartModal }} />)
                    } else {
                        return null
                    }
                })
            }));
        }
    }

    return (
        <div className="inventar">
            <div className="filter">                        
                <label className="filter-label">
                    Suchbegriff:
                    <div className="filter-group">
                        <input id="searchterm" type="text" placeholder="Suchbegriff" className="filter-search" onChange={e => {handleChange(e.target)}}></input>
                        <div className='filter-icon' onClick={handleClick}>
                            <i className="fas fa-filter"></i>
                        </div>
                    </div>
                </label>                       
                <label className={click ? 'filter-label' : 'filter-label deactive'}>
                    Kategorie: 
                    <select id="category" className="filter-kategorie" onChange={e => {handleChange(e.target)}}>
                        <option> </option>
                        <option>Lokomotive</option>
                        <option>Wagen</option>
                        <option>Zubehör</option>
                        <option>Haus</option>
                        <option>Fahrzeuge</option>
                    </select>
                </label>                             
                <label className={click ? 'filter-label' : 'filter-label deactive'}>
                    Hersteller: 
                    <select id="producer" className="filter-producer" onChange={e => {handleChange(e.target)}}>
                        <option> </option>
                        <option>LGB</option>
                        <option>usw</option>
                    </select>
                </label>                             
                <label className={click ? 'filter-label' : 'filter-label deactive'}>
                    Preis von:
                    <input id="pricefrom" type="number" placeholder="Preis ab" className="filter-vkpreisup" onChange={e => {handleChange(e.target)}}></input>
                </label>                             
                <label className={click ? 'filter-label' : 'filter-label deactive'}>
                    Preis bis:
                    <input id="priceto" type="number" placeholder="Preis bis" className="filter-vkpreisdown" onChange={e => {handleChange(e.target)}}></input>
                </label>
            </div>
            <div className="cards">
                {filterData(inventurdata, data)}
            </div>
        </div>
    )
}

export default Inventar
