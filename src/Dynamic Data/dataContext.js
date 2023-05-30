import React, { createContext, useEffect, useState } from 'react'
import { fetchCart, fetchProducts } from './DynamicData';
export const productContext = createContext();

const DataContext = ({ children }) => {
    const [products, setProducts] = useState();
    const [carts, setCarts] = useState();
    const [filteredProducts, setFilteredProducts] = useState();

    useEffect(() => {
        fetchProducts()
            .then(res => {
                setProducts(res.products);
                setFilteredProducts(res.products)
            });
        fetchCart()
            .then(res => setCarts(res))
    },
        // eslint-disable-next-line
        [])

    return (<>
        <productContext.Provider value={[products, setProducts, carts, setCarts, filteredProducts, setFilteredProducts]}>
            {children}
        </productContext.Provider>
    </>)
}


export default DataContext;