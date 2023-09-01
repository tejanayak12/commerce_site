import React, { createContext, useState, useEffect, useContext } from 'react';
import { API_End_Points } from '../Constants';

const AppContext = createContext({
    products: [],
    loadind: true
});

function AppProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_End_Points.PRODUCTS)
            .then(res => res.json())
            .then(res => {
                console.log('API End Point :', res)
                setProducts(res.products);
            })
    }, []);

    return (
        <AppContext.Provider value={{
            products,
            loading,
            setLoading
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);
export default AppProvider;

/*

const {products , loading , setloading} = useAppContext();

*/