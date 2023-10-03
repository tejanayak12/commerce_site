import React, { createContext, useState, useEffect, useContext } from "react";
import { API_End_Points } from "../Constants";

export const AppContext = createContext({
  products: [],
  loading: true,
});

const CART_PRODUCTS = "CART_PRODUCTS";
const localCartItems = localStorage.getItem(CART_PRODUCTS);
const parseLocalCartItems = JSON.parse(localCartItems ? localCartItems : "{}");

function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState(parseLocalCartItems);

  useEffect(() => {
    fetch(API_End_Points.PRODUCTS)
      .then((res) => res.json())
      .then((res) => {
        console.log("API End Point :", res);
        setProducts(res.products);
      });
  }, []);

  const addProductToCart = (product) => {
    /* let addedProduct = cartItems.find(cartproduct => cartproduct.id == product.id);
        if (!addedProduct) {
            addedProduct = product
            product.quantity = 1
        } else {
            product.quantity++;
        };

        const filterProducts = cartItems.filter(cartproduct => cartproduct.id != product.id);
        setCartItems([...filterProducts, addedProduct]); */

    let cartProduct = cartProducts[product.id];
    if (!cartProduct) {
      cartProduct = product;
      cartProduct.quantity = 1;
    } else {
      cartProduct.quantity++;
    }
    setCartProducts({ ...cartProducts, [product.id]: cartProduct });
  };

  useEffect(() => {
    localStorage.setItem(CART_PRODUCTS, JSON.stringify(cartProducts));
  }, [cartProducts]);

  const productsById = {};
  products.forEach((product) => {
    productsById[product.id] = product;
  });

  const allCartProducts = Object.values(cartProducts);
  const cartCount = Object.keys(cartProducts).length;
  let totalCartAmount = 0;
  allCartProducts.forEach((product) => {
    totalCartAmount = totalCartAmount + product.totalprice;
  });

  return (
    <AppContext.Provider
      value={{
        products,
        productsById,
        loading,
        setLoading,
        cartCount,
        addProductToCart,
        cartProducts,
        allCartProducts,
        totalCartAmount
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
export default AppProvider;

/*

const {products , loading , setloading} = useAppContext();

*/
