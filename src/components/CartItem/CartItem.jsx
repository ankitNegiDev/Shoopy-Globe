import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/cartSlice';

function CartItem(props) {
    const dispatch = useDispatch();
    const item = props.item;

    function handleRemove() {
        dispatch(removeFromCart(item.id));
    }

    function handleIncrease() {
        dispatch(increaseQuantity(item.id));
    }

    function handleDecrease() {
        dispatch(decreaseQuantity(item.id));
    }

    return (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <img src={item.thumbnail} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
            <div style={{ flexGrow: 1 }}>
                <h4>{item.title}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div>
                    <button onClick={handleDecrease} style={{ marginRight: '5px' }}>-</button>
                    <button onClick={handleIncrease} style={{ marginRight: '10px' }}>+</button>
                    <button onClick={handleRemove}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
