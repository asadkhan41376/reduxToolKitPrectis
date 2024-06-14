import React from 'react';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
    const itemCart = useSelector((state) => state.cart.items);

    return (
        <div className='bg-gray-800 p-3 text-center'>
            <h2>Shopping Cart</h2>
            <ul>
                {itemCart.length > 0 ? (
                    itemCart.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price}
                        </li>
                    ))
                ) : (
                    <li>No items in cart</li>
                )}
            </ul>
        </div>
    );
};

export default ShoppingCart;
