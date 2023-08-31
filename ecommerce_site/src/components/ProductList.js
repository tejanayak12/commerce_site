import React from 'react'
import ProductCard from './ProductCard';

export default function ProductList({ products }) {
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
