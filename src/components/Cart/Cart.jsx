import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';

function Cart() {
    const cartItems = useSelector(function (state) {
        return state.cart.items;
    });

    function getTotalPrice() {
        return cartItems.reduce(function (total, item) {
            return total + item.price * item.quantity;
        }, 0);
    }

    if (cartItems.length === 0) {
        return <p style={{ padding: '20px' }}>Your cart is empty.</p>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Your Cart</h2>
            {cartItems.map(function (item) {
                return <CartItem key={item.id} item={item} />;
            })}
            <h3>Total: ${getTotalPrice()}</h3>
        </div>
    );
}

export default Cart;
