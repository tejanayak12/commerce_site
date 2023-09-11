import React from 'react';
import { useAppContext } from '../ProductContext/AppProvider';
import RatingStars from './RatingStars';

export default function ProductDetails({ match, ...props }) {
    const { params } = match;
    const { id } = params;
    const { products, addProductToCart } = useAppContext();
    const product = products.find(prod => prod.id == id);

    if (!product) return <h1>Sorry No Product Found....</h1>;

    const addToCart = () => {
        addProductToCart(product)
    }

    return (
        <div className='bg-slate-800 flex justify-center p-11 grid gap-2 grid-cols-2 grid-rows-2 container'>
            <div className='text-neutral-200'>
                <div className='product-images flex flex-row gap-4 rounded-lg'>
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${product.title} Image ${index + 1}`}
                            className='border border-gray-400 rounded-lg p-2 max-h-40 max-w-xs'
                        />
                    ))}
                </div>
                <h3 className='text-2xl font-bold my-4'>{product.title}</h3>
                <p className='text-lg'>Brand : {product.brand}</p>
                <p className='text-lg'>Price : $ {product.price}</p>
                <p className='text-lg'>Description : {product.description}</p>
                <p className='text-lg'>Stock Available : {product.stock}</p>
                <p className='text-lg'>Discount-Percentage: {product.discountPercentage}</p>
                <div className='mb-2'>
                    Customer Ratings : <RatingStars rating={product.rating} />
                </div>
                <button
                    onClick={addToCart} className="flex max-w-xs justify-center rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3"
                > Add To Cart
                </button>
            </div>
        </div>
    );
}
