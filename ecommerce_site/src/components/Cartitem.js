import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export class Cartitem extends Component {
   
    render() {
        const {
        thumbnail,
        title,
        id,
        quantity,
        price 
        } = this.props.product;

        const priceValue = quantity == 1 ? price : `${quantity} x ${price} = $${quantity * price}`

        return (
            <div className='flex items-center mb-4 gap-4 border-b-2 border-white-200'>
                <img className='w-40 rounded-lg border-3 border-white-200 border border-gray-400' src={thumbnail} alt={title} />
                <div className='flex-1'>
                    <Link className='text-xl font-semibold text-white' to={`/products/${id}`}>{title}</Link>
                    <p className='text-yellow-700'> ${priceValue}</p>
                </div>
            </div>
        )
    }
}

export default Cartitem