import React from 'react'
import { useAppContext } from '../ProductContext/AppProvider';
import ProductCard from './ProductCard';

export default function ProductDetails({ match, ...props }) {
    const { params } = match;
    const { id ,} = params;

    const { products } = useAppContext()

    const product = products.find(prod => prod.id == id);

    if (!product) return <h1>Sorry No Product Found....</h1>

    return (
        <div className='bg-slate-800 flex justify-center p-11'>
            <div className='text-white '>
                <ProductCard product={product} />
                Product ID  : {id}
            </div>
            <div>
        
            </div>

        </div>

    )
}
