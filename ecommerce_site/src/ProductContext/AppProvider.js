import React, { createContext, useState, useEffect, useContext } from 'react';
import { API_End_Points } from '../Constants';

export const AppContext = createContext({
    products: [],
    loading: true
});

function AppProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartProducts, setCartProducts] = useState({});

    useEffect(() => {
        fetch(API_End_Points.PRODUCTS)
            .then(res => res.json())
            .then(res => {
                console.log('API End Point :', res)
                setProducts(res.products);
            })
    }, []);

    const addProductToCart = (product) => {

        let addedProduct = cartItems.find(cartproduct => cartproduct.id == product.id);
        if (!addedProduct) {
            addedProduct = product
            product.quantity = 1
        } else {
            product.quantity++;
        };

        const filterProducts = cartItems.filter(cartproduct => cartproduct.id != product.id);
        setCartItems([...filterProducts, addedProduct]);

        let cartProduct = cartProducts[product.id];
        if (!cartProduct) {
            cartProduct = product;
            cartProduct.quantity = 1;
        } else {
            cartProduct.quantity++;
        }
        setCartProducts({ ...cartProducts, [product.id]: cartProduct });
    }

    return (
        <AppContext.Provider value={{
            products,
            loading,
            setLoading,
            cartItems,
            addProductToCart,
            cartProducts
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