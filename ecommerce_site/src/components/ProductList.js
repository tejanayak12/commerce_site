import React from 'react'
import ProductCard from './ProductCard';
import { useAppContext } from '../ProductContext/AppProvider';

export default function ProductList() {
    const { products } = useAppContext();
    console.log('Productslist', products);
    return (
        <>
            <h3>Products</h3>
            <div className='product-list'>
                {products.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </>
    )
}
